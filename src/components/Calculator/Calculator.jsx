import { useState } from 'react';
import { Button, ButtonGroup, Divider, TextField } from '@mui/material';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState(null);
    const [operator, setOperator] = useState(null);

    function handleNumberClick(newNumber) {
        if (display === '0') {
            setDisplay(newNumber.toString());
        } else {
            setDisplay(display + newNumber.toString());
        }
    }

    function handleOperatorClick(newOperator) {
        if (operator && prevValue) {
            calculateResult();
        } else {
            setPrevValue(parseFloat(display));
        }

        setOperator(newOperator);
        setDisplay('');
    }

    function calculateResult() {
        const currentValue = parseFloat(display);
        let result;

        switch (operator) {
            case '+':
                result = prevValue + currentValue;
                break;
            case '-':
                result = prevValue - currentValue;
                break;
            case 'x':
                result = prevValue * currentValue;
                break;
            case '÷':
                result = prevValue / currentValue;
                break;
            default:
                result = currentValue;
        }

        setDisplay(result.toString());
        setPrevValue(result);
        setOperator(null);
    }

    function handleEqualsClick() {
        if (operator && prevValue) {
            calculateResult();
        }
    }

    function handleClearClick() {
        setDisplay('0');
        setPrevValue(null);
        setOperator(null);
    }

    return (
        <>
            {/* <div>{display}</div> */}
            <TextField
                label="Result"
                value={display}
                InputProps={{
                    readOnly: true,
                    sx: { fontSize: '1.1rem' },
                }}
                variant="outlined"
            />

            <Divider />

            <ButtonGroup sx={{ margin: '10px' }} size="large" variant="contained">
                <Button variant="outlined" onClick={() => handleOperatorClick('+')}>
                    +
                </Button>
                <Button variant="outlined" onClick={() => handleOperatorClick('-')}>
                    -
                </Button>
                <Button variant="outlined" onClick={() => handleOperatorClick('x')}>
                    x
                </Button>
                <Button variant="outlined" onClick={() => handleOperatorClick('/')}>
                    /
                </Button>
            </ButtonGroup>
            <div>
                <Button variant="outlined" onClick={() => handleNumberClick(1)}>
                    1
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(2)}>
                    2
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(3)}>
                    3
                </Button>
            </div>
            <div>
                <Button variant="outlined" onClick={() => handleNumberClick(4)}>
                    4
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(5)}>
                    5
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(6)}>
                    6
                </Button>
            </div>
            <div>
                <Button variant="outlined" onClick={() => handleNumberClick(7)}>
                    7
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(8)}>
                    8
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(9)}>
                    9
                </Button>
            </div>
            <div>
                <Button variant="outlined" onClick={() => handleOperatorClick('.')}>
                    .
                </Button>
                <Button variant="outlined" onClick={() => handleNumberClick(0)}>
                    0
                </Button>
                <Button variant="outlined" onClick={() => handleEqualsClick()}>
                    =
                </Button>
            </div>
            <div>
                <Button variant="outlined" onClick={() => handleClearClick()}>
                    C
                </Button>
            </div>
        </>
    );
};

export default Calculator;
