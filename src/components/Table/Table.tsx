import {
    Input,
    Button,
    Container,
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

const TableCalculator = () => {
    const [initialValue, setInitialValue] = useState(0);

    const handleCalculate = () => {
        console.log('teste');
    };

    const handleClick = (number: number) => {
        setInitialValue(number);
    };

    return (
        <Container mb="100">
            <Input id="display" mt="10" readOnly value={initialValue} />
            <TableContainer mt="5">
                <Table>
                    <Thead>
                        <Tr>
                            <Th colSpan={2}>
                                <Button id="clear" onClick={() => setInitialValue(0)}>
                                    AC
                                </Button>
                            </Th>
                            <Th>
                                <Button id="divide">/</Button>
                            </Th>
                            <Th>
                                <Button id="multiply">X</Button>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Button id="seven" onClick={() => handleClick(7)}>
                                    7
                                </Button>
                            </Td>
                            <Td>
                                <Button id="eight" onClick={() => handleClick(8)}>
                                    8
                                </Button>
                            </Td>
                            <Td>
                                <Button id="nine" onClick={() => handleClick(9)}>
                                    9
                                </Button>
                            </Td>
                            <Td>
                                <Button id="subtract">-</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Button id="four" onClick={() => handleClick(4)}>
                                    4
                                </Button>
                            </Td>
                            <Td>
                                <Button id="five" onClick={() => handleClick(5)}>
                                    5
                                </Button>
                            </Td>
                            <Td>
                                <Button id="six" onClick={() => handleClick(6)}>
                                    6
                                </Button>
                            </Td>
                            <Td>
                                <Button id="add">+</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Button id="one" onClick={() => handleClick(1)}>
                                    1
                                </Button>
                            </Td>
                            <Td>
                                <Button id="two" onClick={() => handleClick(2)}>
                                    2
                                </Button>
                            </Td>
                            <Td>
                                <Button id="three" onClick={() => handleClick(3)}>
                                    3
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={2}>
                                <Button id="zero" onClick={() => handleClick(0)}>
                                    0
                                </Button>
                            </Td>
                            <Td>
                                <Button id="decimal">.</Button>
                            </Td>
                            <Td rowSpan={2}>
                                <Button id="equals">=</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TableCalculator;
