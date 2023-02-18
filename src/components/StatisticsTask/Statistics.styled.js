import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/RandomColorPicker';

export const StatisticsCard = styled.section`
   display: flex;
   margin-right: auto;
   margin-left: auto;
   flex-direction: column;
   padding: 20px;

   width: 500px;
   border: 10px dashed red;
   background-color: rgba(120, 200, 200, 0.1);
`;

export const Title = styled.h2`
   margin-right: auto;
   margin-left: auto;
   margin-top: 0px;
   margin-bottom: 30px;
   font-size: 40px;
   text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
   display: flex;
   margin: 0px;
   padding: 0px;
   list-style: none;
   justify-content: space-evenly;
`;

export const StatisticsItem = styled.li`
   display: flex;
   flex-direction: column;

   align-items: center;

   border: 2px solid blue;
   border-radius: 8px;
   padding: 10px;
   font-size: 25px;
   background-color: ${getRandomHexColor};
`;

export const StasticLabel = styled.span`
   font-size: 20px;
   font-weight: bold;
   margin-bottom: 8px;
`;

export const StatisticValue = styled.span`
   font-size: 30px;
`;
