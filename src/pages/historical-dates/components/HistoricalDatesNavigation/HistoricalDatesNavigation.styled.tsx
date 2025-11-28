import { styled } from "styled-components";


export const StyledNavigationContainer = styled.div`
  max-width: 120px;
	width: 100%;
	margin-top: 137px;

	@media (max-width: 767px) {
		max-width: 58.33px;
		position: absolute;
		bottom: 13.33px;
		margin-top: 0;
	}
`

export const StyledNavigationPoints = styled.p`
	color: rgba(66, 86, 122, 1);
	font-family: PT Sans;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	text-align: left;
	margin: 0;
	padding: 0 0 20px;

	@media (max-width: 767px) {
		padding-bottom: 10.67px;
	}
`
export const StyledNavigationButtonsGroup = styled.div`
	display: flex;
	justify-content: space-between;
`
export const StyledNavigationButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px solid rgba(66, 86, 122, 0.5);
	background-color: inherit;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	&:hover { 
		background-color: #fff;
	}

	@media (max-width: 767px) {
		width: 25px;
		height: 25px;
	}
`

export const StyledNavigationArrowIcon = styled.img<{ isRotated?: boolean }>`
	transform: ${props => props.isRotated ? 'rotate(180deg)' : 'rotate(0deg)'};
	object-fit: cover;
	width: 6.25px;
	height: 12.5px;

	@media (max-width: 767px) {
		width: 3.12px;
		height: 6.25px;
	}
`