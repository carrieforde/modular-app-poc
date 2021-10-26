import { useState } from "react";
import { addItem, useList } from "../../redux/todo";
import ToDoItem from "./Item";


const ToDo = () => {
    const list = useList();
    const [text, setText] = useState("");

    const createNewToDoItem = () => {
        if (!text) {
            return alert("Enter some text, dummy.");
        }

        addItem({text});
        setText("")
    }

    return <div>
        <ul>{list.map(item => <ToDoItem key={item.id} item={item} />)}</ul>
        <input type="text" value={text} onChange={e => setText(e.target.value)} onKeyPress={e => e.key === "Enter" && createNewToDoItem()} />
        <button onClick={createNewToDoItem}> + </button>
    </div>
}

export default ToDo;
