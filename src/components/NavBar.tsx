import { FaDev, FaHome, FaLanguage } from "react-icons/fa";
import { StyledButton } from "./StyledButton";
import { GoCodeReview } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { StyledIcon } from "./StyledIcon";
import { useLanguage } from "../contexts/LanguageContext";

export function NavBar() {
    const { language, toggleLanguage } = useLanguage();

    function LanguageBtn() {

        return (
            <StyledIcon>
                <button
                    onClick={toggleLanguage}
                    className="bg-frame px-3 py-1 rounded text-xs uppercase"
                >
                    <div className="flex items-center gap-2 text-white text-xl">
                        <FaLanguage color="white" size={36} />
                        {language === 'es' ? "EN" : "ES"}
                    </div>
                </button>
            </StyledIcon>
        );
    }

    function aboutMe() {
        return (
            <div className="flex items-center gap-2">
                <FaDev size={36} />
                <span>
                    {language === "es" ? "About me" : "Sobre mí"}
                </span>
            </div>
        )
    }

    function projects() {
        return (
            <div className="flex items-center gap-2">
                <GoCodeReview size={36} />
                <span>
                    {language === "es" ? "Projects" : "Proyectos"}
                </span>
            </div>
        )
    }
    function contactMe() {
        return (
            <div className="flex items-center gap-2">
                <MdOutlineAlternateEmail size={36} />
                <span>
                    {language === "es" ? "Contact me" : "Contáctame"}
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
            <LanguageBtn />
        </div>
    )
}

