import styled from '@emotion/styled';

export const Table = styled.table`
   margin-left: auto;
   margin-right: auto;
   width: 1200px;
   border: 10px dashed green;
`;

export const TableHead = styled.thead`
   background-color: #0000cd;
   height: 80px;
   padding: 10px;
   color: white;

   font-size: 40px;
`;

export const TableRaw = styled.tr`
   height: 50px;
   text-align: center;
   font-size: 30px;
   background-color: #b0c4de;
   font-style: italic;

   :nth-child(even) {
      background-color: #b0e0e6;
   }
`;

export const TableCell = styled.td`
   border: 1px solid white;
`;
