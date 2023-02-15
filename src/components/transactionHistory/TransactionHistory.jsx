import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactionInformation }) => {
   return (
      <table>
         <thead>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </thead>
         <tbody>
            {transactionInformation.map(({ id, type, amount, currency }) => {
               return (
                  <tr key={id}>
                     <td>{type}</td>
                     <td>{amount}</td>
                     <td>{currency}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

TransactionHistory.propTypes = {
   transactionInformation: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
      })
   ),
};
