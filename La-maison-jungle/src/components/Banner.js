import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Header() {
    const title = "Le monde des plantes"

    return (
        <div className="lmj-banner">
            <div style={{color:"teal"}}
                className="lmj-banner-row">
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1>{title.toUpperCase()}</h1>
            </div>
            <Recommendation />
        </div>
    )
}

function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍"
    return (<p>{text}</p>)
}

function Banner() {
    return (<div><Header /><Description /></div>)
}

export default Banner