import Box from 'components/Box';
import { StatList, StatListItem } from './Statistics.styled';

const Statistics = ({}) => {
  return (
    <Box>
      <StatList>
        <StatListItem>
          <p>Good: 3</p>
        </StatListItem>
        <StatListItem>
          <p>Neutral: 2</p>
        </StatListItem>
        <StatListItem>
          <p>Bad: 2</p>
        </StatListItem>
      </StatList>
    </Box>
  );
};

// PropTypes!!!!!!!!!

export default Statistics;
