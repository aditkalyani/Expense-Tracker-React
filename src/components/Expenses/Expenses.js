import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2020')

    const dateChangeHandler = (year) => {
        setYearSelected(year)
        console.log(yearSelected)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={yearSelected}
                    onDateChange={dateChangeHandler} />

                {props.expenses.map((expense) => {
                    return (<ExpenseItem 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} 
                    />)
                })}

            </Card>
        </div>
    )
}

export default Expenses