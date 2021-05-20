import { useState} from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../../services/auth'
import messages from './AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ChangePassword () {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleChange = (event) => {
    setOldPassword({ [event.target.value]: event.target.value })
    setNewPassword({ [event.target.value]: event.target.value })
  }
  return (
<div className="row">
                <div className="col-sm-10 col-md-8 mx-auto mt-5">
                    <h3>Change Password</h3>
                    <Form onSubmit={onChangePassword}>
                        <Form.Group controlId="oldPassword">
                            <Form.Label>Old password</Form.Label>
                            <Form.Control
                                required
                                name="oldPassword"
                                value={oldPassword}
                                type="password"
                                placeholder="Old Password"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="newPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                required
                                name="newPassword"
                                value={newPassword}
                                type="password"
                                placeholder="New Password"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
  )
}

export default ChangePassword