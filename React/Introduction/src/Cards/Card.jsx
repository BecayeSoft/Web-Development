import profilePic from '../assets/profile.jpg'
import Button from '../Styles/StyledButton'

function Card() {
    return (
        <div className="card">
            <img className='card-img' 
                src={profilePic} alt='Profile Picture'/>
            <h2>Hashirama</h2>
            <p>I am the Hokage, master of Mokuton.</p>

            <Button />
        </div>
    )
}

export default Card