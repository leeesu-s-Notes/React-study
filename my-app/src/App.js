import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav> {/* nav 아래가 대체가 되는 것 */}
        {/* Link태그는 router-dom에서 가져왔다. Link는 a태그로 변경됨. */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | {" "}
        <Link to="/counter">Counter</Link> |{" "} 
        <Link to="/input">Input</Link> | {" "}
        <Link to="/input2">Input2</Link> | {" "}
        <Link to="/list">List</Link>
      </nav>
      <Routes> {/* Routes는 Route의 묶음 */}
        {/*브라우저 패스가 바뀔떄마다 어떤 컴포넌트를 매핑해서 바꿔줄지 정의 */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
