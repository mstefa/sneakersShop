import styled from 'styled-components';
import {  violeta, negro, blanco } from "../../containers/App/GlobalStyles";
export const StyledAboutUs = styled.div`
   
	h2 {
		text-align: center;
		margin-bottom: 2rem;
		text-transform: uppercase;
		font-size: 2em;
	}
    
    P{
        font-weight: 600;
		text-align: center;
    }

    h3 {
		margin-bottom: 1em;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
	}
	.mainText{
    background-color: ${violeta};
    color:${blanco};
    padding: 2rem;

    p{
      margin: auto;
      max-width: 40rem;
    }
  }
	.about_coders_container {
		display: flex;
		justify-content: space-around;
		align-items: center;;
        flex-wrap: wrap;
        margin: 3rem 3rem 0 3rem;
		.about_coder{
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
            margin: 2.5rem;
			h4{
				margin-bottom: 1em;
			}
			img {
				margin-bottom: 1em;
				width: 9em;
				height: 9em;
				border-radius: 99em;
				object-fit: cover;
				border: 3px solid ${violeta};
				transition: filter .2s ease-in-out;
			}
			.about_social{
				display: flex;
				align-items: center;
				justify-content: space-evenly;
                margin-top:0.2rem;
				a:first-child{
					margin-right:1vw;
				}
				i {
					text-decoration: none;
					font-size: 2em;
					color:${negro};
					transition: color .2s ease-in-out;
                    margin:0 ;
					&:hover {
						color: ${violeta};
					}
				}
			}
		}
	}

  footer{
    background-color: ${violeta};
    width: 100%;
    height: 4rem;
    margin: 0;
    color:${blanco};
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      text-decoration: none;
      color:${blanco};
    }
  }
	@media (max-width: 900px) {
		.about_coders_container {
			flex-direction: column;
			margin: 1em 0;
			.about_coder {
				margin: 2em 0;
				h4 {
					font-size: 1.5em;
				}
				img {
					width: 14em;
					height: 14em;
				
				}
				.about_social{ 
					i {
						font-size: 3em;
					}	
				}
			}
		}
	}
`