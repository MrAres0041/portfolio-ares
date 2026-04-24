import { IoLogoReact } from "react-icons/io5";
import { StyledButton } from "./StyledButton";

export function NavBar() {
    return (
        // En tu NavBar
        <div className="h-fit w-full py-3 bg-frame rounded-sm flex items-center justify-between">
            <div className="px-5">
                <IoLogoReact color="white" size={42} />
            </div>
            <div className="flex items-center justify-center gap-24">
                <StyledButton children="About me" dir="/" />
                <StyledButton children="Projects" dir="/projects" />
                <StyledButton children="Services" dir="/about" />
                <StyledButton children="Contact me" dir="/about" />
            </div>
            <div className="px-5">
                <IoLogoReact color="white" size={42} />
            </div>
        </div>
    )
}