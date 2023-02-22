// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, selectedApps} = props
  const {tabId, displayText} = tabItem

  const onClickButton = () => {
    selectedApps(tabId)
  }

  return (
    <li>
      <button className="tab-button" onClick={onClickButton} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
