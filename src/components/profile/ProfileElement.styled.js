import styled from '@emotion/styled';

export const ProfileCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: auto;
   margin-left: auto;
   padding: 10px;
   border: 10px dashed tomato;
   width: 330px;
   min-height: 450px;

   background-color: rgba(255, 160, 122, 0.1);
`;

export const UserSocialInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const ProfileImage = styled.img`
   border-radius: 30%;
   border: 3px solid purple;
`;

export const UserName = styled.p`
   margin: 5px;
   font-size: 40px;
`;

export const UserSocialTag = styled.p`
   margin: 5px;
   font-size: 30px;
   font-style: italic;
   color: grey;
`;

export const UserLocation = styled.p`
   margin: 10px;
   font-size: 20px;
   font-style: italic;
   font-weight: bold;
   color: grey;
`;

export const SocialStatsList = styled.ul`
   display: flex;
   justify-content: space-between;
   list-style: none;

   padding: 5px;
`;

export const SocialStat = styled.li`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding: 2px;

   width: 90px;
   border: 1px solid blue;
   font-size: 20px;
`;
