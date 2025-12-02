
import { useNavigate } from "react-router-dom"

const Home = function () {
    const nav = useNavigate()

    const createNew = () => {
        nav('/create');
    }

    return (
        <>
            <p>Create a new tournment</p>
            <button type="submit" onClick={createNew}> + </button>
        </>
    )
}

export default Home