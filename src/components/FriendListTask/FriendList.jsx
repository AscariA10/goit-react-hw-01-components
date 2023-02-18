import PropTypes from 'prop-types';
import { FriendGrid } from './FriendList.styled';

import { Friend } from './friendItem/friendItem';

export const FriendList = ({ friendsInformation }) => {
   return (
      <FriendGrid>
         {friendsInformation.map(friend => {
            return <Friend props={friend} key={friend.id} />;
         })}
      </FriendGrid>
   );
};

FriendList.propTypes = {
   friend: PropTypes.shape({
      id: PropTypes.string.isRequired,
   }),
};
// sdfghjkl;
