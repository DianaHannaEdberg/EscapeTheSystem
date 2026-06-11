import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div>
        <Link to="/">Home</Link>
        <Link to="/room/ServerRoom"> Server </Link>
        <Link to="/room/SecurityRoom"> Security </Link>
        <Link to="/room/Archives"> Archives </Link>
        <Link to="/room/ReactorRoom"> Reactor </Link>
        <Link to="/room/Vault"> Vault </Link>
        <Link to="/room/ExitNode"> Exit </Link> 

    </div>
  )
}

export default Navbar;