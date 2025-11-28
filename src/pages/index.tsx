import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { historicalEvents } from "../data/constants/historical-data";
import { HistoricalEventsSlider } from "./historical-dates/components/HistoricalEventsSlider/HistoricalEventsSlider";
import { HistoricalDatesRange } from "./historical-dates/components/HistoricalDatesRange/HistoricalDatesRange";
import { HistoricalDatesNavigation } from "./historical-dates/components/HistoricalDatesNavigation/HistoricalDatesNavigation";
import { HistoricalEventsPagination } from "./historical-dates/components/HistoricalEventsPagination.tsx/HistoricalEventsPagination";
import { HistoricalDatesCircle } from "./historical-dates/components/HistoricalDatesCircle/HistoricalDatesCircle";

import { HistoricalDatesTitle, HistoricalDatesSection, VerticalLeftLine, VerticalRightLine } from "./index.styled";

const DIAMETER = 530;
const ANIMATION_TIME = 0.6;

export const HistoricalDatesContainer = () => {
	const numOfPoints = historicalEvents.length;
	const angleBetweenPoints = 360 / numOfPoints;

	const startDateEventRef = useRef<HTMLDivElement>(null);
	const endDateEventRef = useRef<HTMLDivElement>(null);

	const [activeEventPoint, setActiveEventPoint] = useState(1);
	const [startDateEvent, setStartDateEvent] = useState<number>(historicalEvents[0].events[0].year);
	const [endDateEvent, setEndDateEvent] = useState<number>(historicalEvents[0].events[historicalEvents[0].events.length - 1].year);
	const [mainCircleRotationAngle, setmainCircleRotationAngle] = useState(0);
	const [diameter, setDiameter] = useState(DIAMETER);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
				setDiameter(430);
			} else {
				setDiameter(530);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);


	const animateDatesOfEvents = (timePeriodIndex: number) => {
		const currentPeriodEvents = historicalEvents[timePeriodIndex].events;
		const newStartDateEvent = Number(currentPeriodEvents[0].year);
		const newEndDateEvent = Number(currentPeriodEvents[currentPeriodEvents.length - 1].year);

		gsap.to(startDateEventRef.current, {
			duration: ANIMATION_TIME,
			textContent: newStartDateEvent,
			ease: 'none',
			snap: { textContent: 1 },
			onUpdate: () => {
				setStartDateEvent(newStartDateEvent);
			}
		});

		gsap.to(endDateEventRef.current, {
			duration: ANIMATION_TIME,
			textContent: newEndDateEvent,
			ease: 'none',
			snap: { textContent: 1 },
			onUpdate: () => {
				setEndDateEvent(newEndDateEvent);
			}
		});
	}

	const handleClickPrevEventPoint = () => {
		if (activeEventPoint > 1) {
			handleChangeEventPoint(activeEventPoint - 2);
		}
	}

	const handleClickNextEventPoint = () => {
		if (activeEventPoint < numOfPoints) {
			handleChangeEventPoint(activeEventPoint);
		}
	}

	const handleChangeEventPoint = useCallback((pointIndex: number) => {
		animateDatesOfEvents(pointIndex);
		const newPointIndex = pointIndex + 1;
		const diffEventPointsPosition = newPointIndex - activeEventPoint;

		setmainCircleRotationAngle(prevAngle => prevAngle + diffEventPointsPosition * angleBetweenPoints);
		setActiveEventPoint(newPointIndex);
	}, [activeEventPoint]);


	const handleClickPaginationPage = (pointIndex: number) => {
		handleChangeEventPoint(pointIndex);
	}


	return (
		<HistoricalDatesSection>
			<HistoricalDatesTitle>
				Исторические <br />даты
			</HistoricalDatesTitle>
			<VerticalLeftLine />
			<VerticalRightLine />
			<HistoricalDatesRange
				startDateEvent={startDateEvent}
				endDateEvent={endDateEvent}
				startDateEventRef={startDateEventRef}
				endDateEventRef={endDateEventRef}
			/>
			<HistoricalDatesCircle
				cicrleDiameter={diameter}
				numOfPoints={numOfPoints}
				activeEventPoint={activeEventPoint}
				historicalEvents={historicalEvents}
				onChangeEventPoint={handleChangeEventPoint}
				mainCircleRotationAngle={mainCircleRotationAngle}
			/>
			<HistoricalDatesNavigation
				onClickPrevEventPoint={handleClickPrevEventPoint}
				onClickNextEventPoint={handleClickNextEventPoint}
				currentEventPoint={activeEventPoint - 1}
				totalEvents={numOfPoints}
			/>
			<HistoricalEventsSlider
				currentEventPoint={activeEventPoint - 1}
				historicalEvents={historicalEvents[activeEventPoint - 1]}
			/>
			<HistoricalEventsPagination
				currentEventPoint={activeEventPoint - 1}
				historicalEvents={historicalEvents}
				onClickPage={handleClickPaginationPage}
			/>
		</HistoricalDatesSection >
	)
}

