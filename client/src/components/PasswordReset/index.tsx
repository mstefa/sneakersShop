import React, { useState } from "react";
import { StyledPasswordReset } from "./StyledPasswordReset";
import { PASSWORD_RESET } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";


export default function PasswordReset() {

  const [resetPassword] = useMutation(PASSWORD_RESET);

  const [form, setForm] = useState({
    email: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { email } = form;
    try{
      await resetPassword({variables:{email}});
      Swal.fire({
        icon: "success",
        title: "Check your email",
        text: "We sent you an email to your registered address to change your password",
        showConfirmButton: false,
        timer: 5000,
      });
    }
    catch (err) {
      console.log(err);
      return;
    }
  }

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledPasswordReset>
      <form onSubmit={handleSubmit}>
        <input
          className="login"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email address..."
        />
        <input className="boton" type="submit" value="Reset Password" />
      </form>
    </StyledPasswordReset>
  );
}
