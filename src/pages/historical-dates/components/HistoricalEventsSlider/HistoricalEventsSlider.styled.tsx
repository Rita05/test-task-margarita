import { styled } from "styled-components";
import { Swiper } from 'swiper/react';

export const SwiperWrapper = styled.div`
	position: relative;
	width: 100%;
	margin-top: 56px;

	& .swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

	@media (max-width: 767px) {
		margin-top: 57px;
	}

	& .swiper-slide {
		opacity: 1;
    visibility: visible;
		animation: fadeInUp 1.4s ease-out;

		@keyframes fadeInUp {
			from {
				opacity: 0;
				visibility: hidden;
			}
			to {
				opacity: 1;
    		visibility: visible;
			}
		}
	}

`


export const SwiperEventTitle = styled.p`
	display: none;

	@media (max-width: 767px) {
		font-family: PT Sans;
		font-weight: 700;
		font-size: 14px;
		display: block;
		padding: 0 0 20px;
		margin: 0;
		color: rgba(66, 86, 122, 1);
	}
`

export const SwiperComponent = styled(Swiper)`
	width: 100%;
	@media(max-width: 767px) {
		padding-top: 20px;
		border-top: 1px solid rgba(199, 205, 217, 1);
		min-height: 114px;

		& .swiper-wrapper {
			margin-bottom: 78px;
		}
	}


`

export const SwiperSlideContent = styled.div``

export const SwiperSlideYear = styled.p`
	color: rgba(56, 119, 238, 1);
	font-family: Bebas Neue;
	font-size: 25px;
	font-weight: 400;
	text-align: left;
	text-transform: uppercase;
	margin: 0 0 15px;
	padding: 0;

	@media (max-width: 767px) {
		font-size: clamp(16px, calc(16px + (25 - 16) * ((100vw - 320px) / (768 - 320))), 25px);
	}

	@media(max-width: 320px) {
		font-size: 16px;
	}

`

export const SwiperSlideDescription = styled.p`
	font-family: PT Sans;
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;
	text-align: left;
	color: rgba(66, 86, 122, 1);
	margin: 0;
	padding: 0;

	@media (max-width: 767px) {
		font-size: clamp(14px, calc(14px + (20 - 14) * ((100vw - 320px) / (768 - 320))), 20px);
	}
	
	@media(max-width: 320px) {
		font-size: 14px;
		line-height: 145%;
	}
`

export const SwiperButtonPrev = styled.button`
	position: absolute;
	width: 40px;
	height: 40px;
	left: -60px !important;
	top: 50% !important;
	transform: translateY(-50%);
	border-radius: 50%;
	border: none;
	box-shadow: 0px 0px 15px 0px rgba(56, 119, 238, 0.1);
	background: rgba(255, 255, 255, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	svg {
		width: 12px;
		height: 12px;
	}

	@media(max-width: 767px) {
		display: none;
	}

`
export const SwiperButtonNext = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: -60px !important;
  top: 50% !important;
  transform: translateY(-50%);
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 15px 0px rgba(56, 119, 238, 0.1);
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

	svg {
		width: 12px;
		height: 12px;
	}

	@media(max-width: 767px) {
		display: none;
	}
`;

