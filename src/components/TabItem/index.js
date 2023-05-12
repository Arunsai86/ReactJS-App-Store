import './index.css'

const TabItem = props => {
  const {eachTab, clickTabItem, isActive} = props
  const clickButton = () => {
    clickTabItem(eachTab.tabId)
  }
  const activeTabClassName = isActive ? 'activeTabBtn' : ''

  return (
    <li>
      <button
        className={`tabButton ${activeTabClassName}`}
        type="button"
        onClick={clickButton}
      >
        {eachTab.displayText}
      </button>
    </li>
  )
}

export default TabItem
