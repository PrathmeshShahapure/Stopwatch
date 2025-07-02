import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {timeInMin: 0, timeInSec: 0}
    this.timerId = null
  }

  handelStart = () => {
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.setState(prev => {
          const currentSec = prev.timeInSec + 1

          if (currentSec === 60) {
            return {
              timeInMin: prev.timeInMin + 1,
              timeInSec: 0,
            }
          }

          return {timeInSec: currentSec}
        })
      }, 1000)
    }
  }

  handelStop = () => {
    clearInterval(this.timerId)
    this.timerId = null
  }

  handelReset = () => {
    clearInterval(this.timerId)
    this.setState({timeInMin: 0, timeInSec: 0})
    this.timerId = null
  }

  formatTime = value => (value < 10 ? `0${value}` : value)

  render() {
    const {timeInMin, timeInSec} = this.state
    return (
      <div className="stContainer">
        <div className="imgContainer">
          <div className="stopwatchwithHeader">
            <h1>Stopwatch</h1>
            <div className="timerContainer">
              <div className="timerwithLogo">
                <img
                  className="logoimg"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt=" stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1 className="displayTime">
                {this.formatTime(timeInMin)}:{this.formatTime(timeInSec)}
              </h1>
              <button
                onClick={this.handelStart}
                type="button"
                className="startBtn"
              >
                Start
              </button>
              <button
                onClick={this.handelStop}
                type="button"
                className="stopBtn"
              >
                Stop
              </button>
              <button
                onClick={this.handelReset}
                type="button"
                className="resetBtn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
