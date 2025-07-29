import React, { useState } from 'react'
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import SubjectInput from './SubjectInput'
import MessageInput from './MessageInput'
import SendMessage from './SendMessage'
import "./ContactForm.css"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function clearForm() {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  function validateForm() {
    console.log(name);
    if (!name || !name.trim()) {
      alert("name required")
      return false
    }
    if (!email || !email.trim()) {
      alert("Please enter an email");
      return false;
    }

    const pattern = /\S+@\S+\.\S+/;
    if (!pattern.test(email)) {
      alert("Email is invalid");
      return false;
    }

    if (!subject || !subject.trim()) {
      alert("please add subject")
      return false
    }
    if (!message || !message.trim()) {
      alert("please add a message")
      return false
    }
    return true
  }

  function handleContactForm(event) {
    event.preventDefault()

    console.log(name, email, subject, message);
    if (!validateForm()) return;
    const payload = { name, email, subject, message }
    console.log(payload);
    localStorage.setItem("contactForm", JSON.stringify(payload))
    clearForm()
    alert("Form Submit")
  }
  return (
    <div className='contactContainer'>
      <form className='formContainer' onSubmit={handleContactForm}>
        <NameInput inputType="text" onChange={setName} value={name} />
        <EmailInput inputType="email" onChange={setEmail} value={email} />
        <SubjectInput inputType="text" onChange={setSubject} value={subject} />
        <MessageInput onChange={setMessage} value={message} />
        <SendMessage inputType="submit" />
      </form>
    </div>
  )
}

export default ContactForm