import { Container, Box, Button, Stack, Input, NumberInput, NumberInputField } from '@chakra-ui/react';
import { useState } from 'react';

interface Calc {
    initialValue: number;
}

function Calculator(props: Calc) {
    const [value, setValue] = useState(props.initialValue);

    const handleClick = (n: number) => {
        setValue(value + n);
    };

    return (
        <Box>
            <Stack>
                <Container>
                    <Button onClick={() => handleClick(1)}>AC</Button>
                    <Button onClick={() => handleClick(1)}>/</Button>
                    <Button onClick={() => handleClick(1)}>X</Button>
                    <Button onClick={() => handleClick(1)}>-</Button>
                    <Button onClick={() => handleClick(1)}>+</Button>
                    <Button onClick={() => handleClick(1)}>=</Button>
                    <Input value={value} readOnly />
                    <NumberInput>
                        <NumberInputField />
                        <NumberInputField />
                        <NumberInputField />
                        <NumberInputField />
                        <NumberInputField />
                        <NumberInputField />
                        <NumberInputField />
                        <NumberInputField />
                    </NumberInput>
                </Container>
            </Stack>
        </Box>
    );
}

export default Calculator;
