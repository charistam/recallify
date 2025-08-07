import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import InputScreen from './InputScreen';
import FlashcardScreen from './FlashcardScreen';


const App: React.FC = () => {
  const [flashcardData, setFlashcardData] = useState(null);

  const getFlashcards = async () => {
    console.log("getFlashcards call successful");
    // api call with userInput
    //setFlashcardData(data);
  }

  return (
    <Routes>
      <Route path = "/" element={<LoginScreen/>} />
      <Route path = "/input" element={<InputScreen onSubmit={getFlashcards}/>} />
      <Route path = "/flashcard" element={<FlashcardScreen/>} />
    </Routes>
  );
}

export default App;
