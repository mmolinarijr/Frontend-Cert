import {
    Container,
    Box,
    Button,
    Stack,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Calc {
    initialValue: number;
}

function Calculator(props: Calc) {
    const [value, setValue] = useState(props.initialValue);
    const [result, setResult] = useState(value);

    const handleClick = (n: number) => {
        setValue(value + n);
    };

    return (
        <Box>
            <Stack>
                <Container>
                    <Button onClick={() => handleClick(0)}>AC</Button>
                    <Button onClick={() => handleClick(1)}>/</Button>
                    <Button onClick={() => handleClick(1)}>X</Button>
                    <Button onClick={() => handleClick(1)}>-</Button>
                    <Button onClick={() => handleClick(1)}>+</Button>
                    <Button onClick={() => handleClick(1)}>=</Button>

                    <Input boxSize="sm" value={value} readOnly />

                    <Button>0</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                </Container>
            </Stack>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Teste</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Teste</Td>
                        </Tr>
                        <Tr>
                            <Td>teste 2</Td>
                        </Tr>
                        <Tr>
                            <Td>Teste</Td>
                        </Tr>
                        <Tr>
                            <Td>teste 2</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Calculator;
