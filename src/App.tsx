import Quiz from './components/Quiz';
import StartQuiz from './components/StartQuiz';
import { useEffect, useState } from 'react'

function App() {
    const [phase, setPhase] = useState(0)
    const [currentCat, setCurrentCat] = useState("0")
    const [token, setToken] = useState("")

    useEffect(() => {
        const initToken = async () => {
            const res = await fetch("https://opentdb.com/api_token.php?command=request")
            const json = await res.json()
            if (json.response_code == 0) setToken(json.token)
        }
        initToken()
    }, [])

    const refreshToken = () => {
        const refresh = async () => {
            const res = await fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`)
            const json = await res.json()
            if (json.response_code == 0) setToken(json.token)
        }
        refresh()
    }

    const getPage = () => {
        switch (phase) {
            case 0: return <>
                <StartQuiz setPhase={setPhase} setCurrentCat={setCurrentCat} />
            </>;
            case 1: return <>
                <Quiz setPhase={setPhase} category={currentCat} token={token} refreshToken={refreshToken} />
            </>;
            case 2: return <>
                <h2>Some questions about</h2>
                <span>{currentCat}</span>
            </>;
            default: {
                setPhase(0);
                return <></>;
            }
        }
    }

    return (
        getPage()
    )
}

export default App
