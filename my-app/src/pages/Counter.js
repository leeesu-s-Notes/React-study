import React, {useState} from "react";

const Counter = () => {
    {/* num은 기본값 const num = 0, setNumber는 num이라는 변수에 대한 값을 바꿀 수 있는 setter함수 */}
    const [num, setNumber] = useState(0);


    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num -1)
    }

    return (
        <div>
            { /* 버튼 클릭할때마다 increase 함수 호출 */}
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
};
export default Counter