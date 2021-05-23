import './ExpenseForm.css'
import { useState } from 'react'

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault() //used to prevent refreshing of screen when submitting form

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        //to clear the values upon submitting, thats why there is also value property in input tag
        setEnteredTitle('') 
        setEnteredAmount('')
        setEnteredDate('')


    }

    const cancelHandler = ()=>{
        props.onAddEventClickHandler(false)
        //change back to single button interface
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Save</button>
                <button type="button" onClick={cancelHandler}>Cancel</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm