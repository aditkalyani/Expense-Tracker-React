import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props){
    //make an array of values from array of objects
    const dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value
    })

    //max function takes seperate parameters like Math.max(1,2,3,4)
    const maxValue = Math.max(...dataPointValues) //thats why use spread operator

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                return <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />
            })}
        </div>
    )
}

export default Chart