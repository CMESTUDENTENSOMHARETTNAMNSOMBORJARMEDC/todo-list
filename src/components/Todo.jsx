import React, { useState } from 'react';
import styles from './todo.module.css';


function Todo(props) {
	const [done, setDone] = useState(false);

	function handleRemove() {
		props.todoRemover(props.id);
	}

	function textToggleClass() {
		return done ? styles.completedTodoText : styles.todoText;
	}

    return (
        <li className={styles.todoContainer}>
            <input type="checkbox" checked={done} onChange={_ => setDone(!done)} />
            <p className={`${textToggleClass()} ${styles.textBox}`}>
                {props.text}
            </p>
            <button className={styles.button} onClick={handleRemove}>remove</button>
        </li>
    );
}

export default Todo;

