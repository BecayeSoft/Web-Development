import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Student from "./Student/Student.jsx"
import UserGreeting from "./UserGreeting.jsx"

function App() {

  return (
    <>
      <Header />

      {/* <Food /> */}

      <Card />
      <Card />
      <Card />

      <Student name="Jiraya" age={30} isStudent={true}/>
      <Student />

      <UserGreeting isLoggedIn={false} username="Jiraya" />

      <Footer />
    </>
  )
}

export default App
