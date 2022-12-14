
import './ToDo.css'

const ToDo = (props) => {
    return (

        <div className='box'>

            <img src={props.url1} alt="" />
            <p> {props.text}   </p>
            <img src={props.url2} alt="" />

        </div>
    )
}



export default ToDo;