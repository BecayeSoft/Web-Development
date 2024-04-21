import styles from './Button.module.css'

function Button() {

    // Alternative styling
    // Use the "style" property if you want to apply
    // styles directly to the component
    const inlineStyles = {
        borderRadius: '1rem',
    }
    
    return (
        <button className={styles.btn} style={inlineStyles}>Click me</button>
    )   
}

export default Button