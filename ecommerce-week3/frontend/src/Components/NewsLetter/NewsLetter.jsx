import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers Straight to Your Inbox!</h1>
      <p>Be the first to know about drops, deals & insider updates.</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe Now</button>
      </div>
    </div>
  )
}

export default NewsLetter
