import { v4 as uuidv4 } from 'uuid';

import { THistoricalEvents } from "../../../../shared/constants/historical-data";
import { HistoricalEventsPaginationButton, HistoricalEventsPaginationContainer } from "./HistoricalEventsPagination.styled";

type THistoricalEventsPaginationProps = {
	historicalEvents: THistoricalEvents[]
	currentEventPoint: number
	onClickPage: (pointIndex: number) => void
}

export const HistoricalEventsPagination = (props: THistoricalEventsPaginationProps) => {
	const {
		historicalEvents,
		currentEventPoint,
		onClickPage
	} = props;
	return (
		<HistoricalEventsPaginationContainer>
			{historicalEvents.map((_, index) => {
				return (
					<HistoricalEventsPaginationButton
						key={index}
						isActive={currentEventPoint === index}
						onClick={() => onClickPage(index)}
					>

					</HistoricalEventsPaginationButton>
				)
			})}
		</HistoricalEventsPaginationContainer>
	)
}

