import PropTypes from 'prop-types';
import { Friend } from './friendItem/friendItem';

export const FriendList = ({ friendsInformation }) => {
   return (
      <ul>
         {friendsInformation.map(friend => {
            return <Friend props={friend} key={friend.id} />;
         })}
      </ul>
   );
};

FriendList.propTypes = {
   friend: PropTypes.shape({
      id: PropTypes.string.isRequired,
   }),
};
