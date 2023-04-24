type CategoryProps = {
    setPhase: React.Dispatch<React.SetStateAction<number>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function Categories(props: CategoryProps) {
    const chosen = () => {
        props.setCategory("pugs")
        props.setPhase(prev => prev + 1)
    }

    return (
        <h1 onClick={() => chosen()}>choose cat</h1>
    )
}

export default Categories
