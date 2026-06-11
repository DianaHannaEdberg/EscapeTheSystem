import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div>
        <Link to="/">Home</Link>
        <Link to="/room/server-room"> Server </Link>
        <Link to="/room/security-room"> Security </Link>
        <Link to="/room/archives"> Archives </Link>
        <Link to="/room/reactor-room"> Reactor </Link>
        <Link to="/room/vault"> Vault </Link>
        <Link to="/room/exit-node"> Exit </Link> 

    </div>
  )
}

export default Navbar;