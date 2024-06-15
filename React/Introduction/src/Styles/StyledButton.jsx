import styles from './Button.module.css'

function StyledButton() {

    // Alternative styling
    // Use the "style" property if you want to apply
    // styles directly to the component
    const inlineStyles = {
        borderRadius: '1rem',
    }
    
    return (
        <>
            <button className={styles.btn + ' ' + styles['btn-primary']}>Click me</button>
            <button style={inlineStyles}>Click me</button>
        </>
    )   
}

export default StyledButton