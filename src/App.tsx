import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';
import { TodoType } from './types/todo';
import UserCard from './components/UserCard';
import useAllUsers from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfiles, loading, error} = useAllUsers();
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchUsers = () => getUsers();

  const onClickFetchTodos = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      setTodos(res.data);
    })
  }

  return (
    <div className='App'>
      <button onClick={onClickFetchUsers}>Usersデータ取得</button>
      {error? (
        <p style={{color: "red"}}>データの取得に失敗しました</p>
      ) : (
        loading? (
          <p>Loading...</p>
        ) : (
          <>
            {userProfiles.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )
      )}
      <button onClick={onClickFetchTodos}>Todosデータ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
