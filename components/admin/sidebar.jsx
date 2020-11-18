import React from 'react';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </React.Fragment>

  );
}

export default SideBar;