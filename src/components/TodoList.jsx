import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
    const sortedTodos = todos
        .slice()
        .sort((a, b) => Number(a.done) - Number(b.done));
    return (
        <div>
            {sortedTodos.map((item, index) => (
                <TodoItem
                    item={item}
                    key={index}
                    todos={todos}
                    setTodos={setTodos}
                ></TodoItem>
            ))}
        </div>
    );
}
