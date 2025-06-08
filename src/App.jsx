import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header />
            <Todo />
        </div>
    );
}
