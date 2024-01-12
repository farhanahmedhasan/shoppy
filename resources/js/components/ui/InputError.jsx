import React from "react";

export default function InputError({ errorMessage }) {
    return <span className="text-xs text-red-400">{errorMessage}</span>;
}
