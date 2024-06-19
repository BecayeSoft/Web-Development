# Lists

⚠️ Each object in a react list must have a unique key. 

Keys **aid in determining whether items in a list have been changed, updated, or removed**. This process helps React to optimize the rendering by recycling existing DOM elements.

```jsx
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
```