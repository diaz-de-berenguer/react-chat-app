import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessages } from '../actions'

const mapDispatchToProps = dispatch => ({
	dispatch: (message, author) => {
		dispatch(addMessages(message, author))
	}
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
