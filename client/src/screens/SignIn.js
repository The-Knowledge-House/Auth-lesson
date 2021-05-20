import { useState } from 'react'
import { signInUser } from '../services/auth'

export default function SignIn(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: ''
  })
  
  const handleChange = event => {
    setState({
      [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
    })
  }

  const onSignIn = event => {
    event.preventDefault()

    const { history, setUser } = props

    signInUser(state)
        .then(res => setUser(res.user))
        .then(() => history.push('/'))
        .catch(error => {
            console.error(error)
             setState({
                isError: true,
                errorMsg: 'Invalid Credentials',
                username: '',
                password: ''
            })
        })
  }
  
  const renderError = () => {
    const toggleForm = state.isError ? 'danger' : ''
    if (state.isError) {
        return (
            <button type="submit" className={toggleForm}>
                {state.errorMsg}
            </button>
        )
    } else {
        return <button type="submit">Sign In</button>
    }
}
const { username, password } = state
return (
  <div className="row">
      <div className="form-container">
          <h3>Sign In</h3>
          <form onSubmit={onSignIn}>
              <label>Username</label>
              <input
                  required
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter Username"
                  onChange={() => handleChange}
              />
              <label>Password</label>
              <input
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={() => handleChange}
              />
              {renderError()}
          </form>
      </div>
  </div>
)
}