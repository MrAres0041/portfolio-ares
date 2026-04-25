import { FaDev, FaHome, FaLanguage } from "react-icons/fa";
import { StyledButton } from "./StyledButton";
import { GoCodeReview } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { StyledIcon } from "./StyledIcon";

export function NavBar() {

    function aboutMe() {
        return (
            <div className="flex items-center gap-2">
                <FaDev size={36} />
                <span>
                    About me
                </span>
            </div>
        )
    }

    function projects() {
        return (
            <div className="flex items-center gap-2">
                <GoCodeReview size={36} />
                <span>
                    Projects
                </span>
            </div>
        )
    }
    function contactMe() {
        return (
            <div className="flex items-center gap-2">
                <MdOutlineAlternateEmail size={36} />
                <span>
                    Contact me
                </span>
            </div>
        )
    }

    return (
        // En tu NavBar
        <div className="h-fit w-full py-3 px-16 bg-frame rounded-sm flex items-center justify-between">
            <StyledIcon>
                <FaHome color="white" size={36} />
            </StyledIcon>
            <div className="flex items-center justify-center gap-24">
                <StyledButton children={aboutMe()} dir="/" />
                <StyledButton children={projects()} dir="/projects" />
                <StyledButton children={contactMe()} dir="/about" />
            </div>
            <StyledIcon>
                <FaLanguage color="white" size={36} />
            </StyledIcon>
        </div>
    )
}