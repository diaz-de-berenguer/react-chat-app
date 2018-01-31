import { connect }         from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessages }     from '../actions'

// No porps are necessary from the store in the Add Message component, so this
// function returns an empty object
const mapStateToProps = () => ({})

// The postMessage function in the add message component triggers the 'addMessage'
// action -- the action is dispatched to the store.
const mapDispatchToProps = dispatch => ({
	postMessage: (message, author) => {
		dispatch(addMessages(message, author))
	}
})

// Connects the component Add Message and the Redux store and dispatch actions.
export const AddMessage = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddMessageComponent)
