import React, { useEffect } from 'react';

import { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const UserDetail = () => {
  const {id} = useParams();
  const [user,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{
      console.log(res.data);
      setUser(res.data);
      setIsLoading(false);
    })
    .catch((err)=>{ console.log(err) })
  },[id]);
  
  return (
    <>
      <div className="userDetail">
        <div className="layout-fix">
          UserDetail.jsx
          {isLoading ? (<p className="loading">로딩중</p>) : (
            <>
              <div className="name">{user.name}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetail;