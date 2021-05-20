import { getItems } from '../services/items'
import Routes from '../routes'
import Header from '../screens/Header'
import { useState, useEffect } from 'react';

function Container(props) {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])


const fetchItem = async () => {
  try {
    const items = await getItems()
    setItems({ items })
  } catch (err) {
    console.error(err)
    }
  }

  useEffect(() => {
    fetchItem()
  }, [])
  
  const addItem = item => setItems(...items, item)

  const setVisitor = user => setUser(user)

  const clearUser = () => setUser(null)



return (
  <>
      <Header user={user} />
      <main className="container">
          <Routes
              items={items}
              user={user}
              setUser={setVisitor}
              addItem={addItem}
              clearUser={clearUser}
          />
      </main>
  </>
)
  
}

export default Container