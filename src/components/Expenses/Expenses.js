import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2020')

    const dateChangeHandler = (year) => {
        setYearSelected(year)
    }

    const filteredItems = props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() === yearSelected
    })

    

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={yearSelected}
                    onDateChange={dateChangeHandler} />
            
                <ExpensesList items={filteredItems}/>

            </Card>
        </div>
    )
}

export default Expenses