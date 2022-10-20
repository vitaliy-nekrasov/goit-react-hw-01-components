import styled from 'styled-components';
import { getRandomHexColor } from '../../constants';

export const StatSection = styled.section`
  margin-bottom: ${p => p.theme.spacing[5]};
  border: ${p =>
    `${p.theme.spacing[0]} solid ${p.theme.colors.secondaryColor}`};
  max-width: 400px;
  border-radius: ${p => p.theme.spacing[2]};
  overflow: hidden;
`;
export const StatTitle = styled.h2`
  text-transform: uppercase;
  padding-top: ${p => p.theme.spacing[4]};
  padding-bottom: ${p => p.theme.spacing[4]};
  text-align: center;
  border-bottom: ${p =>
    `${p.theme.spacing[0]} solid ${p.theme.colors.secondaryColor}`};
  color: ${p => p.theme.colors.secondaryColor};
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${p => p.theme.spacing[7]};
  width: ${p => p.theme.spacing[7]};
  background-color: ${({ backgroundType }) => {
    switch (backgroundType) {
      case 'id-1':
        return getRandomHexColor;
      case 'id-2':
        return getRandomHexColor;
      case 'id-3':
        return getRandomHexColor;
      case 'id-4':
        return getRandomHexColor;
      case 'id-5':
        return getRandomHexColor;
      default:
        return `${p => p.theme.colors.secondaryColor}`;
    }
  }};
`;
export const StatLabel = styled.span`
  color: ${p => p.theme.colors.lightColor};
  font-weight: 500;
  margin-bottom: ${p => p.theme.spacing[1]};
`;
export const StatPercent = styled.span`
  color: ${p => p.theme.colors.lightColor};
  font-weight: 500;
  font-size: 22px;
`;
