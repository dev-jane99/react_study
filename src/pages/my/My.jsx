import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';

const My = () => {
  const [searchParams] = useSearchParams();
  const login = searchParams.get("login");

  // 이전에 왔던 경로로 보낸다.
  // replace 왔던 기록을 없앤다.
  const priviousUrl = useSelector(({user}) => user.priviousUrl);
  if(!login){
    return <Navigate to={priviousUrl} replace={true} />
  }

  return (
    <div>
      마이 페이지
    </div>
  );
};

export default My;