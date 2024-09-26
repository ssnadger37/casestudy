import React from 'react'
import "../Styles/user.css"
import Sidebar from './sidebar';

function Users() {
  return (
    <div>
      <Sidebar></Sidebar>
    <div className="users">
      <h1>User Details</h1>
      
      <table className="userstable">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>EmailId</th>
            <th>Mobile No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>aricka</td>
            <td>aricka@gmail.com</td>
            <td>8687563433</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Users;