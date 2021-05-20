import { useEffect } from 'react'
import { signOut } from '../services/auth'

function SignOut(props) {
  
  const signingOut = async () => {
    const { history, clearUser, user } = props
        signOut(user)
            .then(() => clearUser())
            .finally(() => history.push('/'))

  }

  useEffect(() => {
    signingOut()
  })
  
    
   return ''
    
}

export default SignOut