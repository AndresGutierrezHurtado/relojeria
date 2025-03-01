import React from "react";

export default function Button({ children, variant = "primary", rounded = "default", className }) {
    const variants = {
        default: "btn",
        primary: "btn bg-yellow-500 border-0 hover:bg-yellow-600 text-black",
        outline: "btn btn-outline hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500",
        success: "btn btn-success border-0 bg-green-500 hover:bg-green-600 text-white",
    };

    const roundedVariants = {
        default: "rounded-lg",
        square: "rounded-none",
        circle: "rounded-full",
    };

    const buttonClass = variants[variant] + " " + roundedVariants[rounded] + " " + className;
    return <button className={buttonClass}>{children}</button>;
}
