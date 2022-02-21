import styles from './todolist.module.css';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.todoList}>
            {
                props.todoList.map(todo => <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    todoRemover={props.todoRemover}
                />)
            }
            </ul>

        </div>
    );
}

export default TodoList;

