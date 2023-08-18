/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isGameInProgress: true,
    currentScore: 0,
    topScore: 0,
    clickedEmojisList: [],
  }

  clickEmoji = emojiId => {}

  shuffleEmojiList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.shuffleEmojiList()

    return (
      <ul className="emojis-list">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            eachEmoji={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {currentScore, isGameInProgress, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          currentScore={currentScore}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-container">
          {isGameInProgress ? this.renderEmojiList() : ''}
        </div>
      </div>
    )
  }
}

export default EmojiGame
