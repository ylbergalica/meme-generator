export default function Meme() {
	return (
		<div className="meme">
			<form className="meme-form">
				<div className="meme-input">
					<input id="meme-toptext" placeholder="Top Text"></input>
					<input id="meme-bottext" placeholder="Bottom Text"></input>
				</div>
				<input type="submit" className="meme-submit" value="Get a new meme image"></input>
			</form>
		</div>
	)
}