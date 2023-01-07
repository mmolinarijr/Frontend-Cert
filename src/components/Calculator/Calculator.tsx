import { Container, Box, Stack, NumberInput, NumberInputField } from '@chakra-ui/react';
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
                    <NumberInput>
                        <NumberInputField value={value} readOnly />
                        <NumberInputField onClick={() => handleClick(1)}>+1</NumberInputField>
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
