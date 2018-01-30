import { connect } from 'react-redux'
import SidebarComponent from '../components/SideBar'

export const Sidebar = connect(state => ({
	users: state.users
}), {})(SidebarComponent)
