import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
   return (
      <section>
         <h2>{title.length > 0 && title}</h2>

         <ul>
            {stats.map(stat => {
               return (
                  <li key={stat.id}>
                     <span>{stat.label}: </span>
                     <span>{stat.percentage}%</span>
                  </li>
               );
            })}
         </ul>
      </section>
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
//    <span>14%</span>
// </li>
// <li>
//    <span>.pdf</span>
//    <span>41%</span>
// </li>
// <li>
//    <span>.mp4</span>
//    <span>12%</span>
// </li>
