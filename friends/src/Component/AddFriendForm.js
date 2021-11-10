import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";

const initialValues = {
  name: "",
  age: "",
  email: "",
};

function AddFriendForm() {

    const { push } = useHistory()

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
      e.preventDefault()
      axiosWithAuth()
        .post('/api/friends', formValues)
        .then(res => {
            push('/friends')
        })
        .catch(err => console.log({ err }))
  }

  return (
    <div>
      <h3>Add new friend</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label htmlFor="age">age</label>
        <input
          id="age"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <button>Add friend</button>
      </form>
    </div>
  );
}

export default AddFriendForm;
