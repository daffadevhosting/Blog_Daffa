import react from 'react'
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";


const Footer = () => (
<footer className="footer">
	<div className="leftSection">
	<span className="copyright">Copyright ©️ 2023</span>
	</div>
	<div className="rightSection">
		<ul className="flex_ul">
			<li>
				<Link to="https://github.com/daffadevhosting" target="_blank">
					<span><GoMarkGithub/> Github</span>
				</Link>
			</li>
		</ul>
	</div>
</footer>

);

export default Footer;
