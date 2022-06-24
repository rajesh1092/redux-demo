import React, { useEffect } from "react";
import { actionCreators } from "../actionCreators/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";


function Users({}) {
  const dispatch = useDispatch();
  const { fetchUsers } = bindActionCreators(actionCreators, dispatch);
  const users  = useSelector((state) => state.reducer);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
  users.loading ? (
    <h1>Loading</h1>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {users && users.users && users.users.map((user) => <div key={user.id}>{user.name}<br/><br/></div>)}
      </div>
    </div>
  )
  );
}

export default Users;
