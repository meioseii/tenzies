import './App.css'

export default function Dice(props) {
    return (
        <div className='die'>
            <button>{props.value}</button>
        </div>
    )
}