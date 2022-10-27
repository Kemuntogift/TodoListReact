import React, {useState} from 'react'
import Form from '../Form/Form'

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {

        const addedTodos = [todo, ...todos];

        setTodos(addedTodos);
        console.log(todo, ...todos);
    }
  return (
    <div>
        
        <Form onSubmit={addTodo}/>
    </div>
  )
}
