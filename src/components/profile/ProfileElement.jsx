import PropTypes from 'prop-types';
import {
   ProfileCard,
   UserSocialInfo,
   ProfileImage,
   UserName,
   UserSocialTag,
   UserLocation,
   SocialStatsList,
   SocialStat,
} from './ProfileElement.styled';

export const ProfileElement = ({ props: { avatar, username, tag, location, stats } }) => {
   return (
      <ProfileCard>
         <UserSocialInfo>
            <ProfileImage src={avatar} alt={username} width="200px" />
            <UserName>{username}</UserName>
            <UserSocialTag>social: @{tag}</UserSocialTag>
            <UserLocation>{location}</UserLocation>
         </UserSocialInfo>

         <SocialStatsList>
            <SocialStat>
               <span>Followers</span>
               <span>{stats.followers}</span>
            </SocialStat>
            <SocialStat>
               <span>Views</span>
               <span>{stats.views}</span>
            </SocialStat>
            <SocialStat>
               <span>Likes</span>
               <span>{stats.likes}</span>
            </SocialStat>
         </SocialStatsList>
      </ProfileCard>
   );
};

ProfileElement.propTypes = {
   props: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.shape({
         followers: PropTypes.number.isRequired,
         views: PropTypes.number.isRequired,
         likes: PropTypes.number.isRequired,
      }),
   }),
};
