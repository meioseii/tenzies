import './App.css'

export default function Dice(props) {
    return (
        <div className='die'>
            <button 
                onClick={props.holdDice}
                className={props.isHeld === true ? "held" : "notHeld"}>
                    {props.value}
            </button>
        </div>
    )
}