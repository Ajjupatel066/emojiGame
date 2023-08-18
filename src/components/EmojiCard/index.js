// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickOnEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="btn" onClick={onClickOnEmoji} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
