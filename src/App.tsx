import Categories from './components/Categories';
import StartQuiz from './components/StartQuiz';
import { useState } from 'react'

function App() {
    const [phase, setPhase] = useState(0)
    const [category, setCategory] = useState("")

    const getPage = () => {
        switch (phase) {
            case 0: return <>
                <StartQuiz setPhase={setPhase} />
            </>;
            case 1: return <>
                <Categories setPhase={setPhase} setCategory={setCategory} />
            </>;
            case 2: return <>
                <h2>Some questions about</h2>
                <span>{category}</span>
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
