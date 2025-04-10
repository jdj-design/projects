import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    if(!feedback || feedback.lenght ===0){
        return<p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
      {feedback.map((item)=>(
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default FeedbackList
