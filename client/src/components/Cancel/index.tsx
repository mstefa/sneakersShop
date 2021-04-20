import React from 'react'
import { StyledCancel } from './StyledCancel'
import X from "../../icons/cancel.png"
export default function Cancel() {
  return (
    <StyledCancel>
      Something seems to be wrong. Please try again.
      If you experience further issues, please contact:
      <a href="mailto:ft09ec@gmail.com">ft09ec@gmail.com</a>.
      <img src={X} alt="F"/>
    </StyledCancel>
  )
}
