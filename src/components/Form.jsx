import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({
        name: "",
        done: false,
    });

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        // It does not reload the page when click on ADD button
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Add a new Todo task"
                    onChange={(e) =>
                        setTodo({ name: e.target.value, done: false })
                    }
                    value={todo.name}
                    className={styles.modernInput}
                />

                <button type="submit" className={styles.modernButton}>
                    Add
                </button>
            </div>
        </form>
    );
}
