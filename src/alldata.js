import React, { useContext } from 'react';
import MyContext from './Mycontext';

const AllData = () => {
  const ctx = useContext(MyContext);

  return (
    <div>
      <h2>All User Data</h2>
      <ul>
        {ctx.users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Balance:</strong> ${user.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllData;
