import { useState } from "react"
import "./Home.css"
function Home() {
    const [showMessage, setShowMessage] = useState(true)

    function handleClick() {
        setShowMessage(!showMessage)
    }
    return (<>
        {showMessage && <div>
            <h1 className="center">Welcome to Plan Your Magic</h1>
            <br></br>
            <div id="message" className="center" style={{ textAlign: "center", background: "white" }}>
                <p>Here You can Plan Your Day as well as Stay updated with the world.
                    You get to decide what you have in mind, we have created a space for you
                    that is FOR YOU.

                    Go ahead and explore different and fun things in this site, it's unlike any planner
                    you probably would come across.
                </p>
                <button className="center" onClick={handleClick}>Thank You! Take me to the website</button>
            </div>

        </div>}
    </>
    )
}

export default Home
