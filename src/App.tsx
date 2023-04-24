import Categories from './components/Categories';
import { useState } from 'react'

function App() {
    const [phase, setPhase] = useState(0)
    const [category, setCategory] = useState("")

    const getPage = () => {
        switch (phase) {
            case 0: return <>
                <h1>Pug Quiz</h1>
                <span>Can you get more answers than a pug?</span>
                <button onClick={() => setPhase(1)}>Start Quiz</button>
            </>;
            case 1: return <>
                <Categories setPhase={setPhase} setCategory={setCategory} />
            </>;
            case 2: return <>
                <h2>Some questions about</h2>
                <span>{category}</span>
            </>;
            default: setPhase(0)
        }
    }

    return (
        getPage()
    )
}

export default App
