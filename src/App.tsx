import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Calc from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer';
import TableCalculator from './components/Table/Table';

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            {/* <Calc initialValue={0} /> */}
            <TableCalculator />
            <Footer />
        </Box>
    </ChakraProvider>
);

export default App;
