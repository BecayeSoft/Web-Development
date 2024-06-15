function Button({ hideProfilePicture }) {

    let count = 0
    
    const handleClick = (event, name) => {
        if (count < 2) {
            count++
            console.log(`${name} you clicked me ${count} time/s`);
            hideProfilePicture()
        }
        else {
            console.log(`${name} stop clicking me!`)
            event.target.textContent = "OUCH! 😡"
        }
    } 

    return(
        <button onClick={
            (e) => handleClick(e, 'Bro')
        }>Don't CLick Me 😧</button>
    )
}

export default Button