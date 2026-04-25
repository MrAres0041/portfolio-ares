import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StyledIcon } from "./StyledIcon"; // Importamos tu componente de iconos
import { footer } from "../data/Glossaries";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mt-auto py-10 flex flex-col items-center gap-6 border-t border-white/10">
            {/* Redes Sociales */}
            <div className="flex gap-8">
                <StyledIcon>
                    <a href="https://github.com/MrAres0041" target="_blank" rel="noreferrer">
                        <FaGithub color="white" size={28} />
                    </a>
                </StyledIcon>
                <StyledIcon>
                    <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer">
                        <FaLinkedin color="white" size={28} />
                    </a>
                </StyledIcon>
            </div>

            {/* Copyright / Info */}
            <div className="text-zinc-400 text-sm font-light tracking-widest uppercase">
                © {currentYear} — {footer()}
            </div>
        </footer>
    );
}