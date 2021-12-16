import React, {useState} from "react";

function ContactForm () {
    //we want to clear the input fields on the component loading - thus empty strings
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    // destructure the formState object into its named properties, name, email, and message.
    const { name, email, message } = formState;
    // using the setFormState function to update the formState value for the name property
    //assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name
    //use the spread operator, ...formState, so we can retain the other key-value pairs in this object
    //without spread operator, the formState object would be overwritten to only contain the name: value key pair
    // name property of target in the second expression actually refers to the name attribute of the form element
    //matches the property names of formState (name, email, and message)
    function handleChange(e) {
        // setFormState({...formState, name: e.target.value})
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    console.log(formState)
    return (
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                {/* onChange is an event listener */}
                <input type="text" name = "name" defaultValue={name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email Address:</label>
                <input type = "email" name = "email" defaultValue={email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name = "message" rows = "5" defaultValue={message} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default ContactForm