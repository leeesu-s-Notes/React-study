import React, { useState } from "react";

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    {/* onChange될때마다 event를 가져올 건데   */}
    const onChange = (e) => {
        {/* change event가 일어날때마다 setText에 넣어주는 것 */}
        setTextValue(e.target.value)
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br/>
            <p>{txtValue}</p>
        </div>
    ); 
};

export default Input;
