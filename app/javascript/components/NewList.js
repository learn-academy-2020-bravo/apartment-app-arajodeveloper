import React, { useState } from 'react';
import PropTypes from "prop-types"

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'



const NewList = props => {
  const [apartments, setApartments] = useState([])
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    name: "",
    phone_number: "",
    hours: "",
    image_path: ""
  })

  const pushLists = (newList) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(newList),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if (response.ok) setSuccess(true)
      else setError(true)
    }).catch(error => {
      console.log("error:",error)
    })
  }

  const handleChange = e => {
    setForm({
        //take all the existing form data and,...
        ...form,
        //...add new data to the end as it is typed
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
    pushLists(form)
  }

  return(
    <>
     
      <h4 className="subtitle">Create a New Listing</h4>


      <Form className="form-wrapper">
        <FormGroup>
          <Label htmlFor="address" id="address">Address</Label>
            <Input
              type="text"
              name="address"
              value={ form.address }
              onChange={ handleChange }
            />
          <Label htmlFor="city" id="city">City</Label>
            <Input
              type="text"
              name="city"
              value={ form.city }
              onChange={ handleChange }
            />
            <Label htmlFor="state" id="state">State</Label>
            <Input
              type="text"
              name="state"
              value={ form.state }
              onChange={ handleChange }
            />
          <Label htmlFor="zip_code" id="zip_code">Zip Code</Label>
            <Input
              type="text"
              name="zip_code"
              value={ form.zip_code}
              onChange={ handleChange }
            />
            <Label htmlFor="country" id="country">Country</Label>
              <Input
              type="text"
              name="country"
              value={ form.country }
              onChange={ handleChange }
             />
             <Label htmlFor="name" id="name">Name</Label>
              <Input
              type="text"
              name="name"
              value={ form.name}
              onChange={ handleChange }
             />
             <Label htmlFor="phone_number" id="phone_number">Contact</Label>
              <Input
              type="text"
              name="phone_number"
              value={ form.phone_number }
              onChange={ handleChange }
             />
             <Label htmlFor="hours" id="hours">Hours</Label>
              <Input
              type="text"
              name="hours"
              value={ form.hours }
              onChange={ handleChange }
             />
          
            <Label htmlFor="image_path" id="image_path">Image URL</Label>
            <Input
              type="text"
              name="image_path"
              value={ form.image_path }
              onChange={ handleChange }
            />
        </FormGroup>

        {error && <h4 className="error-message">Please fill out the form correctly.</h4>}

        <Link to="/apartments">
          <Button
            style={{backgroundColor:"white",border:"1px solid rgb(237,53,53)", color:"rgb(237,53,53)",fontWeight: "500", marginBottom: "80px"}}
            onClick = { handleSubmit }
            id="submit"
            name="submit"
          >Submit</Button>
          { success && <Redirect to="/apartments"/> }
        </Link>
      </Form>
    </>
  )
}

export default NewList