import React, { useState } from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name : "",
        email : "",
        tel : ""
    })
    {/* object에 name, email, tel을 빼온것 */}
    const {name, email, tel} = inputs

    const onChange = (e) => {
        const value =  e.target.value;
        {/*자바스크립트에서 배열 object는 heap메모리에 관리, 변수 선언 시점에는 heap메모리의 블록에 대한 
        참조주소만 가지고 있다. 그래서 key접근해서 특정값을 바꾸면 값이 바꼈는지 모름. 
        react가 알고 있는 것은 참조값 , 그래서 react는 변경되었다는걸 인지할 수 있게 
        setter함수를 이용함.*/}
        const id = e.target.id;
        //input[id] = value;
        {/* object를 깊은 복사를 해서 새로운 object를 만든 것. */}
        setInputs({
            ...inputs, 
            [id]: value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>
    ); 
};

export default Input2;
