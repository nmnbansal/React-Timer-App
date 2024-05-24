import { Box, Button, Center, HStack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;
    
        const tick = () => {
            setTime(prevTime => {
                if (prevTime < 3600) {
                    return prevTime + 1;
                } else {
                    setIsRunning(false);
                    return prevTime;
                }
            });
        };

        if (isRunning) {
            timerId = setInterval(tick, 1);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isRunning]);

    useEffect(() => {
        if (time === 3600) {
            alert('60 minutes has passed!');
        }
    }, [time]);

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false);
        setTime(0);
    }

    const pauseTimer = () => {
        setIsRunning(false);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    }

    return (
        <>
            <Center>
                <Heading mt={{ base: 10, md: 20 }} textAlign="center" color="teal.500">React Timer App</Heading>
            </Center>
            <Center>
                <Box
                    mt={{ base: 10, md: 20 }}
                    p={{ base: 10, md: 15 }}
                    border="2px solid"
                    borderColor="teal.500"
                    borderRadius="md"
                    w={{ base: "90%", md: "auto" }}
                    boxShadow="lg"
                    bg="gray.50"
                >
                    <Center>
                        <Text fontWeight={500} fontSize={{ base: 20, md: 25 }} p={15} color="teal.600">{formatTime(time)}</Text>
                    </Center>
                    <HStack spacing={{ base: '10px', md: '50px' }} flexWrap="wrap" justify="center">
                        <Button
                            w={{ base: '70px', md: '80px' }}
                            h='40px'
                            bgGradient="linear(to-r, teal.400, blue.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, teal.500, blue.600)" }}
                            size='md'
                            onClick={startTimer}
                        >
                            Start
                        </Button>
                        <Button
                            w={{ base: '70px', md: '80px' }}
                            h='40px'
                            bgGradient="linear(to-r, red.400, pink.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, red.500, pink.600)" }}
                            size='md'
                            onClick={stopTimer}
                        >
                            Stop
                        </Button>
                        <Button
                            w={{ base: '70px', md: '80px' }}
                            h='40px'
                            bgGradient="linear(to-r, orange.400, yellow.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, orange.500, yellow.600)" }}
                            size='md'
                            onClick={pauseTimer}
                        >
                            Pause
                        </Button>
                        <Button
                            w={{ base: '70px', md: '80px' }}
                            h='40px'
                            bgGradient="linear(to-r, purple.400, purple.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, purple.500, purple.600)" }}
                            size='md'
                            onClick={resetTimer}
                        >
                            Reset
                        </Button>
                    </HStack>
                </Box>
            </Center>
        </>
    )
}
