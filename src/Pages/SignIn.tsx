import { useState } from "react";
import { SIGNUP_INPUTS_IF, SIGNIN_INPUTS_IF, SIGNIN_VALUES_IF } from "../Types";

export const SIGN_IN = () => {
  const [values, setValues] = useState<SIGNIN_VALUES_IF>({
    email: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: ""
  });

  const signup_inputs: SIGNUP_INPUTS_IF[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email@email.com"
    },
    {
      id: 2,
      name: "phone_number",
      type: "tel",
      placeholder: "+263 77 878 923"
    },
    {
      id: 3,
      name: "first_name",
      type: "text",
      placeholder: "first name"
    },
    {
      id: 4,
      name: "last_name",
      type: "text",
      placeholder: "last name"
    }
  ];

  const signin_inputs: SIGNIN_INPUTS_IF[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email"
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password"
    }
  ];

  return (
    <div className="sign_in_container">
      <form action="" className="sign_in_form_wrapper">
        <main className="main_sign_in">
          {signin_inputs.map((input) => (
            <input
              key={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
        </main>
      </form>
    </div>
  );
};
