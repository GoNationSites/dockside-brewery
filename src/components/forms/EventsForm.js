import React from "react"

export default function EventForm({ formName }) {
  return (
    <form
      className="contact-form"
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" id="name" mb={3} placeholder="Name" />
      <input type="email" name="email" id="email" mb={3} placeholder="Email" />
      <input
        type="number"
        name="numberguests"
        id="numberguests"
        mb={3}
        placeholder="Number Guests"
      />
      <input
        type="date"
        name="date"
        id="date"
        mb={3}
        placeholder="Event Date"
      />
      <textarea
        name="message"
        id="message"
        rows="6"
        mb={3}
        placeholder="Message"
      />
      <button>Submit</button>
    </form>
  )
}
