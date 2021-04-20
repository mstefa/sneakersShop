import React from "react";
import { StyledLoader } from "./StyledLoader";

export default function Loader() {
	return (
		<StyledLoader>
			<div className="outerCircle">
				<div className="innerCircle">
					<div></div>
					<div></div>
				</div>
			</div>
		</StyledLoader>
	);
}
