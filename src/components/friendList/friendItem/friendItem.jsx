import PropTypes from 'prop-types';

export const Friend = ({ props: { avatar, name, isOnline } }) => {
   return (
      <li>
         <span>{isOnline ? 'online' : 'offline'} </span>
         <img src={avatar} alt={name} width="100" />
         <p>{name} </p>
      </li>
   );
};

Friend.propTypes = {
   props: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
   }),
};
