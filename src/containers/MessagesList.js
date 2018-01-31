import { connect }           from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

// Allows the Messages List component to use the messages in the store as a prop. In
// this case, the prop is called 'messages' and is mapped to the messages present in
// the store.
const mapStateToProps = store => ({
	messages: store.messages
})

// Any actions that need to be dispatched to the reducers would be present here.
const mapDispatchToProps = () => ({})

// Connects the component Messages List and the Redux store and dispatch actions.
export const MessagesList = connect(
	mapStateToProps,
	mapDispatchToProps
)(MessagesListComponent)
