import React from "react"
import styled from "styled-components"
export default function ContactForm({ formName }) {
  return (
    <Form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" id="name" mb={3} placeholder="Name" />
      <input type="email" name="email" id="email" mb={3} placeholder="Email" />
      <textarea
        name="message"
        id="message"
        rows="6"
        mb={3}
        placeholder="Message"
      />
      <button>Submit</button>
    </Form>
  )
}

const Form = styled.form`

max-width: 400px;
margin: 0 auto;
display: flex;
flex-direction: column;
> * {
  margin-bottom: 1rem;
  background: none;
  border: solid 2px ${props =>
    props.theme.primary ? props.theme.primary : "rgb(202,54,37)"};
  border-radius: 5px;
  box-shadow: none;
}
> *:last-child {
  margin-bottom: 0;
}
> input {
  padding:0.5rem;
  height: 2rem;
  color: white;
  &::placeholder {
    // color: ${props =>
      props.theme.secondary ? props.theme.secondary : "rgb(202,54,37)"};
  }
}
> textarea {
  padding:0.5rem;
  &::placeholder {
    // color: ${props =>
      props.theme.secondary ? props.theme.secondary : "rgb(202,54,37)"};
  }
}

> button {
  background: ${props =>
    props.theme.secondary ? props.theme.secondary : "rgb(202,54,37)"};
  padding: 0.75rem;
  border: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}
`
