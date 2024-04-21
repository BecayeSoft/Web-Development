import PropTypes from 'prop-types'

function Student(props) {

    return (
        <div className="student">
            <h1>Student</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

/* Prop Types */
// Define the type of the properties
// Failure to provide the correct type will result in a warning in the console
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}


/* Default Props */
// Define default values for not provided properties
Student.defaultProps = {
    name: "No Name",
    age: 0,
    isStudent: false
}


export default Student