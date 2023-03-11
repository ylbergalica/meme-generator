import {useState} from "react";
import memeData from "../memeData";

export default function Meme() {
	const [allMemeImages, setAllMemeImages] = useState(memeData);

	const [meme, setMeme] = useState({
		topText: "",
		botText: "",
		randomImg: "https://i.imgflip.com/1bij.jpg"
	});

	const memes = allMemeImages.memes;

	function getMemeImage() {
		let randomNumber = Math.floor(Math.random() * memes.length);
		// url = memes[randomNumber].url;
		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: memes[randomNumber].url
		}));
		// console.log(randomNumber);
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

			<img src={meme.randomImg} className="meme-img"></img>
		</div>
	)
}