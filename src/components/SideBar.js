import React     from 'react';
import PropTypes from 'prop-types'

const SideBar = ({ users }) => {
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

SideBar.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}

export default SideBar;
