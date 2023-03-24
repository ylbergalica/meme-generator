import {useEffect, useState} from "react";
// import memeData from "../memeData";

export default function Meme() {
	const [allMemes, setAllMemes] = useState({});

	const [meme, setMeme] = useState({
		topText: "",
		botText: "",
		randomImg: "http://i.imgflip.com/1bij.jpg"
	});

	function getMemeImage() {
		let randomNumber = Math.floor(Math.random() * allMemes.length);
		// url = memes[randomNumber].url;
		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: allMemes[randomNumber].url
		}));
		// console.log(randomNumber);
	}

	function handleChange(event) {
		let {name, value} = event.target;

		setMeme(prevMeme => {
			return {
				...prevMeme,
				[name]: value
			}
		})
	}

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(data => data.json())
			.then(res => setAllMemes(res.data.memes))
	}, [])

	return (
		<div className="meme">
			<div className="meme-form">
				<form className="meme-input">
					<input type="text" id="meme-toptext" name="topText" placeholder="Top Text" value={meme.topText} onChange={handleChange}/>
					<input type="text" id="meme-bottext" name="botText" placeholder="Bottom Text" value={meme.botText} onChange={handleChange}/>
				</form>
				<input type="submit" className="meme-submit" onClick={getMemeImage} value="Get a new meme image"></input>
			</div>

			<div className="meme-product">
				<img src={meme.randomImg} className="meme-img" />
				<h2 className="img-toptext">{meme.topText}</h2>
				<h2 className="img-bottext">{meme.botText}</h2>
			</div>
		</div>
	)
}