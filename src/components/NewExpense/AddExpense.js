function AddExpense(props){

    const pressAddHandler = (event)=>{
        props.onAddEventClickHandler(true)
    }

    return (
        <div>
            <button onClick={pressAddHandler}>Add Expense</button>
        </div>
    )
}

export default AddExpense