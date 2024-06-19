import { useState, React, useEffect } from "react"

function DigitalClock() {

    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date()
            setTime(t => {
                return {
                    hours: date.getHours(),
                    minutes: date.getMinutes(),
                    seconds: date.getSeconds()
                }
            })
        }, 1000)

        // Clear the interval when the component is unmounted
        return () => {
            clearInterval(intervalId)
        }

    }, [])

    return (
        <div className="clock-container">
            <h1>Digital Clock</h1>
            <div className="clock">
                <span>
                    {time.hours < 10 ? '0' + time.hours : time.hours}:
                    {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
                    {time.seconds < 10 ? '0' + time.seconds : time.seconds}
                </span>
            </div>
        </div>
    )
}

export default DigitalClock