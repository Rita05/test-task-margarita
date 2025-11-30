import { styled } from "styled-components";

export const HistoricalDatesRangeContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding-right: 30px;
	max-width: 973px;
	width: 100%;
	font-family: PT Sans Bold;
	font-size: clamp(56px, calc(56px + (200 - 56) * ((100vw - 320px) / (1024 - 320))), 200px);
	
	font-weight: 700;
	line-height: 160px;
	text-align: center;
	margin-top: 96px;

	@media (max-width: 1024px) {
		justify-content: center;
		padding-right: 0;
	}

	@media (max-width: 900px) and (min-width: 768px){
		margin-top: 65px;
		font-size: 130px;
		letter-spacing: -3.2px;
	}

	@media (max-width: 767px) {
		margin-top: 56px;
		justify-content: space-between;
	}

	@media (max-width: 320px) {
		max-width: 273px;
		font-size: 56px;
		line-height: 67px;
	}
`

export const HistoricalDateStart = styled.p`
	color: #5D5FEF;
	margin: 0;
	padding: 0;
`

export const HistoricalDateEnd = styled.p`
	color: #EF5DA8;
	margin: 0;
	padding: 0;
`

