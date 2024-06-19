There are several ways to apply CSS styles to React components.

# Inline Styles

Use the "style" property to apply styles directly to the component.

⭐ Straightforward

➖ Less maintainable

```jsx
function Button() {

    const inlineStyles = {
        borderRadius: '1rem',
    }
    
    return (
        <button style={inlineStyles}>Click me</button>
    )   
}
```

# CSS modules

CSS modules are a way of isolating styles to a specific component. They make the code more maintainable.

⭐ Recommended, more scalable

➖ If you are lazy, it requires more effort.

```jsx
// StyledButton.jsx

import styles from './Button.module.css'

function StyledButton() {

    return (
        <button className={styles.btn + ' ' + styles['btn-primary']}>
            Click me
        </button>
    )     
}

export default StyledButton
```

```css
// Button.module.css

.btn {
    background-color: #646cff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

.btn:hover {
  background-color: #85db14;
}

.btn-primary {
  background-color: #d04646 !important;
}
```