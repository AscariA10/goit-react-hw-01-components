import PropTypes from 'prop-types';

import userData from './profile/user';
import statisticData from './statistics/data';
import friendsInfo from './friendList/friends';
import transactionInfo from './transactionHistory/transactions';

import { ProfileElement } from './profile/ProfileElement';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/friendList';
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
