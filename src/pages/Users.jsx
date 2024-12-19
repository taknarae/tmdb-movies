import React from 'react';

// https://jsonplaceholder.typicode.com/users
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Users = () => {
  const [users,setUsers] = useState([]);
  const [modal,setModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null); //클릭한 사용자 정보 저장

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      console.log(res.data);
      setUsers(res.data);
    },[])
    .catch((err)=> console.log("Users.jsx==",err) )
  },[])

  const userInfo = (info) => {
    setSelectedUser(info);
    setModal(true);
    console.log("info===",info);
  };

  return (
    <>
      <div className="p-users">
        <div className="layout-fix">
          <h2 className="heading-title">User list</h2>
          <ul className="user-list">
            {users.slice(0,10).map(el => ( //.slice(0,10) 10개만 뿌려줌
              <li key={el.id}>
                <div className="list-cont" onClick={()=>{ userInfo(el); }}>
                  <span className="idx">{el.id}</span>
                  <div className="name">{el.name}</div>

                  {/* <Link to={`/users/${el.id}`}>
                    <span className="idx">{el.id}</span>
                    <div className="name">{el.name}</div>
                  </Link> */}
                </div>
              </li>
            ))}
          </ul>
          {modal === true ? <Modal clickInfo={selectedUser}/> : null}
        </div>
      </div>
    </>
  );

  function Modal( {clickInfo} ){
    return(
      <div className="modal">
        <Link className="btnClose" onClick={(e)=>{ e.preventDefault(); setModal(false); }}>X</Link>
        <div className="user-info">
          <span className="idx">{clickInfo.id}</span>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{clickInfo.name}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{clickInfo.phone}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{clickInfo.email}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{clickInfo.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

};

export default Users;