import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
    function handleStatus(item) {
        console.log("Item clicked:", item.name);
        const updatedTodos = todos.map(
            (todo) =>
                todo.name === item.name ? { ...todo, done: !todo.done } : todo // Toggle the done status
        );
        setTodos(updatedTodos);
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
                    <button>X</button>
                </span>
            </div>
        </div>
    );
}
