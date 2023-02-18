import styled from '@emotion/styled';

export const FriendGrid = styled.ul`
   width: 300px;
   margin-right: auto;
   margin-left: auto;
   margin-bottom: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   list-style: none;

   border: 10px dashed blue;
`;

export const FriendItem = styled.li`
   display: flex;
   align-items: center;
   width: 250px;
   padding: 10px;
   margin-bottom: 20px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const OnlineIcon = styled.span`
   margin-right: 10px;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => {
      if (props.online) {
         return 'green';
      }
      return 'red';
   }};
`;

export const FriendImage = styled.img`
   width: 100px;
   border: 2px solid blue;
   border-radius: 40%;
   margin-right: 10px;
`;

export const FriendName = styled.span`
   margin-left: auto;
   margin-right: auto;
   font-size: 30px;
`;
