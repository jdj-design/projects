import React from 'react';

function FeedbackItem({item}) {

  return (
    <div ClassName='card'> 
      <div ClassName='num-display'>{item.rating}</div>
      <div ClassName='text-display'>{item.text}</div>
    
    </div>
  )
}

export default FeedbackItem
