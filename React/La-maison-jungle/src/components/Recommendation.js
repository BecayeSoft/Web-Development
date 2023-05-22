function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth < 5
    
    if (!isSpring) {
        return <div>Nous avons aussi du café !</div>
    }
    
    return <div>C'est le moment de rempoter 🌵</div>
}

export default Recommendation