import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import Todo from '../components/Todo';
import { State } from '../types/state';
import { Dispatch, Action } from 'redux';

const mapStateToProps = (state: State) => {
    return {
        todo: state.todo,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        addTodo: (todo: string) => dispatch(actions.addTodo(todo)),
        deleteTodo: (idx: number) => dispatch(actions.deleteTodo(idx)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
