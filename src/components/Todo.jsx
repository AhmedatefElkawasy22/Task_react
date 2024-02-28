import React, { useRef, useState } from "react";

function Todo(props) {
  const todoRef = useRef();
  const [todos, setTodos] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();
		if (props.canAdd) setTodos((prev) => {
			const nitem = {
				value: todoRef.current.value,
				id: Math.random().toFixed(2).toString()
			} 
			return [...todos, nitem]
		});
  };
  const Delete = (id) => {
		console.log(id);
		setTodos((prev) => { 
			const nt = prev.filter(p => p.id != id);
			return [...nt];
		})	
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input ref={todoRef} type="text" placeholder="Enter to do" />
        </div>
        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
      <div className="flex flex-column gap-sm">
        {todos.map((item) => {
          return (
            <div key={item.id} className="flex" style={{ margin: "auto" }}>
              <p>{item.value}</p>
              <button type="button" onClick={() => Delete(item.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;