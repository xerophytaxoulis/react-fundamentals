// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const inputRef = React.useRef(null)
  const [inputError, setInputError] = React.useState(null)
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }
  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  function handleChange(event) {
    // const value = event.target.value
    // const isValid = value === value.toLowerCase()
    // setInputError(isValid ? null : 'Username must be lower case')
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={username}
        />
      </div>
      {inputError && (
        <div style={{color: 'red'}} role="alert">{`Error: ${inputError}`}</div>
      )}
      <button disabled={inputError} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
