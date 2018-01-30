import React from 'react';
import PropTypes from 'prop-types'
import Message from './Message'

const MessagesList = ({ messages }) => {
	return(
		<section className="messages">
			<div className="container-fluid">
				{
					messages.map(message => {
						return(
							<Message
								key={message.id}
								{...message} />
						)
					})
				}
			</div>
		</section>
	)
}

MessagesList.PropTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}

export default MessagesList;
