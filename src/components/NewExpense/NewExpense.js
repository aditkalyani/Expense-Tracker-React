import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import AddExpense from './AddExpense'
import { useState } from 'react'

function NewExpense(props){
    const [isButton, setIsButton] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddEvent(expenseData) //here we are passing our expenseData to App.js
        setIsButton(false)
    }

    const onAddEventClickHandler = (isAddButton)=>{
        setIsButton(isAddButton)
        //switch to the form component
    }
    if(isButton)
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onAddEventClickHandler={onAddEventClickHandler}/>
            </div>
        )
        
    return (
        <div className="new-expense">
            <AddExpense onAddEventClickHandler={onAddEventClickHandler}/>
        </div>
    )
}

export default NewExpense