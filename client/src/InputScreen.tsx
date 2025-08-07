import React, { useState } from 'react';
import './InputScreen.css';
import { Link } from 'react-router-dom';
import { Box, Stack, Textarea, Text, Button } from "@chakra-ui/react";

export interface InputScreenProps {
    onSubmit: (userInput: string) => void; // function that accepts userInput and does not return anything
    // isLoading: boolean;
}

const InputScreen: React.FC<InputScreenProps> = ({ onSubmit }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
        console.log(inputText);
    };

    // event handler called by button onClick event
    const handleSubmit = () => {
        console.log("Stored text: " + inputText);
        onSubmit(inputText); // passes text to prop function onSubmit
    }

    return (
        <div className="parent-div">
            <Stack direction="column" align="center">
                <Box w="900px" padding="15px" rounded="xl" bg="#e6f1f5">
                    <Text color="#4B5358" textStyle="xl">what would you like to study today? </Text>
                </Box>
                <Textarea 
                    h="320px" 
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="enter text here (1000 words max)."
                />
                <Button 
                    size="lg" rounded="xl" bg="#e6f1f5" w="260px" color="#4B5358"
                    onClick={handleSubmit}
                >
                    generate flashcards
                </Button>
            </Stack>

            <div className="temp-links">
                <p><Link to="/">go to login screen (temporary!)</Link></p>
                <p><Link to="/flashcard">go to flashcard screen (temporary!)</Link></p>
            </div>
        </div>
    );
}

export default InputScreen;