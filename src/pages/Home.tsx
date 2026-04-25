import { NavBar } from "../components/NavBar"
import { StyledFrame } from "../components/StyledFrame"
import photo from "/src/assets/Foto.png"
import { StyledPanel } from "../components/StyledPanel"
import { dev, goals, profile } from "../data/Glossaries"
import { FaCss3Alt, FaDev, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa"
import { StyledIcon } from "../components/StyledIcon"
import { LuCodeXml } from "react-icons/lu"
import { StyledBody } from "../components/StyledBody"
import { Footer } from "../components/Footer"

export const Home: React.FC = () => {

    return (
        /* Cambiamos h-screen por min-h-screen */
        <StyledBody>
            <NavBar />
            {/* Primera Parte */}
            <StyledFrame>
                <div className="flex flex-col items-center text-4xl px-3">
                    <div className="flex gap-4 items-center">
                        <FaDev color="white" size={48} />
                        <span>
                            Josué Daniel Tecce
                        </span>
                    </div>
                </div>
            </StyledFrame>

            {/* Segunda Parte */}
            <div className="flex items-center gap-4">
                <div className="bg-frame p-4 rounded-sm text-white relative">
                    <img className="rounded-sm" src={photo} width={272} height={272} />
                    <div className="absolute -bottom-4 -right-4 bg-frame px-3 py-1 rounded-sm">
                        <LuCodeXml size={44} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">

                    <StyledFrame>
                        <div className="text-2xl max-w-100">
                            {dev()}
                        </div>
                    </StyledFrame>

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

                </div>

            </div>

            <div className="flex gap-16">
                <StyledPanel title="Professional Goals:" par={goals()} />
                <StyledPanel title="Profile:" par={profile()} />
            </div>
            <Footer />
        </StyledBody>
    )

}