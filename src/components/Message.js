import React     from 'react';
import PropTypes from 'prop-types'

const Message = ({message, author, autobot}) => {

	if (autobot) {
		return (
		  <div className="row">
				<p className="message">
					<em className="autobot">{message}</em>
				</p>
			</div>
		)
	} else {
		return (
		  <div className="row">
				<p className="message">
					<strong>{author}:</strong> {message}
				</p>
			</div>
		)
	}
}

// Message.propTypes = {
// 	dispatch: PropTypes.func.isRequired
// }

export default Message;
