import React, {useState} from "react";

function ContactForm () {
    //we want to clear the input fields on the component loading - thus empty strings
    const [formState, setFormState] = state({name: '', email: '', message: ''})
    // destructure the formState object into its named properties, name, email, and message.
    const { name, email, message } = formState;
    return (
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name = "name" defaultValue={name}/>
            </div>
            <div>
                <label htmlFor="email">Email Address:</label>
                <input type = "email" name = "email" defaultValue={email}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name = "message" rows = "5" defaultValue={message}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default ContactForm