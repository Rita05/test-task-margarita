
import { RefObject, useMemo } from "react";
import { THistoricalEvents } from "../../../../shared/constants/historical-data";
import {
	HistoricalDatesCircleEvent,
	HistoricalDatesCircleEventTitle,
	HistoricalDatesCircleImage,
	HistoricalDatesCirclePoint,
	HistoricalDatesCirclePointEvent,
	HistoricalDatesCircleWrapper
} from "./HistoricalDatesCircle.styled";

type THistoricalDatesCircleProps = {
	mainCircleRotationAngle: number
	cicrleDiameter: number
	numOfPoints: number
	activeEventPoint: number
	historicalEvents: THistoricalEvents[]
	onChangeEventPoint: (pointIndex: number) => void
}


export type TEventsPointsPosition = {
	eventPointRotation: number
	eventPointText: number
	translation: number
}[];

export const initializeEventsPointsPosition = (numOfPoints: number, diameter: number) => {
	const eventsPointsPosition: TEventsPointsPosition = [];
	const angleOfRotation = 360 / numOfPoints;
	let pointRotation = 0;

	for (let i = 0; i < numOfPoints; i++) {
		eventsPointsPosition.push({
			eventPointRotation: pointRotation - angleOfRotation,
			eventPointText: angleOfRotation - pointRotation,
			translation: diameter / 2,
		});

		pointRotation = pointRotation + angleOfRotation;
	}

	return eventsPointsPosition;
};


export const HistoricalDatesCircle = ({
	numOfPoints,
	historicalEvents,
	activeEventPoint,
	cicrleDiameter,
	mainCircleRotationAngle,
	onChangeEventPoint
}: THistoricalDatesCircleProps) => {


	const initialEventsPointsPosition: TEventsPointsPosition = useMemo(
		() => initializeEventsPointsPosition(numOfPoints, cicrleDiameter),
		[numOfPoints]
	);


	return (
		<HistoricalDatesCircleWrapper>
			<HistoricalDatesCircleImage
				mainCircleRotationAngle={mainCircleRotationAngle}
			>
				{historicalEvents.map((event, index) => {
					const { title } = event;
					const pointIndex = index + 1;
					return (
						<HistoricalDatesCirclePoint
							key={index}
							numOfPoints={numOfPoints}
							pointIndex={pointIndex}
							index={index}
							rotationAngle={mainCircleRotationAngle}
							position={initialEventsPointsPosition}
							isActive={pointIndex === activeEventPoint}
							onClick={() => onChangeEventPoint(index)}
						>
							<HistoricalDatesCirclePointEvent>
								<HistoricalDatesCircleEvent
									numOfPoints={numOfPoints}
									pointIndex={pointIndex}
									isActive={pointIndex === activeEventPoint}
								>
									{pointIndex}
									<HistoricalDatesCircleEventTitle
										isActive={pointIndex === activeEventPoint}
									>
										{title}
									</HistoricalDatesCircleEventTitle>
								</HistoricalDatesCircleEvent>
							</HistoricalDatesCirclePointEvent>
						</HistoricalDatesCirclePoint>
					);
				})}
			</HistoricalDatesCircleImage>
		</HistoricalDatesCircleWrapper>
	);
}



