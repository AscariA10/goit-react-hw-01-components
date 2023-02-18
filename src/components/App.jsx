import PropTypes from 'prop-types';
// --------
import userData from './Profile/user';
import statisticData from './Statistics/data';
import friendsInfo from './FriendList/friends';
import transactionInfo from './TransactionHistory/transactions';

import { ProfileElement } from './profile/ProfileElement';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

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
