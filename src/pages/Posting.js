import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Posting = () => {
    const [post, setPost] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const Board = JSON.parse(localStorage.getItem('Board'))
        if (Board !== null) {
            setPost(Board.filter((board) => board.id === Number(id)))
        }
    }, [])
    
    return (
        <>
            {post.map((board) => (
                <div key={board.id}>
                    <h1>{board.title}</h1>
                    <span>{board.text}</span>
                </div>
            ))}
        </>
    )
}

export default Posting;