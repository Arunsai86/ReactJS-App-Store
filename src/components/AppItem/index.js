import './index.css'

const AppItem = props => {
  const {eachApp} = props
  return (
    <li className="app-card-container">
      <img src={eachApp.imageUrl} alt={eachApp.appName} className="app-image" />
      <p className="app-heading">{eachApp.appName}</p>
    </li>
  )
}

export default AppItem
