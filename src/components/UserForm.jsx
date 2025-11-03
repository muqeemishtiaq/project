import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/UsersSlice";
import { nanoid } from "@reduxjs/toolkit";

const UserForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(addUser({ id: nanoid(), name }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-pink-500 text-red-500 px-4 py-2 ml-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default UserForm;
