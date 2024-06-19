# Conditional Rendering 

Components can be rendered conditionally in react just like in Angular.

```jsx
function UserGreeting(props) {

    if (props.isLoggedIn) {
         return <h2>Welcome {props.username}!</h2>
    }
    else {
         return <h2>Please log in to continue</h2>
    }

    // OR Use ternary operator
    
    return (
        <div>
            {props.isLoggedIn ? 
            <h2>Welcome {props.username}!</h2> : 
            <h2>Please log in to continue</h2>}
        </div>
    )
}

export default UserGreeting
```