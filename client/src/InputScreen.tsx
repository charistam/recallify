import React from 'react';
import './InputScreen.css';
import { Link } from 'react-router-dom';
import { Box, Stack, Textarea, Text, Button } from "@chakra-ui/react";

const InputScreen: React.FC = () => {
    return (
        <div className="parent-div">
            <Stack direction="column" align="center">
                <Box w="900px" padding="15px" rounded="xl" bg="#e6f1f5">
                    <Text color="#4B5358" textStyle="xl">what would you like to study today? </Text>
                </Box>
                <Textarea h="320px" placeholder="enter text here (1000 words max)."/>
                <Button size="lg" rounded="xl" bg="#e6f1f5" w="260px" color="#4B5358">
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