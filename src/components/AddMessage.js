import React     from 'react';
import PropTypes from 'prop-types'

const AddMessage = (props) => {
	let input;

	return (
		<section className="newMessage" id="new">
		  <input
		  	onKeyPress={
		  		(e) => {
		  			if (e.key === 'Enter') {
		  				props.postMessage(input.value, 'Me');
		  				input.value = '';
		  			};
		  		}
		  	}
		  	type="text"
		  	ref={
		  		(node) => {
		  			input = node;
		  		}
		  	} />
		</section>
	)
}

AddMessage.propTypes = {
	postMessage: PropTypes.func.isRequired
}

export default AddMessage;
