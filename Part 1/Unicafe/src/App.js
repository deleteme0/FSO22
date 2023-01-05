import { useState } from 'react'

const Button = ({handleClick,text}) => {

  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return(
    <p>{text} = {value}</p>
  )
}

const Statistics = ({good,neutral,bad}) => {

  if (good === 0 && neutral === 0 && bad === 0){
    return(
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>

      
      <StatisticLine text={"good"} value = {good} />

      
      <StatisticLine text={"neutral"} value = {neutral} />
      
      <StatisticLine text={"bad"} value = {bad} />
      
      <StatisticLine text={"all"} value = {good + neutral + bad} />

      
      <StatisticLine text={"average"} value = {(good*1 + bad*-1)/(good + neutral + bad)} />
      
      <StatisticLine text={"positive"} value = {100*(good)/(good + neutral + bad)} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick = {() => setGood(good + 1)} text="good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text="bad" />

      <Statistics good = {good} neutral = {neutral} bad = {bad} />
      

    </div>
    
  )
}

export default App