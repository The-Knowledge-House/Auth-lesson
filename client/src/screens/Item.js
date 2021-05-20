import  { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getItemById, deleteItem } from '../services/items'


export default function Item(props) {
  const [item, setItem] = useState(null)
  const [deleted, setDeleted] = useState(false)

  

  useEffect(() => {
  const fetchItem = async () => {
    try {
      const item = await getItemById(props.match.params.id)
      setItem({item})
    } catch (err) {
      console.error(err)
  }
  }
    fetchItem()
  }, [props.match.params.id])
  
const destroy = () => {
  deleteItem(item._id)
      .then(() => setDeleted(true))
      .catch(console.error)
}
if (!item) {
  return <p>Loading...</p>
}

  if (deleted) {
    return (
      <Redirect
        to={{
          pathname: '/items',
          state: { msg: 'Item succesfully deleted!' }
        }}
      />
    )
  }
  return (
    <Layout>
        <div className="item">
            <Link to="/items">
                <span> Back to all items</span>
            </Link>
            <h4>{item.title}</h4>
            <p>Link: {item.link}</p>
            <div className="buttons">
                <button className="danger" onClick={() => destroy}>
                    Delete Item
                </button>
                <button
                    className="edit"
                    onClick={() =>
                        props.history.push(
                            `/items/${props.match.params.id}/edit`
                        )
                    }
                >
                    Edit
                </button>
            </div>
        </div>
    </Layout>
)
}



