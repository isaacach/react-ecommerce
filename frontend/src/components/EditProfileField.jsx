/* eslint-disable react/prop-types */
import { useState } from "react";
import userService from "../services/user-service";

export default function EditProfileField({ field, user, onSubmit }) {
  const [newEmail, setNewEmail] = useState('')
  const [newUsername, setNewUsername] = useState('')

  const handleChange = (e) => {
    if (field === 'email') {
      setNewEmail(e.target.value)
    } else if(field === 'username') {
      setNewUsername(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    if (field === 'email') {
      userService.editUser(user.username, newEmail, user.password).then(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        }
      )
    } else if (field === 'username') {
      userService.editUser(newUsername, user.email, user.password).then(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <input type="submit"/>
      </form>
    </div>
  );
}


