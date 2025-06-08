import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
    function handleStatus(item) {
        console.log("Item clicked:", item.name);
        const updatedTodos = todos.map(
            (todo) =>
                todo.name === item.name ? { ...todo, done: !todo.done } : todo // Toggle the done status
        );
        setTodos(updatedTodos); // Update the state with the new list
    }

    function handleDelete(item) {
        console.log("Delete item:", item.name);
        const updatedTodos = todos.filter((todo) => todo != item); // Remove the item from the list
        setTodos(updatedTodos); // Update the state with the new list
    }

    const completedClassName = item.done ? styles.complete : "";

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span
                    onClick={() => handleStatus(item)}
                    className={completedClassName}
                >
                    {item.name}
                </span>
                <span>
                    <button
                        onClick={() => handleDelete(item)}
                        className={styles.deleteButton}
                    >
                        X
                    </button>
                </span>
            </div>

            <hr className={styles.line} />
        </div>
    );
}
