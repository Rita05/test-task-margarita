import { RefObject } from "react"
import { HistoricalDateEnd, HistoricalDatesRangeContainer, HistoricalDateStart } from "./HistoricalDatesRange.styled"

type THistoricalDatesRangeProps = {
	startDateEvent: number
	endDateEvent: number
	startDateEventRef: RefObject<HTMLDivElement | null>
	endDateEventRef: RefObject<HTMLDivElement | null>
}

export const HistoricalDatesRange = (props: THistoricalDatesRangeProps) => {
	const {
		startDateEvent,
		endDateEvent,
		startDateEventRef,
		endDateEventRef
	} = props;
	return (
		<HistoricalDatesRangeContainer>
			<HistoricalDateStart ref={startDateEventRef}>{startDateEvent}</HistoricalDateStart>
			<HistoricalDateEnd ref={endDateEventRef}>{endDateEvent}</HistoricalDateEnd>
		</HistoricalDatesRangeContainer>
	)
}