import NavigationArrowImage from '../../../../shared/assets/icons/nav-arrow.svg';

import { StyledNavigationArrowIcon, StyledNavigationButton, StyledNavigationButtonsGroup, StyledNavigationContainer, StyledNavigationPoints } from "./HistoricalDatesNavigation.styled"

type THistoricalDatesNavigationProps = {
	currentEventPoint: number
	totalEvents: number
	onClickPrevEventPoint: () => void
	onClickNextEventPoint: () => void
}

export const HistoricalDatesNavigation = (props: THistoricalDatesNavigationProps) => {
	const {
		currentEventPoint,
		totalEvents,
		onClickPrevEventPoint,
		onClickNextEventPoint
	} = props;

	const getFormattedEvent = (currentEventIndex: number, totalEvents: number) => {
		const currentEvent = currentEventIndex + 1;
		const currentFormattedEvent = currentEvent < 10 ? `0${currentEvent}` : currentEvent;
		const totalFormattedEvents = totalEvents < 10 ? `0${totalEvents}` : totalEvents;

		return `${currentFormattedEvent}/${totalFormattedEvents}`;
	}

	return (
		<StyledNavigationContainer>
			<StyledNavigationPoints>
				{getFormattedEvent(currentEventPoint, totalEvents)}
			</StyledNavigationPoints>
			<StyledNavigationButtonsGroup>
				<StyledNavigationButton
					onClick={() => onClickPrevEventPoint()}
					disabled={currentEventPoint === 0}
				>
					<StyledNavigationArrowIcon
						src={NavigationArrowImage}
						alt="Navigation Arrow Icon"
					/>

				</StyledNavigationButton>
				<StyledNavigationButton
					onClick={() => onClickNextEventPoint()}
					disabled={currentEventPoint === totalEvents}
				>
					<StyledNavigationArrowIcon
						src={NavigationArrowImage}
						alt="Navigation Arrow Icon"
						isRotated
					/>
				</StyledNavigationButton>
			</StyledNavigationButtonsGroup>
		</StyledNavigationContainer>
	)
}
