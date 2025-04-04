import './index.css';
import Header from './Header';
import FeedbackItem from './FeedbackItem';
import { useState } from 'react';
import FeedbackData from './FeedbackData';
import FeedbackList from './FeedbackList';

function App() {
  const[feedback, SetFeedback]=useState(FeedbackData);

  return (
    <>
    <Header/>
  
    <div className='Container'>
  <FeedbackList feedback={feedback}/>
      
    </div>
    </>
  )
}

export default App
