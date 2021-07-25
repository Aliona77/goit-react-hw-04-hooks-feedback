import PropTypes from 'prop-types';
import {Title} from './Notification.styles'
export default function Notification({ message }) {
    return <Title>{ message}</Title>
}
Notification.propTypes={
    message: PropTypes.string.isRequired,
}