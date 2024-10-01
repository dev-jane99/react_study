import React from 'react';
import {useForm} from 'react-hook-form';

const FormLoginCode = () => {

// register : 값을 전달
// formState : form의 현재 상채값을 받는 함수
// errors : form 에서 생기는 error 를 갖는 함수
// isSUbmitted :  한번이라도 클릭했다면 true 함수
// isSubmitting : 값이 제출중일때 버튼을 비활성화 시키는 함수 
// 전송중에는 버튼을 누르지 못하게한다. 
// ex) <button disabled={isSubmitting}>전송</button>

  const {register, handleSubmit, getValues, formState : {isSubmitting, isSubmitted, errors}} = useForm({mode : "onChange"});
  console.log(useForm());

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;


  return (
    // 여기 데이터가 사용자가 필수로 입력한 값이다
    <form onSubmit={handleSubmit(async (data) =>{
      // console.log(data)
      // 데이터 가져와서 콘솔에 출력하기
      // CRUD(Read), get 요청이라고 함 (가져오기만 함)
      // fetch : 비동기
      
    //   await fetch('http://localhost:4000/user')
    //   .then((response) => response.json())
    //   .then(console.log)
    //   .catch(console.error)
    // })}>


    //get 요청이 아닐때
    // feth("경로", "요청")
      // CRUD(Create), post 요청이라고 함
    // await fetch('http://localhost:4000/user', {
    //   method : 'POST',
    //   credentials : 'include',
    //   headers : {
    //     'Content-Type' :"application/json"
    //   },
    //   body : JSON.stringify({
    //     id : 2,
    //     email : data.email,
    //     password : data.password
    //   })
    // })

    // .then((response) => response.json())
    // .then(console.log)
    // .catch(console.error)


    // DELETE
    //ID 2
    // 요청경로 : http://localhost:4000/user
    if(window.confirm('정말 회원탈퇴 하시겠습니까?')){
      fetch(`http://localhost:4000/user/2`, {
        method : 'DELETE',
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify({
          ...data
        })
      }).then((response) => {
        if(!response.ok){ return console.log(`Error ${response}`)}
        console.log("회원탈퇴가 완료되었습니다.")
      })
    }


    //UPDATE
    // http://localhost:4000/user/1
    if(window.confirm('정말 정보를 수정하시겠습니까?')){
      fetch(`http://localhost:4000/user/1`, {
        method : 'PUT',
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify({
          ...data
        })
      }).then((response) => {
        if(!response.ok){ return console.log(`Error ${response}`)}
        console.log("회원정보가 수정되었습니다.")
      })
    }
  })}>


      <label>
        <div style={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
          <p style={{fontSize : "10px"}}>이메일</p>
          <input type="text" id='email' placeholder='아이디를 입력해주세요'
           {...register("email",{
            // 사용자가 필수로 입력해야지만 하는 부분이다.
            required : true,
            pattern : {
              value : emailRegex,
            }
          })}
          />
        </div>

        
        {errors && errors?.email?.type === "required" && (
          <p style={{fontSize : "10px"}}>이메일을 입력하세요</p>
        )}
        {errors && errors?.email?.type === "pattern" && (
          <p style={{fontSize : "10px"}}>양식에 맞게 입력 해 주세요</p>
        )}
      </label>
      {/* 비밀번호 로직 만들기 */}

      <label>
        <div style={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
          <p style={{fontSize : "10px"}}>비밀번호</p>
          <input type="password" id='password' placeholder='비밀번호를 입력해주세요'
           {...register("password",{
            // 사용자가 필수로 입력해야지만 하는 부분이다.
            required : true,
            pattern : {
              value : passwordRegex,
            }
          })}
          />
        </div>

        {errors && errors?.password?.type === "required" && (
          <p style={{fontSize : "10px"}}>비밀번호를 입력하세요</p>
        )}
      
        {errors && errors?.password?.type === "pattern" && (
            <p style={{fontSize : "10px"}}>소문자, 숫자, 특수문자를 각 하나 포함한 8 자리 이상이어야합니다.</p>
        )}
        </label>


      <label>
        <div style={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
          <p style={{fontSize : "10px"}}>비밀번호 확인</p>
          <input type="text" id='passwordConfirm' placeholder='같은 비밀번호를 입력해주세요'
           {...register("passwordConfirm",{
            // 사용자가 필수로 입력해야지만 하는 부분이다.
            required : true,
            validate : {
              matchPassword : (passwordConfirm) => {
                const { password } = getValues();
                console.log(password, passwordConfirm, password === passwordConfirm);
                return  password === passwordConfirm;
              }
            }
          })}
          />
        </div>

        {errors && errors?.passwordConfirm && (
          <p style={{fontSize : "10px"}}>비밀번호가 일치하지 않습니다</p>
        )}
  
        </label>

        {/* 체크박스 */}
        <div style={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
          <p>취미</p>
          <label>
            <span>잠자기</span><input name='hobby' type="checkbox" value="잠자기" {...register("hobbies")}/>
          </label>
          <label>
            <span>먹기</span><input name='hobby' type="checkbox" value="먹기" {...register("hobbies")}/>
          </label>
          <label>
            <span>놀러가기</span><input name='hobby' type="checkbox" value="놀러가기" {...register("hobbies")}/>
          </label>
          <label>
            <span>유튜브보기</span><input name='hobby' type="checkbox" value="유튜브보기" {...register("hobbies")}/>
          </label>
        </div>


      <div style={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
        <button disabled={isSubmitting}>회원가입</button>
      </div>
    </form>
  );
};

export default FormLoginCode;
