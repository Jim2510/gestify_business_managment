import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";

const payload = {
  token: "abc123",
  user: {
    id: 1,
    username: "GabUserName",
    email: "prova123@gmail.com",
  },
};

export function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // login request here
      dispatch(login(payload));
      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  };
  const inputStyle = {
    input: {
      borderWidth: '0px',
      outline: '0',
      WebkitAppearance: 'none',
      boxShadow: 'none',
      MozBoxShadow: 'none',
      WebkitBoxShadow: 'none',
    },
    inputFocus: {
      outline: '0',
    }
  }
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <form className="flex flex-col p-[30px] relative justify-center items-center" onSubmit={handleSubmit}>
        <div className="text-[#1E293B] text-[35px] font-semibold">Log in</div>
        <div className="bg-[#E9EFFF] w-[300px] h-[50px] rounded-3xl shadow-lg mt-[25px] ml-[15px] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="fill-[#1E293B]" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <input style={inputStyle.input} className="w-[70%] h-[60%] bg-transparent border-none" onInput={handleInput} name="username" type="text" placeholder="Username" />
        </div>
        <div className="bg-[#E9EFFF] w-[300px] h-[50px] rounded-3xl shadow-lg mt-[25px] ml-[15px] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="fill-[#1E293B]" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
          </svg>
          <input style={inputStyle.input} className="w-[70%] h-[60%] bg-transparent border-none" onInput={handleInput}
            value={form.email} type="email" name="email" placeholder="Email" />
        </div>
        <div className="bg-[#E9EFFF] w-[300px] h-[50px] rounded-3xl shadow-lg mt-[25px] ml-[15px] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="fill-[#1E293B]" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
          </svg>
          <input style={inputStyle.input} className="w-[70%] h-[60%] bg-transparent border-none" onInput={handleInput}
            value={form.password} type="password" name="password" placeholder="Password" />
        </div>
        <button
          className="bg-[#02f9ae] h-[3rem] mt-[25px] rounded-3xl w-[40%] text-[#1E293B] font-semibold "
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}