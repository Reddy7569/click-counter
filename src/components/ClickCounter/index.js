// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="main_container">
        <h1>
          The Button has been clicked{' '}
          <span className="count_intializer">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button
          className="click_button"
          onClick={this.onIncrement}
          type="submit"
        >
          Click me
        </button>
      </div>
    )
  }
}
export default ClickCounter
