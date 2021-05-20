import { useState } from 'react'
import { signUp, signInUser } from '../services/auth'

function SignUp() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
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
  const onSignUp = event => {
    event.preventDefault()

    const { history, setUser } = this.props

   signUp(state)
        .then(() => signInUser(state))
        .then(res => setUser(res.user))
        .then(() => history.push('/'))
        .catch(error => {
            console.error(error)
            this.setState({
                email: '',
                password: '',
                passwordConfirmation: '',
                isError: true,
                errorMsg: 'Sign Up Details Invalid'
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

const { email, username, password, passwordConfirmation } = state




  return (
<div className="row">
                <div className="form-container">
                    <h3>Sign Up</h3>
                    <form onSubmit={onSignUp}>
                        <label>Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter username"
                            onChange={() => handleChange}
                        />
                        <label>Email address</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
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
                        <label>Password Confirmation</label>
                        <input
                            required
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            type="password"
                            placeholder="Confirm Password"
                            onChange={() => handleChange}
                        />
                        {renderError()}
                    </form>
                </div>
            </div>
  )

}

export default SignUp