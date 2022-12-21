import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>
}

export default Notification

Notification.prototypes = {
  message: PropTypes.string.isRequired
}