import { useState } from "react"
import Confetti from "react-dom-confetti"
import "./CSS/Home.css"
import Plan from "./Plan"
function Home() {
    const [showMessage, setShowMessage] = useState(true)

    function handleClick() {
        setShowMessage(!showMessage)
        // const config = {
        //     angle: "275",
        //     spread: 360,
        //     startVelocity: "35",
        //     elementCount: "155",
        //     dragFriction: "0.17",
        //     duration: "3240",
        //     stagger: "13",
        //     width: "3px",
        //     height: "25px",
        //     perspective: "500px",
        //     colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        // };
        // { showMessage === false && <Confetti config={config} /> }

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
        {!showMessage && <div>
            <Plan />
        </div>}
    </>
    )
}

export default Home
