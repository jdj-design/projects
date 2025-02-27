import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

const App = () => {

  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => setData(data.results))
  }, []) 
}


export default App
