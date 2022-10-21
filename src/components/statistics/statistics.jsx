import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercent,
} from './statistics.styled';

export function Statistics(props) {
  const { title, stats } = props;
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} backgroundType={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercent>{stat.percentage}%</StatPercent>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
