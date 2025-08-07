import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import InputScreen from './InputScreen';
import FlashcardScreen from './FlashcardScreen';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path = "/" element={<LoginScreen/>} />
      <Route path = "/input" element={<InputScreen/>} />
      <Route path = "/flashcard" element={<FlashcardScreen/>} />
    </Routes>
  );
}

export default App;
