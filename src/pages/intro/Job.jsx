import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Job = () => {

  // 쿼리스트링 값을 가져오는 훅 함수 useSearchParams();
  // const [ searchParams ] = useSearchParams();
  // const title = searchParams.get("title");

  // 하위 뎁스의 폴더 useParams()
  const { title } = useParams();

  const jobs = useSelector(({route}) => route.jobs)[title];
  // 실습 15분
  // redux 초기값에 적용시켜서 사용자의 맞는 데이터를 화면에 뿌리기
  
  console.log(jobs)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{title} 기술</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{jobs && jobs.name}</td>
          </tr>
          {jobs && jobs.skills.map((skill, i) => (
            <tr key={i}>
              <td>{skill}</td>
            </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Job;