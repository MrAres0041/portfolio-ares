import { useNavigate } from "react-router";

export function StyledButton({ children, dir }: any) {
    const navigate = useNavigate();
    return (
        <button className="relative group text-3xl font-medium text-white cursor-pointer" onClick={() => navigate(dir)}>
            {children}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </button>
    )
}