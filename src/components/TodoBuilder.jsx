import React, { useState } from 'react';
import styles from './todobuilder.module.css';


function TodoBuilder(props) {
    const [text, setText] = useState('')

	function handleAdd(e) {
		props.todoAdder({text: text});
		clearText();
	}

	function clearText() {
		setText('');
	}

    return (
        <div className={styles.todoBuilderContainer}>
            <input className={styles.textBox} type="text" value={text} onChange={e => setText(e.target.value)} />
            <button className={styles.button} onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoBuilder;

