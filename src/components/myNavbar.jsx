import React from 'react'
import { Link } from 'react-router-dom'
import { FcPrevious } from "react-icons/fc";

function MyNavbar({renderDefault}) {
	return (
		<div className="myNavbar">
			<Link className="btnLink" to="/"><FcPrevious size={20}/> Go Back </Link>
		</div>
		);
}

export default MyNavbar