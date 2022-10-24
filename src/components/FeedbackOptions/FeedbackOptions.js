import PropTypes from 'prop-types';
import Box from 'components/Box';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGoodHandle, onNeutralHandle, onBadHandle }) => {
  return (
    <Box>
      <Button type="button" onClick={onGoodHandle}>
        Good
      </Button>
      <Button type="button" onClick={onNeutralHandle}>
        Neutral
      </Button>
      <Button type="button" onClick={onBadHandle}>
        Bad
      </Button>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onGoodHandle: PropTypes.func.isRequired,
  onNeutralHandle: PropTypes.func.isRequired,
  onBadHandle: PropTypes.func.isRequired,
};

export default FeedbackOptions;
