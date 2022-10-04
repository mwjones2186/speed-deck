import { Navbar, Nav, Container } from 'react-bootstrap';
import 'react-bootstrap'


export const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='reponsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/profile'>Profile</Nav.Link>
                            <Nav.Link href='/leaderboard'>Leaderboard</Nav.Link>
                            <Nav.Link href='/progress'>Progress</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}