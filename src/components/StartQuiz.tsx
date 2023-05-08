import { useEffect, useState } from "react"

type StartProps = {
    setPhase: React.Dispatch<React.SetStateAction<number>>;
}

interface CategoryObjects {
    id: number,
    name: string;
}
export default function StartQuiz(props: StartProps) {
    const [catList, setCatList] = useState<Array<CategoryObjects>>([])
    const [showSelect, setShowSelect] = useState(false)

    useEffect(() => {
        const getter = async () => {
            const res = await fetch("https://opentdb.com/api_category.php")
            const json = await res.json()
            setCatList([{ "id": 0, "name": "Any" }].concat(json.trivia_categories))
        }
        getter()
    }, [])

    const handleShowList = (target: HTMLButtonElement) => {
        target.textContent = "loading..."
        setShowSelect(true)
    }

    return (
        <>
            <h1>Pug Quiz</h1>
            <span>Can you get more answers than a pug?</span>
            {showSelect && catList.length &&
                <>
                    <label htmlFor="catSelect">Choose a category</label>
                    <select name="category" id="catSelect">
                        {catList.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                    </select>
                </>
            }
            {!(showSelect && catList.length) &&
                <button onClick={(e) => handleShowList(e.target as HTMLButtonElement)}>select cat</button >}
            <button onClick={() => props.setPhase(1)}>Start Quiz</button>
        </>
    )
}
