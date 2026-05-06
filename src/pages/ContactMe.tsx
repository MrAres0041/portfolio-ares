import { FaDev } from "react-icons/fa"
import { StyledFrame } from "../components/StyledFrame"
import { useLanguage } from "../contexts/LanguageContext";

export const ContactMe: React.FC = () => {

    const { language } = useLanguage();

    return (
        <div className="flex flex-col gap-8 items-center">

            <StyledFrame>
                <div className="flex flex-col items-center text-4xl px-3">
                    <div className="flex gap-4 items-center">
                        <FaDev color="white" size={48} />
                        <span>
                            {language === 'es' ? "Contact me" : "Contáctame"}
                        </span>
                    </div>
                </div>
            </StyledFrame>

        </div>
    )
}
