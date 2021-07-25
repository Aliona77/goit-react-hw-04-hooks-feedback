import { ButtonBox, Button } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonBox>
      {Object.keys(options).map((option) => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </Button>
      ))}
    </ButtonBox>
  )
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}