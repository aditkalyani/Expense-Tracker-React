import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props){

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddEvent(expenseData) //here we are passing our expenseData to App.js
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense