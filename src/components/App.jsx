import PropTypes from 'prop-types';

import userData from './Profile/user';
import statisticData from './Statistics/data';
import friendsInfo from './FriendList/friends';
import transactionInfo from './TransactionHistory/transactions';

import { ProfileElement } from './Profile/ProfileElement';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
