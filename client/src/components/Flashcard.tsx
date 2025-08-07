import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Flashcard: React.FC = () => {
    return (
        <div>
            <Box justifyItems="center" alignContent="center" w="870px" h="580px" bg="#e6f1f5" rounded="3xl">
                <Text color="#4B5358" maxW="650px" textStyle="3xl">whats my fav color :p</Text>
            </Box>
        </div>
    );
}

export default Flashcard;