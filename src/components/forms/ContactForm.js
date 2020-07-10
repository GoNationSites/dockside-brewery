import React from "react"
import { Label, Input, Textarea, Button } from "theme-ui"

export default function ContactForm({ formName }) {
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
