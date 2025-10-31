import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../features/UsersSlice";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  return (
    <div className="p-4">
      {users.map((user) => (
        <div key={user.id} className="border p-2 rounded my-2 flex justify-between items-center">
          {editId === user.id ? (
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="border p-1 rounded"
            />
          ) : (
            <span>{user.name}</span>
          )}
          <div>
            {editId === user.id ? (
              <button
                onClick={() => {
                  dispatch(updateUser({ id: user.id, name: editName }));
                  setEditId(null);
                }}
                className="bg-green-500 text-white px-2 py-1 rounded mx-1"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(user.id);
                  setEditName(user.name);
                }}
                className="bg-pink-700 text-white px-2 py-1 rounded mx-1"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
