import React from "react"
{/* userData던질것 받아서 던져준 것에는 한껀 한껀이 담아있고, name과 email로 뽑은것 */}
const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email : 'ryu@gmail.com',name:'유재석'},
        {email : 'kim@gmail.com',name:'김종국'},
        {email : 'ha@gmail.com',name:'하하'},
        {email : 'song@gmail.com',name:'송지효'},
    ];

    return  (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {/* map 함수 돌리면서 users가 하나씩 user에 들어오는 것 */}
                {/* User라는 자식 컴포넌트로 데이터를 전달하려고 함 */}
                {/* userDate라는 property명으로 던짐 */}
                {users.map(user => <User userData ={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;