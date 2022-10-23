import Box from 'components/Box';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({}) => {
  return (
    <Box>
      <Button type="button">Good</Button>
      <Button type="button">Neutral</Button>
      <Button type="button">Bad</Button>
    </Box>
  );
};

// PropTypes!!!!!!!!!

export default FeedbackOptions;
