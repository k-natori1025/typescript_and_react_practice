import { TodoType } from "./types/todo";

const Todo = (props: Omit<TodoType, "id">) => {

  const { title, userId, completed = false } = props;
  const completeMark = completed? "[完]" : "[未]"
  return (
    <div>
      <p>{`${completeMark}${title}ユーザーID:${userId}`}</p>
    </div>
  )
}

export default Todo
