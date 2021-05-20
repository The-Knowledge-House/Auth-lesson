import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ItemForm from '../components/shared/ItemForm'
import Layout from '../components/shared/Layout'
import { createItem } from '../services/items'

function ItemCreate(props) {
  const [item, setItem] = useState({
    title: '',
    link: ''
  })
  const [createdItem, setCreatedItem] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedItem = Object.assign(item, updatedField)

    setItem(editedItem)
}

  const handleSubmit = async event => {
    event.preventDefault()
    const res = await createItem(item)
    if (res.status === 201) {
      props.addItem(res.data.item)
      setCreatedItem(res.data)
    }
  }
    if (createdItem) {
      return <Redirect to={`/items`} />
    }
    
const {history} = props
    
    return (
      <Layout>
          <ItemForm
              item={item}
              history={history}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              cancelPath="/"
          />
      </Layout>
  )

}

export default ItemCreate