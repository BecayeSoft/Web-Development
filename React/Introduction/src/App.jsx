import { useState } from "react"

import Header from "./Core/Header.jsx"
import Footer from "./Core/Footer.jsx"
import Food from "./Lists/Food.jsx"
import Card from "./Cards/Card.jsx"
import Student from "./Student/Student.jsx"
import UserGreeting from "./Conditions/UserGreeting.jsx"
import List from "./Lists/List.jsx"
import Button from "./Events/Button.jsx"
import ProfilePicture from "./Events/ProfilePicture.jsx"
import Ninjutsu from "./Hooks/useState/Ninjutsu.jsx"
import OnChange from "./Events/OnChange.jsx"
import ColorPicker from "./Exercises/ColorPicker.jsx"
import Counter from "./Updater Functions/Counter.jsx"
import FavoriteCar from "./Objects and Array States/Objects State/FavoriteCar.jsx"
import StyledButton from "./Styles/StyledButton.jsx"
import SmartHome from "./Objects and Array States/Arrays State/SmartHome.jsx"
import AutoDealer from "./Objects and Array States/Arrays of Objects/AutoDealer.jsx"
import SmartCar from "./Hooks/useEffect/SmartCar.jsx"
import SmartWindow from "./Hooks/useEffect/SmartWindow.jsx"

function App() {

	const [isProfileVisible, setIsProfileVisible] = useState(true);

    const hideProfilePicture = () => {
        setIsProfileVisible(false);
		console.log("Profile picture is hidden");
    };

	const fruits = [
		{ id: 1, name: "banana", calories: 89 },
		{ id: 2, name: "strawberry", calories: 32 },
		{ id: 3, name: "Clemetine", calories: 47 },
		{ id: 4, name: "Avocado", calories: 160 },
	]

	return (
		<>
			{/* <Header /> */}

			{/* <Food /> */}

			{/* <Card />
			<Card />
			<Card /> */}

			{/* <StyledButton /> */}

			{/* <Student name="Jiraya" age={30} isStudent={true} />
			<Student />*/}
			
			{/* <UserGreeting isLoggedIn={false} username="Jiraya" /> */}

			{/* List */}
			{/* <>
				{
					fruits.length > 0 && 
					<List items={fruits} category="Fruits"/>
				}
			</> */}

			{/* {isProfileVisible && <ProfilePicture />}
            <Button hideProfilePicture={hideProfilePicture} /> */}

			{/* <Ninjutsu /> */}

			{/* <OnChange /> */}

			{/* <ColorPicker /> */}

			{/* <Counter /> */}

			{/* <FavoriteCar /> */}

			{/* <SmartHome /> */}

			{/* <AutoDealer /> */}

			{/* <SmartCar /> */}

			<SmartWindow />

			{/* <Footer /> */}
		</>
	)
}

export default App
