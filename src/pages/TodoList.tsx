import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Todo를 입력하세요!!"
        />
        <button>ADD</button>
      </form>
    </>
  );
};

export default TodoList;
