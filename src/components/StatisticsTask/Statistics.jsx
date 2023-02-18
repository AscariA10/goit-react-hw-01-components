import PropTypes from 'prop-types';
import {
   StatisticsCard,
   Title,
   StatisticsList,
   StatisticsItem,
   StasticLabel,
   StatisticValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
   return (
      <StatisticsCard>
         <Title>{title.length > 0 && title}</Title>
         <StatisticsList>
            {stats.map(stat => {
               return (
                  <StatisticsItem key={stat.id}>
                     <StasticLabel>{stat.label}: </StasticLabel>
                     <StatisticValue>{stat.percentage}%</StatisticValue>
                  </StatisticsItem>
               );
            })}
         </StatisticsList>
      </StatisticsCard>
   );
};

Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      })
   ),
};

// <li>
//    <span>.docx</span>
//    <span>4%</span>
// </li>
// <li>
//    <span>.mp3</span>
//
