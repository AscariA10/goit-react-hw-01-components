import PropTypes from 'prop-types';
// --------
import userData from './ProfileTask/user';
import statisticData from './StatisticsTask/data';
import friendsInfo from './FriendListTask/friends';
import transactionInfo from './TransactionHistoryTask/transactions';

import { ProfileElement } from './ProfileTask/ProfileElement';
import { Statistics } from './StatisticsTask/Statistics';
import { FriendList } from './FriendListTask/FriendList';
import { TransactionHistory } from './TransactionHistoryTask/TransactionHistory';

console.log(userData.username);

export const App = () => {
   return (
      <>
         <ProfileElement props={userData} />
         <Statistics title="Upload stats" stats={statisticData} />
         <FriendList friendsInformation={friendsInfo} />
         <TransactionHistory transactionInformation={transactionInfo} />
      </>
   );
};

App.propTypes = {
   props: PropTypes.object,
   title: PropTypes.string,
   stats: PropTypes.object,
   friendsInformation: PropTypes.arrayOf(PropTypes.object),
   transactionInformation: PropTypes.arrayOf(PropTypes.object),
};
