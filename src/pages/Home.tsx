import { NavBar } from "../components/NavBar"
import { StyledFrame } from "../components/StyledFrame"
import photo from "/src/assets/Foto.png"
import { StyledPanel } from "../components/StyledPanel"
import { dev, goals, profile } from "../data/Glossaries"
import { FaCss3Alt, FaDev, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa"
import { StyledIcon } from "../components/StyledIcon"

export const Home: React.FC = () => {

    return (
        /* Cambiamos h-screen por min-h-screen */
        <div className="bg-zinc-800 flex flex-col items-center min-h-screen w-full px-36 py-6 font-serif">
            <NavBar />
            {/* Primera Parte */}
            <div className="flex flex-col items-center pt-6 text-xl gap-6">
                <StyledFrame>
                    <div className="flex flex-col items-center gap-1 text-4xl px-3">
                        <div className="flex gap-4 items-center">
                            <FaDev color="white" size={48} />
                            <span>
                                Josué Daniel Tecce
                            </span>
                        </div>
                    </div>
                </StyledFrame>
                <div className="bg-frame p-4 rounded-xl text-white relative">
                    <img className="rounded-xl" src={photo} width={324} height={324} />
                </div>

                {/* Segunda Parte */}

                <StyledFrame>
                    <div className="flex gap-6 px-4 py-1">
                        <StyledIcon>
                            <FaReact size={42} />
                        </StyledIcon>
                        <StyledIcon>
                            <FaHtml5 size={42} />
                        </StyledIcon>
                        <StyledIcon>
                            <FaPython size={42} />
                        </StyledIcon>
                        <StyledIcon>
                            <FaCss3Alt size={42} />
                        </StyledIcon>
                        <StyledIcon>
                            <FaJs size={42} />
                        </StyledIcon>

                    </div>
                </StyledFrame>

                <div className="flex gap-8">
                    <StyledPanel title="FrontEnd Developer:" par={dev()} />
                    <StyledPanel title="Professional Goals:" par={goals()} />
                    <StyledPanel title="Profile:" par={profile()} />
                </div>
            </div>
        </div>
    )

}