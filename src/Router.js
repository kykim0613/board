import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import NoticeBoard from "./pages/NoticeBoard";
import Post from "./pages/Post";
import Posting from "./pages/Posting";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ToDo" element={<ToDoList />} />
                <Route path="/Board"  element={<NoticeBoard />} />
                <Route path="/Board/Post" element={<Post />} />
                <Route path={`/Board/:id`} element={<Posting />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;



// react 자체에서는 라우팅 처리할 수 있는 기술이 없어
// 라이브러리를 설치해야돼
// react-router
// react-router-dom

// react-router 공식문서가가지고
// https://reactrouter.com/en/main

// npm run start

// 우리가 라우터.js 만들었잖아요
// 호출은 안하고있음

// 라우터에서, 로그인 되었을때랑, 안되었을때에 대한
// 경로처리를 분기로 나눠야됨.


// Prvi