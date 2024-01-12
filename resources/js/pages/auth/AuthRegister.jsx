import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { useForm } from "@inertiajs/react";

export default function AuthRegister() {
    const { data, setData, post } = useForm({
        username: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setData({ ...data, [key]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        post("/register");
    }

    return (
        <AppLayout title="Shoppy - Register">
            <form
                className="p-10 max-w-lg mx-auto space-y-6 bg-gray-50 rounded-md my-10"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="username" className="block text-sm mb-1">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={data.username}
                        onChange={handleChange}
                        placeholder="Enter a unique username"
                        className="w-full py-1 px-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full py-1 px-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        className="w-full py-1 px-2 border rounded"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="py-2 px-8 bg-blue-600 text-white rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </AppLayout>
    );
}
