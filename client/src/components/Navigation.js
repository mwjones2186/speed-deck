import { Navbar, NavLink, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/navigation.css';


function UserLoggedIn(props) {
    return (
        <Navbar collapseOnSelect expand='lg' bg='black' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
                <NavLink href='/' className='h1Wrap'>
                    <h1 className='navh1'>SpeedDeck</h1>
                </NavLink>
                <div className='wrap'>
                    <Nav className='navWrap'>
                        <NavLink className='navItem' href='/'>Home</NavLink>
                        <NavLink className='navItem' href='/profile'>Profile</NavLink>
                        <NavLink className='navItem' href='/leaderboard'>Leaderboard</NavLink>
                        <NavLink className='navItem' href='/progress'>Progress</NavLink>
                        <NavLink className='navItem login' href='/signup'>Logout</NavLink>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

function UserLoggedOut(props) {
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
                <Link to='/' className='h1Wrap'>
                    <h1 className='navh1'>SpeedDeck</h1>
                </Link>
                <div className='wrap'>
                    <Nav className='navWrap'>
                        <NavLink className='navItem' href='/'>Home</NavLink>
                        <NavLink className='navItem login' href='/signup'>Login/SignUp</NavLink>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}



export default function Navigation(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserLoggedIn />;
    }
    return <UserLoggedOut />;
}

