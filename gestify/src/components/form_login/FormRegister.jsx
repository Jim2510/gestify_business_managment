import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";

const payload = {
    token: "abc123",
    user: {
        id: 1,
        firsName: "Gianmarco",
        email: "prova123@gmail.com",
    },
};

export function FormRegister({ handleHidden }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
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
            navigate("/dashboard/tables");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col ">
            <form className="flex flex-col p-[30px] relative" onSubmit={handleSubmit}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill absolute top-[43px] left-[35px] fill-[#1E293B]"
                    viewBox="0 0 16 16"
                >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-lock-fill absolute top-[103px] left-[35px] fill-[#1E293B]"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>
                <input
                    className="border-2 border-white mb-[15px] h-[2.5rem] rounded-3xl p-[20px]"
                    type="email"
                    name="email"
                    placeholder="email"
                    onInput={handleInput}
                    value={form.email}
                />
                <input
                    className="border-2 border-white mb-[15px] h-[2.5rem] rounded-3xl p-[20px]"
                    type="password"
                    name="password"
                    placeholder="password"
                    onInput={handleInput}
                    value={form.password}
                />

                <div className="flex">
                    <button
                        className="bg-[#00FAA8] h-[2.5rem] rounded-3xl w-[50%] text-[#1E293B]"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <button className="text-white ml-[50px]" onClick={handleHidden} type="button">Log in</button>
                </div>
            </form>
        </div>
    );
}
