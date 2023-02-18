import PropTypes from 'prop-types';
import { TableHead, Table, TableRaw, TableCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactionInformation }) => {
   return (
      <Table>
         <TableHead>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </TableHead>
         <tbody>
            {transactionInformation.map(({ id, type, amount, currency }) => {
               return (
                  <TableRaw key={id}>
                     <TableCell>{type}</TableCell>
                     <TableCell>{amount}</TableCell>
                     <TableCell>{currency}</TableCell>
                  </TableRaw>
               );
            })}
         </tbody>
      </Table>
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
// dfghjkl;
