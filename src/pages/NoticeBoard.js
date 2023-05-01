import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NoticeBoard = () => {
    const [list, setList] = useState([])
    const [form, setForm] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        const Board = JSON.parse(localStorage.getItem('Board'))
        if (Board !== null) {
            setList(Board)
        }
    }, [])

    const checkPassword = (board) => {
        if (board.password === password) {
            setSelectedPost(board)
            setForm(true)
            navigate(`/Board/${board.id}`)
        } else {
            alert("비밀번호가 일치하지 않습니다.")
        }
    }
    console.log(selectedPost)
    console.log(form)
    console.log(password)

    return (
        <>
            <Link to={`/`}>뒤로가기</Link>
            <h1>Board</h1>
            <button>
                <Link to={`/Board/Post`}>
                    글 작성
                </Link>
            </button>
            {list?.map((board) => (
                <ul key={board.id}>
                    <li onClick={() => setSelectedPost(board.id, setForm(true), setPassword(board.password))}>{board.title}</li>
                    {form && selectedPost === board.id && (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                checkPassword(board)
                            }}
                        >
                            <input
                                type="password"
                                defaultValue={""}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button>
                                {/* <Link to={`/Board/${board.id}`}> */}
                                    확인
                            </button>
                        </form>
                    )}
                </ul>
            ))}
        </>
    )
}

export default NoticeBoard;