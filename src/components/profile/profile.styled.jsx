import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 271px;
  border: ${p =>
    `${p.theme.spacing[0]} solid ${p.theme.colors.secondaryColor}`};
  border-radius: ${p => p.theme.spacing[2]};
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserAvatar = styled.img`
  max-width: ${p => p.theme.spacing[6]};
  max-height: ${p => p.theme.spacing[6]};
  border-radius: 50%;
  border: ${p => `3px solid ${p.theme.colors.secondaryColor}`};
  margin-top: ${p => p.theme.spacing[5]};
  margin-bottom: ${p => p.theme.spacing[5]};
`;
export const UserName = styled.p`
  font-weight: 600;
  font-size: ${p => p.theme.spacing[4]};
  margin-bottom: ${p => p.theme.spacing[2]};
`;
export const UserTag = styled.p`
  color: ${p => p.theme.colors.secondaryColor};
  margin-bottom: ${p => p.theme.spacing[2]};
`;
export const UserLocation = styled.p`
  color: ${p => p.theme.colors.secondaryColor};
  margin-bottom: ${p => p.theme.spacing[5]};
`;
export const UserStats = styled.ul`
  display: flex;
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${p =>
    `${p.theme.spacing[0]} solid ${p.theme.colors.secondaryColor}`};
  padding: ${p => `${p.theme.spacing[3]} 17px`};
  border-right: none;
  border-bottom: none;
  background-color: ${p => p.theme.colors.profileBackground};

  &:first-child {
    border-left: none;
    padding: ${p => `${p.theme.spacing[3]} 14px`};
  }

  &:last-child {
    padding: ${p => `${p.theme.spacing[3]} ${p.theme.spacing[4]}`};
  }
`;
export const UserStatsLabel = styled.span`
  color: ${p => p.theme.colors.secondaryColor};
  margin-bottom: ${p => p.theme.spacing[1]};
`;
export const UserStatsQuantity = styled.span`
  font-weight: 600;
  font-size: ${p => p.theme.spacing[4]};
`;
