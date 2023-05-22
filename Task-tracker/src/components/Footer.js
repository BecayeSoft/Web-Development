// Link prevents the page from reloading
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>Copyrights Brad Traversy &copy; 2023</p>
            <Link to="/about">About</Link>
        </footer>
    );
}

export default Footer;