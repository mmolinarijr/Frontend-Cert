import { Box } from '@chakra-ui/react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Box pt={5} m={2}>
                Designed by <br /> Mauricio Molinari &copy; {currentYear}
            </Box>
        </>
    );
}

export default Footer;
