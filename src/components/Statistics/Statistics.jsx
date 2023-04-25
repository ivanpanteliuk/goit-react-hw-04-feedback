import PropTypes from 'prop-types';
import { Text, ListItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <ListItem>
        <Text>Good: {good}</Text>
      </ListItem>
      <ListItem>
        <Text>Neutral: {neutral}</Text>
      </ListItem>
      <ListItem>
        <Text>Bad: {bad}</Text>
      </ListItem>
      <ListItem>
        <Text>Total: {total}</Text>
      </ListItem>
      <ListItem>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </ListItem>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
