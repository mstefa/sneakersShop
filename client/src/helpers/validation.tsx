export interface form {
  name: string;
  description: string;
  price: number;
  brandId: string;
  CategoriesId: string[];
  ModelsId: string[];
  error: boolean;
}
export interface formCategory {
  name: string;
}

export function validateChange(e: any, form: form, error: boolean) {
  switch (e.target.name) {
    case "price":
      return { ...form, price: Number(e.target.value), error };

    case "CategoriesId":
    case "ModelsId":
      const values = Array.from(e.target.selectedOptions).map(
        (item: any) => item.value
      );
      const newForm = new Set([...form[e.target.name], ...values]);
      return {
        ...form,
        [e.target.name]: Array.from(newForm),
	error,
      };

    default:
      return { ...form, [e.target.name]: e.target.value, error };
  }
}

export const check = (e: any, form: form) => {
  const span = document.querySelector(".span_" + e.target.name);
  if (!e.target.value) {
    if (span) span.innerHTML = "Todos los campos son obligatorios";
    return true;
  } else {
    if (span) span.innerHTML = "";
    for(const prop in form) {
	if((Array.isArray(form[prop]) || typeof form[prop] === 'string') && !form[prop].length) return true;
        if(typeof form[prop] === 'number' && !form[prop]) return true;
    }
    return false;
  }
};
