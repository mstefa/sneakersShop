import React from "react"
import { Link } from "react-router-dom"
import NO from "./img/NO.png"
import { StyledNoResults } from "./StyledNoResults"

export default function NoSearchResults(){
    return (
        <StyledNoResults>
            <div>
                <h3>There are no products that match your search...</h3>
                <ul>
                    <li>Check your spelling.</li>
                    <li>Use more generic or fewer words.</li>
                    <li>Browse the <Link className = "catalogo" to = "/"> catalogue </Link> to find another product.</li>
                </ul>
            </div>
            <img alt="no results" src={NO}/>
        </StyledNoResults>
    )
}