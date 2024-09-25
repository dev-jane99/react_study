// https://jsonplaceholder.typicode.com/users
// fetch로 요청 후 Side-Effect를 해결 후
// 화면에 user의 name만 li태그로 출력하기


import React from 'react';
import { useState, useEffect} from 'react';


const SideEffectMount = () => {
  
  
  const [users, setUsers] = useState([])

  // 모든 데이터 fetch 로 불러오기
  // 부작용 해결하기
    const getUsers = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json()
      return datas;
    }

  useEffect (() => {
    getUsers().then(setUsers)
  }, [])



  return (
    
    <div>
      {users.map(({name}, i) => <li key={i}>{name}</li>)}
    </div>
  );
};

export default SideEffectMount;
