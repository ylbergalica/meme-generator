import logo from "../images/troll_face.png";

export default function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<img src={logo} className="header-img"/>
				<h1 className="header-title">Meme Generator</h1>
			</div>

			<p className="header-description">React Course - Project 3</p>
		</div>
	)
}