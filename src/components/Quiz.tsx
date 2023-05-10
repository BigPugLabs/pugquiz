import { useEffect, useState } from "react";

type QuizProps = {
    setPhase: React.Dispatch<React.SetStateAction<number>>;
    refreshToken: () => void;
    token: string;
    category: string;
}

// https://opentdb.com/api.php?amount=5&category=12&difficulty=easy
// "results":[
//          {"category":"Entertainment: Music",
//          "type":"multiple","difficulty":"easy",
//          "question":"Whose signature guitar technique is called the &quot;windmill&quot;?",
//          "correct_answer":"Pete Townshend",
//          "incorrect_answers":["Jimmy Page","Eddie Van Halen","Jimi Hendrix"]}]


interface QuestionObjects {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[];
}

export default function Quiz({ setPhase, refreshToken, token, category }: QuizProps) {
    const [questions, setQuestions] = useState<Array<QuestionObjects>>([])

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&encode=url3986&token=${token}`)
                const json = await res.json()
                if (json.response_code == 0) {
                    console.log(json.response_code)
                    setQuestions(json.results)
                    //console.log(questions)
                } else {
                    // 2nd chance
                    refreshToken()
                }
            } catch (error) {
                console.error(error)
            }
        }
        getQuestions()
    }, [category, refreshToken, token])

    return (
        <>
            <h1 onClick={() => setPhase(2)}>{category}</h1>
            <ul>
                {questions.map((e, i) => <li key={i}>{decodeURIComponent(e.question)}</li>)}
            </ul>
        </>
    )
}
