export default function Meme() {
	function getMemeImage() {
		console.log("Clicked");
	}

	return (
		<div className="meme">
			<div className="meme-form">
				<div className="meme-input">
					<input id="meme-toptext" placeholder="Top Text"></input>
					<input id="meme-bottext" placeholder="Bottom Text"></input>
				</div>
				<input type="submit" className="meme-submit" onClick={getMemeImage} value="Get a new meme image"></input>
			</div>
		</div>
	)
}