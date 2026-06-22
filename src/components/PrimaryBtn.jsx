import { Link } from "react-router-dom";

export default function Button({
    text,
    to,
    onClick,
    type = "button",
    className = "",
}) {
    const baseClass = `px-6 py-2 rounded-full cursor-pointer
    bg-(--primary-color) text-white 
    hover:bg-(--secondary-color) hover:text-white
    transition-all duration-300 ${className}`;

    if (to) {
        return (
            <Link to={to} className={`${baseClass} block`}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClass}
        >
            {text}
        </button>
    );
}