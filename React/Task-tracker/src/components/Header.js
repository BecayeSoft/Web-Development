import PropTypes from "prop-types";
import Button from './Button'
import { useLocation } from "react-router-dom";

// title, showForm and onAdd are the props
const Header = ({ title, showForm, onAdd }) => {

    // Get access to the route URL
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>

            {/* If the URL is '/' we show the add button */}
            {/* showForm indicates if the form is shown or not */ }
            {location.pathname === '/' && (
                <Button onClick={onAdd}
                     color={showForm ? 'red' : 'green'}
                     text={showForm ? 'Close' : 'Add'}  />
            )}

        </header>
    );
}

// Default Header
Header.defaultProps = {
    title: 'Task Tracker'
}

// Set props types: Robust code
Header.propTypes = {
    // title: PropTypes.string
    title: PropTypes.string.isRequired
}

// CSS Styling
// You can pass it to a component using: style={headingStyle}
const headingStyle = {
    color: 'red',
    background: 'black'
}

export default Header;