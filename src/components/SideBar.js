import React from 'react';
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => {
	return (
		<aside className="user-list">
		  <u>Online Users</u><br/>
		  {users.map( (u) => {
		  	return(
			  	<p key={u.id}>
			  		{u.name}
			  	</p>
			  )
		  } )}
		</aside>
	)
}

Sidebar.PropTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}

export default Sidebar;
