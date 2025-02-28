import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import { TextField } from '@mui/material';

const ParentComponent = () =>{
  const greetingString = 'You are awesome';
  return <ChildComponent greeting={greetingString}/>
}
 
const ChildComponent = (props)=>{
  const {greeting} = props;
  return <div> {greeting} Jason</div>
}

const App =()=>{
  return (
    <>
    <ParentComponent/>
    </>
  )
}
export default App
