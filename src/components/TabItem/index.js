// Write your code here
import './index.css'

const TabItem = props => {
  const {details, clickTabItem, isActive} = props
  const {tabId, displayText} = details
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const tabColor = isActive ? 'btn' : 'btn1'
  return (
    <li className="tab">
      <button type="button" className={tabColor} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
