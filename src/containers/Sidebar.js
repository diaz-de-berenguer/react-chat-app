import { connect }      from 'react-redux'
import SideBarComponent from '../components/SideBar'

// Allows the Sidebar component to use the users in the store as a prop. In this
// case, the prop is called 'users' and is mapped to the users in the store.
const mapStateToProps = store => ({
	users: store.users
});

// Allows the side bar to dispatch actions to the store.
const mapDispatchToProps = () => ({})

// Connects the React SideBar Component to the store and to the dispatch actions
export const SideBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(SideBarComponent)
