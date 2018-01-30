import React from 'react';
import PropTypes from 'prop-types'

const Message = ({message, author}) => {

	return (
	  <div className="row">
			<p>
				<strong>{author}:</strong> {message}
			</p>
		</div>
	)
}

Message.PropTypes = {
	dispatch: PropTypes.func.isRequired
}

export default Message;
