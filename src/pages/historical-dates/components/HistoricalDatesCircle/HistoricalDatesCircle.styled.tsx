import { styled } from "styled-components";
import { TEventsPointsPosition } from "./HistoricalDatesCircle";

type THistoricalDatesCirclePointProps = {
	numOfPoints: number;
	pointIndex: number;
	isActive: boolean;
	position: TEventsPointsPosition;
	rotationAngle: number;
	index: number;
}

type THistoricalDatesCircleEventProps = Pick<
	THistoricalDatesCirclePointProps,
	"isActive" | "pointIndex" | "numOfPoints"
>;;

export const HistoricalDatesCircleWrapper = styled.div`
	display: flex;
	justify-content: center;
	left: 0;
	position: absolute;
	top: 215px;
	width: 100%;
	box-sizing: border-box;

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 1px;
		background: rgba(66, 86, 122, 0.1);
		transform: translateY(-50%);
  }

	@media (max-width: 900px) and (min-width: 768px){
		display: block;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (max-width: 767px) {
		display: none;
	}
`

export const HistoricalDatesCircleImage = styled.div < { mainCircleRotationAngle: number } > `	
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 2;
	width: 530px;
	height: 530px;
	border-radius: 50%;
	transform: rotate(-${props => props.mainCircleRotationAngle}deg);
	transition: transform 0.6s ease-in;
	border: 1px solid rgba(66, 86, 122, 0.2);
	box-sizing: border-box;

	@media (max-width: 900px) and (min-width: 768px){
		width: 430px;
		height: 430px;
		left: 50%;
		transform: translateX(-50%) rotate(-${props => props.mainCircleRotationAngle}deg);
	}
`

export const HistoricalDatesCirclePoint = styled.div<THistoricalDatesCirclePointProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform-origin: center;
	margin: -28px;
	${(props) => {
		const position = props?.position;
		const i = props.index;

		return `
			transform: 
			rotate(${position[i].eventPointRotation}deg) 
			translate(${position[i].translation}px) 
			rotate(${position[i].eventPointText + props.rotationAngle}deg);
	`
	}}
	
	`

export const HistoricalDatesCirclePointEvent = styled.div`
		width: 56px;
		height: 56px;
		border-radius: 50%;
		cursor: pointer;
		visibility: visible;
	`
export const HistoricalDatesCircleEvent = styled.div<THistoricalDatesCircleEventProps>`
		position: relative;
		width: ${(props) => (props.isActive ? '56px' : '6px')};
  	height: ${(props) => (props.isActive ? '56px' : '6px')};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid rgba(48, 62, 88, 0.5);
		border-radius: 50%;
		background-color: ${(props) => props.isActive ? 'rgba(244, 245, 249, 1)' : 'rgba(66, 86, 122, 1)'};
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		color: rgba(66, 86, 122, 1);
		font-family: PT Sans;
		font-size: ${(props) => props.isActive ? '20px' : '0'};
		font-weight: 400;
		line-height: 30px;
		text-align: left;
		transition: all 0.6 ease-in-out;

		&:hover {
			width: 56px;
			height: 56px;
			font-size: 20px;
			background-color: rgba(244, 245, 249, 1);
			cursor: ${props => props.isActive ? 'default' : 'pointer'};
		}
		`

export const HistoricalDatesCircleEventTitle = styled.span<{ isActive: boolean }>`
		font-family: PT Sans;
		font-size: 20px;
		font-weight: 700;
		line-height: 30px;
		text-align: left;
		position: absolute;
		left: 80px;
		opacity: ${(props) => props.isActive ? 1 : 0};
		visibility: ${(props) => props.isActive ? 'visible' : 'hidden'};
		transition: opacity 0.6s linear;
		color: rgba(66, 86, 122, 1);

		&:hover {
			visibility: visible;
			opacity: 1;
		}
		
	`
