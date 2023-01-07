function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                Designed by <br /> Mauricio Molinari &copy; {currentYear}
            </footer>
        </>
    );
}

export default Footer;
