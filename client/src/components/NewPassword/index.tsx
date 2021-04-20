import React, { useState } from "react";
import { StyledNewPassword } from "./StyledNewPassword";
import { useHistory } from "react-router-dom";
import { UPDATE_PASSWORD } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { check, validateChange } from "../../helpers/validationResetPwd";


export default function NewPassword({match}) {

  const history = useHistory();
  const token = match.params.token;

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  const [form, setForm] = useState({
    password: "",
    error: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { password } = form;
    try{
      await updatePassword({variables:{password, token}})
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password modified",
          text: "Your password has been changed successfully.",
          showConfirmButton: false,
          timer: 4000,
        });
        history.push("/login")})
    }
    catch (err) {
      console.log(err);
      return;
    }
  }

  const handleChange = (e: any) => {
    const error = check(e, form);
    setForm(validateChange(e, form, error));
  };

  return (
    <StyledNewPassword>
      <form onSubmit={handleSubmit}>
        <input
          className="login"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your new password..."
          value={form.password}
        />
        <span className="span_password"></span>
        <input className="boton" type="submit" value="Modify Password" disabled={form.error}/>
      </form>
    </StyledNewPassword>
  );
}
