import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserLists";

const App = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Redux CRUD App</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
