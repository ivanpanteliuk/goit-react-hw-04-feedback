import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => (
        <ListItem key={option}>
          <Button type="button" onClick={onLeaveFeedback}>
            {option}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
