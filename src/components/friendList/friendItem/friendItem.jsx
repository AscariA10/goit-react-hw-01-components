import PropTypes from 'prop-types';
import { FriendItem, OnlineIcon, FriendImage, FriendName } from '../FriendList.styled';

export const Friend = ({ props: { avatar, name, isOnline } }) => {
   return (
      <FriendItem>
         <OnlineIcon online={isOnline}></OnlineIcon>
         <FriendImage src={avatar} alt={name} />
         <FriendName>{name} </FriendName>
      </FriendItem>
   );
};

Friend.propTypes = {
   props: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
   }),
};
