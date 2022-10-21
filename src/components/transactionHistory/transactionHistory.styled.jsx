import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: ${p => p.theme.spacing[5]};
  width: 40%;
`;
export const TableHeadData = styled.th`
  border: ${p => `${p.theme.spacing[0]} solid ${p.theme.colors.darkColor}`};
  padding: ${p => p.theme.spacing[2]};
  text-transform: uppercase;
  color: ${p => p.theme.colors.lightColor};
  background-color: ${p => p.theme.colors.tableBackground};
`;
export const TableRow = styled.tr`
  &: nth-child(even) {
    background-color: ${p => p.theme.colors.tableBodyBackground};
  }
`;
export const TableData = styled.td`
  border: ${p => `${p.theme.spacing[0]} solid ${p.theme.colors.darkColor}`};
  padding: ${p => p.theme.spacing[2]};
  text-align: center;

  &:first-letter {
    text-transform: uppercase;
  }
`;
