import userData from './profile/user';
import PropTypes from 'prop-types';
import { ProfileElement } from './profile/ProfileElement';

console.log(userData.username);

export const App = () => {
   return <ProfileElement props={userData} />;
};

App.propTypes = {
   props: PropTypes.object,
};
