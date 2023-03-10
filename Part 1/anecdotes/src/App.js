
import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [maxi,setMaxi] = useState([0,0])

  const rando = () => {

    console.log(selected)

    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addvote = () => {

    const copy = [...votes]
    copy[selected] = copy[selected] + 1

    if (copy[selected] > maxi[1]){


      setMaxi([selected,copy[selected]])
    }

    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>

      <p>has {votes[selected]} votes</p>

      <p>
      <button onClick={() => addvote()}>vote</button>
      <button onClick={() => rando()}>next anecdote</button>
      </p>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxi[0]]}</p>
      <p>has {maxi[1]} votes</p>

    </div>
  )
}

export default App