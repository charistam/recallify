import React from 'react';
import { Link } from 'react-router-dom';
import './FlashcardScreen.css';
import './components/Flashcard';
import Flashcard from './components/Flashcard';
import { Stack, IconButton } from '@chakra-ui/react';
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { GrRotateRight } from "react-icons/gr";

const FlashcardScreen: React.FC = () => {
    return (
        <div className="parent-div">
            <Stack direction="column">
                <Flashcard/>
                <Stack gap="25px" padding="10px" direction="row" justify="center" >
                    <IconButton bg="#104547" size="2xl" rounded="full">
                        <MdSkipPrevious />
                    </IconButton>
                    <IconButton bg="#104547" size="2xl" rounded="full">
                        <GrRotateRight />
                    </IconButton>
                    <IconButton bg="#104547" size="2xl" rounded="full">
                        <MdSkipNext />
                    </IconButton>
                </Stack>
            </Stack>
        
            <div className="temp-links">
                <p><Link to="/">go to login screen (temporary!)</Link></p>
                <p><Link to="/input">go to text input screen (temporary!)</Link></p>
            </div>
        </div>
        
    );
}

export default FlashcardScreen;