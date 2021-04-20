import styled from "styled-components"
import {violeta} from "../../containers/App/GlobalStyles"
export const StyledNoResults = styled.div`
display:flex;
width:50%;
align-items:center;
margin: 2rem 25% auto 25%;
div{
    display:flex;
    flex-direction:column;
    ul{
        width:50%;
        li{
            margin:0.3rem;
            font-weight:500;
            .catalogo{
                color:${violeta};
            }
        }
        
    }
}
img{
    width:25%
}
@media (max-width: 900px) {
    div{
    display:flex;
    flex-direction:column;
        ul{
            li{

            display:none;
            }
        
        }
    }
}
`