//import Categories from './components/Categories';
import StartQuiz from './components/StartQuiz';
import { useState } from 'react'

function App() {
    const [phase, setPhase] = useState(0)
   // const [category, setCategory] = useState("")
    const [currentCat, setCurrentCat] = useState("0")

    const getPage = () => {
        switch (phase) {
            case 0: return <>
                <StartQuiz setPhase={setPhase} setCurrentCat={setCurrentCat} />
            </>;
            case 1: return <>
                {/*<Categories setPhase={setPhase} setCategory={setCategory} />*/}
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
