import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedbackExisting: false}

  onClickButton = () => {
    this.setState({feedbackExisting: true})
  }

  feedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="question-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list">
              <button
                type="button"
                className="button-style"
                onClick={this.onClickButton}
              >
                <img
                  alt={eachEmoji.name}
                  className="emoji-style"
                  src={eachEmoji.imageUrl}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  responseForm = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="response-container">
        <img alt="love emoji" className="love-image" src={loveEmojiUrl} />
        <h1 className="thank-you">Thank You</h1>
        <p className="response-answer">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {feedbackExisting} = this.state

    return (
      <div className="app-container">
        <div className="feedback-question-container">
          {feedbackExisting ? this.responseForm() : this.feedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
