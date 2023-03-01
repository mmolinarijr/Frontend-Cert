import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

const Calculator = () => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleNumberClick = (num) => {
        if (operator === '') {
            setOperand1(`${operand1}${num}`);
        } else {
            setOperand2(`${operand2}${num}`);
        }
    };

    const handleOperatorClick = (op) => {
        if (operand1 !== '') {
            setOperator(op);
        }
    };

    const handleEqualsClick = () => {
        if (operand1 !== '' && operand2 !== '') {
            const num1 = parseFloat(operand1);
            const num2 = parseFloat(operand2);
            let res;

            switch (operator) {
                case '+':
                    res = num1 + num2;
                    break;
                case '-':
                    res = num1 - num2;
                    break;
                case '*':
                    res = num1 * num2;
                    break;
                case '/':
                    res = num1 / num2;
                    break;
                default:
                    res = '';
            }

            setResult(res);
            setOperand1('');
            setOperand2('');
            setOperator('');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Calculator
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Result"
                            variant="outlined"
                            fullWidth
                            value={`${operand1} ${operator} ${operand2} ${result}`}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('1')}>
                            1
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('2')}>
                            2
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('3')}>
                            3
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleOperatorClick('+')}>
                            +
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('4')}>
                            4
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('5')}>
                            5
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleOperatorClick('-')}>
                            -
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('6')}>
                            6
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('7')}>
                            7
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('8')}>
                            8
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleOperatorClick('*')}>
                            x
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('9')}>
                            9
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleNumberClick('0')}>
                            0
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth onClick={() => handleOperatorClick('/')}>
                            ÷
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                setOperand1('');
                                setOperand2('');
                                setOperator('');
                                setResult('');
                            }}>
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleEqualsClick}
                            disabled={operator === '' || operand2 === ''}>
                            =
                        </Button>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" gutterBottom>
                        {`Operand 1: ${operand1} | Operator: ${operator} | Operand 2: ${operand2}`}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Calculator;
