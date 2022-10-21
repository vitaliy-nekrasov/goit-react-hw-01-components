import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  max-width: 270px;
  margin-bottom: ${p => p.theme.spacing[0]};
  padding: ${p => p.theme.spacing[1]};
  border: ${p =>
    `${p.theme.spacing[0]} solid ${p.theme.colors.secondaryColor}`};
  border-radius: ${p => p.theme.spacing[2]};
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  transition: transform ease 200ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const UserStatus = styled.span`
  width: ${p => p.theme.spacing[3]};
  height: ${p => p.theme.spacing[3]};
  margin-right: ${p => p.theme.spacing[2]};
  border-radius: 50%;
  background-color: ${p =>
    p.children === true ? p.theme.colors.isOnline : p.theme.colors.isOffline};
`;
export const UserAvatar = styled.img`
  margin-right: ${p => p.theme.spacing[2]};
`;
export const UserName = styled.p`
  font-weight: 500;
  font-size: 18px;
`;
