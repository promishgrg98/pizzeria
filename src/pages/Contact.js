import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{background : `url(${PizzaLeft})`}}>PizzaLeft</div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form>
                <label htmlFor='name'>Full Name</label>
                <input name='name' type='text' placeholder='Enter your name here...' /> 

                <label htmlFor='email'>Email</label>
                <input name='email' type='email' placeholder='Enter your email here...' />

                <label htmlFor='message'>Message</label> 
                <textarea rows={6} name='message' placeholder='Enter message' required></textarea>

                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact