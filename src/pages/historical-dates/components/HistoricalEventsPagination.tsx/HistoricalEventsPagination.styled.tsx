import { styled } from "styled-components";

export const HistoricalEventsPaginationContainer = styled.div`
	display: none;

	@media(max-width: 767px) {
		display: flex;
		gap: 0 10px;
		justify-content: center;
		margin-bottom: 18.67px;
	}
`

export const HistoricalEventsPaginationButton = styled.button<{ isActive: boolean }>`
	width: 6px;
	height: 6px;
	display: block;
	padding: 0;
	line-height: 0;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	background-color: ${props => props.isActive ? 'rgba(66, 86, 122, 1)' : 'rgba(66, 86, 122, 0.4)'};
`