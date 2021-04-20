import styled from "styled-components";

export const StyledLoader = styled.div`
	width: 100vw;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@keyframes loading {
		0% {
			top: 97.05999999999999px;
			left: 97.05999999999999px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 16.88px;
			left: 16.88px;
			width: 160.35999999999999px;
			height: 160.35999999999999px;
			opacity: 0;
		}
	}
	.innerCircle div {
		position: absolute;
		border-width: 8.44px;
		border-style: solid;
		opacity: 1;
		border-radius: 50%;
		animation: loading 1.4285714285714284s
			cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.innerCircle div:nth-child(1) {
		border-color: #6930c3;
		animation-delay: 0s;
	}
	.innerCircle div:nth-child(2) {
		border-color: #64dfdf;
		animation-delay: -0.7142857142857142s;
	}
	.outerCircle {
		width: 211px;
		height: 211px;
		display: inline-block;
		overflow: hidden;
		/* background: #ffffff; */
	}
	.innerCircle {
		width: 100%;
		height: 100%;
		position: relative;
		transform: translateZ(0) scale(1);
		backface-visibility: hidden;
		transform-origin: 0 0;
	}
	.innerCircle div {
		box-sizing: content-box;
	}
`;
