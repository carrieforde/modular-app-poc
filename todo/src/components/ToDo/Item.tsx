import { deleteItem, IItem } from "../../redux/todo";

interface ToDoItemProps {
    item: IItem;
}

const ToDoItem: React.FC<ToDoItemProps> = ({item}) => <li>{item.text + ' '}<button onClick={() => deleteItem(item)}> - </button></li>

export default ToDoItem;
