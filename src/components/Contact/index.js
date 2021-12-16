import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    //we want to clear the input fields on the component loading - thus empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    // destructure the formState object into its named properties, name, email, and message.
    const { name, email, message } = formState;
    // using the setFormState function to update the formState value for the name property
    //assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name
    //use the spread operator, ...formState, so we can retain the other key-value pairs in this object
    //without spread operator, the formState object would be overwritten to only contain the name: value key pair
    // name property of target in the second expression actually refers to the name attribute of the form element
    //matches the property names of formState (name, email, and message)
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        // setFormState({...formState, name: e.target.value})
        //conditional so that the state only updates if the form data has passed the quality tests
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    // function that'll handle the submission of the form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    {/* onChange is an event listener */}
                    {/* onBlur evaluates the format once the focus has changed from the input */}
                    <input type="text" name="name" defaultValue={name} onBlur ={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur ={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur ={handleChange} />
                </div>
                {/* If errorMessage has a truthy value, the <div> block will render. */}
                {/* If errorMessage doesn't have an error message, the following <div> block doesn't render. */}
                {/* The && operator—known as the AND operator—is being used here as a short circuit.  */}
                {/* If the first value resolves to true, the second expression is evaluated. */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm