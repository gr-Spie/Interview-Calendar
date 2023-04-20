
const PlusButton = ({onAddEvent}) => {

    const handleClick = () => {
        const eventAdded = prompt(
            `Enter event time
            YYYY-MM-DD HH:mm:ss`)

        onAddEvent(eventAdded)
    }

    return (
        <button onClick={handleClick}>
            +
        </button>
    )
}

export default PlusButton;