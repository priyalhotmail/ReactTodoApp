export default function TodoItem({ item, todos, setTodos }) {
    return (
        <div>
            <span>{item.name}</span>
            <span>
                <button>X</button>
            </span>
        </div>
    );
}
