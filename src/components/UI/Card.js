import './Card.css'

function Card(props){
    const className = "card "+props.className //our class card+whatever is used the tag of the function (here Card)
    
    return (
        
        <div className={className}>{props.children}</div>
    )
}

export default Card