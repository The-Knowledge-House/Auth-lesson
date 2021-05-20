import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import ItemForm from '../components/shared/ItemForm'
import { getItemById, updateItem } from '../services/items'

export default function ItemEdit(props) {
  const [item, setItem] = useState({
    title: '',
    link: ''
  })

  const [updated, setUpdated] = useState(false)

  

  useEffect(() => {
const edit = async () => {
    try {
      const item = await getItemById(props.match.params.id)
     setItem({item})
  } catch (err) {
      console.error(err)
  }
}

    edit()
  }, [props.match.params.id])
  

  const handleChange = event => {
  const updatedField = { [event.target.name]: event.target.value }

  const editedItem = Object.assign(item, updatedField)
setItem(editedItem)
  }
  
  const handleSubmit = event => {
    event.preventDefault()

    updateItem(props.match.params.id, { ...item })
        .then(() => setUpdated(true))
        .catch(console.error)
}
if (updated) {
  return <Redirect to={`/items/${props.match.params.id}`} />
}
return (
  <>
      <ItemForm
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/items/${props.match.params.id}`}
      />
  </>
)

}

