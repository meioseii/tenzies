import './App.css'

export default function Dice(props) {
    return (
        <div className='die'>
            <button 
                disabled={props.disable}
                onClick={props.holdDice}
                className={props.isHeld === true ? "held" : "notHeld"}
            >
                {props.value}
            </button>
        </div>
    )
}