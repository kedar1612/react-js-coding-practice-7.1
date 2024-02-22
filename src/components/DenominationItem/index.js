// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, updateBalance} = props
  const {value} = denominationsList

  const onDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button type="button" className="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
