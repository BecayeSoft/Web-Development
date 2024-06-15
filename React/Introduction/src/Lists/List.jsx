import PropTypes from 'prop-types'

function List(props) {

    const category = props.category
    const itemList = props.items;

    // List must have a unique key
    const listItems = itemList.map(
        item => <li key={item.id}>{item.name}: {item.calories}</li>
    )

    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    )
}

// Useful in case data is missing
List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    )
}

export default List