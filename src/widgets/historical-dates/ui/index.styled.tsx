import styled from "styled-components";


export const HistoricalDatesSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;  
  margin: 0 auto;  
  min-height: 1080px;  
	box-sizing: border-box;
  padding: 160px 80px 104px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: rgba(66, 86, 122, 0.1);
    transform: translateX(-50%);
  }

  @media (max-width: 767px) {
    padding: 59px 20px 13.33px;
    min-height: 568px;
    &::before {
      display: none;
      content: none;
    }
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(66, 86, 122, 0.1);
`;


export const VerticalLeftLine = styled(VerticalLine)`
  left: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const VerticalRightLine = styled(VerticalLine)`
  right: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HistoricalDatesTitle = styled.h1`
	color: rgba(66, 86, 122, 1);
	font-family: PT Sans Bold;
	font-weight: 700;
	text-align: left;
	margin: 0;
	padding: 0;
  display: flex;
  align-self: flex-start;
  line-height: 120%;
  font-size: clamp(20px, calc(20px + (56 - 20) * ((100vw - 320px) / (1024 - 320))), 56px);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 5px; 
    height: 120px; 
    background: linear-gradient(180deg, #3877EE, #EF5DA8);
		background-repeat: no-repeat;
		background-size: cover; 
    z-index: 2; 

    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`

export const HistoricalDatesBlock = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center; 
  align-items: center;     
  pointer-events: none;
  z-index: 0;
`
