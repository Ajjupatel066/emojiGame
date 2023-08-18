// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <div className="nav-bar-container">
      <div className="logo-card">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p className="nav-title">Emoji Game</p>
      </div>
      {isGameInProgress && (
        <div className="score-card">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
