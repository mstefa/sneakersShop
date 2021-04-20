export interface form {
  country: string;
  city: string;
  street: string;
  addressnumber: number;
  error: boolean;
}

export function validateChange(e: any, form: form, error: boolean) {
  switch (e.target.name) {
    default:
      return { ...form, [e.target.name]: e.target.value, error };
  }
}
function validateLocation(country: string) {
  const val = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/;
  return val.test(country);
}

export const checkLocation = (e: any, form: form) => {
  const span = document.querySelector(".span_" + e.target.name);

  if (!e.target.value) {
    if (span) span.innerHTML = "All fields are required";
    return true;
  } else if (span.className === "span_country") {
    if (!validateLocation(e.target.value)) {
      span.innerHTML =
        "The name of the country must begin with a capital letter";
    } else {
      span.innerHTML = "";
    }
  } else if (span.className === "span_addressnumber") {
    if (!parseInt(e.target.value)) {
      span.innerHTML = "it must be a number";
    } else {
      span.innerHTML = "";
    }
  } else {
    if (span) span.innerHTML = "";
    for (const prop in form) {
      if (
        (Array.isArray(form[prop]) || typeof form[prop] === "string") &&
        !form[prop].length
      )
        return true;
      if (typeof form[prop] === "number" && !form[prop]) return true;
    }
    return false;
  }
};
