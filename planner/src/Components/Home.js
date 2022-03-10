import { useState } from "react"
import "./CSS/Home.css"
import { Redirect } from "react-router-dom"
import { GiHalfHeart } from "react-icons/gi"

function Home() {
	const [showMessage, setShowMessage] = useState(true)
	// let history = useHistory();
	function handleClick() {
		setShowMessage(!showMessage)
	}

	if (!showMessage) {
		return <Redirect to="/tasks" />
	}
	return (
		<>
			{showMessage && (
				<div className="overlay">
					<h1 className="center">Welcome to Plan Your Magic</h1>
					<br></br>
					<div
						id="message"
						className="center"
						style={{ textAlign: "center", background: "white" }}
					>
						<p>
							Purpose of this website is creating a space that would have
							everything that one needs to stay organized and updated every
							morning or anytime of the day, Here you can plan your day as well
							as stay updated with the world by looking at the daily updated
							news. You get to decide what you have in mind. Go ahead and
							explore different and fun things in this site, it's unlike any
							planner you probably would come across.
						</p>
						<button className="center" onClick={() => handleClick()}>
							Thank You! Take me to the planning <GiHalfHeart />
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Home
