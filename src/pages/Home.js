import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <Link to={`/ToDo`}>ToDoList</Link><br />
            <Link to={`/Board`}>Board</Link>
        </>
    )
}

export default Home;