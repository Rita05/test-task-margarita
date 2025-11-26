
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';

import { SwiperWrapper, SwiperButtonNext, SwiperButtonPrev, SwiperComponent, SwiperSlideContent, SwiperSlideDescription, SwiperSlideYear, SwiperEventTitle } from "./HistoricalEventsSlider.styled";
import { THistoricalEvents } from '../../../../shared/constants/historical-data';
import { useEffect, useRef, useState } from 'react';

type THistoricalEventsSliderProps = {
	historicalEvents: THistoricalEvents
	currentEventPoint: number
}

export const HistoricalEventsSlider = (props: THistoricalEventsSliderProps) => {
	const { historicalEvents } = props;
	const { title, events } = historicalEvents;

	return (
		<SwiperWrapper>
			<SwiperEventTitle>{title}</SwiperEventTitle>
			<SwiperComponent
				modules={[Navigation]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				breakpoints={{
					320: {
						slidesPerView: 1.5,
						spaceBetween: 25
					},
					769: {
						slidesPerView: 2,
						spaceBetween: 25
					},
					1025: {
						slidesPerView: 3.5,
						spaceBetween: 80
					}
				}}
				pagination={{ clickable: true }}
			>
				{
					events.map((event) => {
						const { year, description } = event;
						return (
							<SwiperSlide
								key={uuidv4()}
							>
								<SwiperSlideContent>
									<SwiperSlideYear>
										{year}
									</SwiperSlideYear>
									<SwiperSlideDescription>
										{description}
									</SwiperSlideDescription>
								</SwiperSlideContent>
							</SwiperSlide>
						)
					})
				}
			</SwiperComponent>
			<SwiperButtonPrev className="swiper-button-prev" />
			<SwiperButtonNext className="swiper-button-next" />
		</SwiperWrapper >
	)
}
