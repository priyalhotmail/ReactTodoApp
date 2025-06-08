import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
    const [todos, setTodos] = useState([]);

    const completedCount = todos.filter((todo) => todo.done).length;
    const totalCount = todos.length;

    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
            <Footer completedCount={completedCount} totalCount={totalCount} />
        </div>
    );
}
