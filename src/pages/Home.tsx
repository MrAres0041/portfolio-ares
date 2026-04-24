import { SiFrontendmentor } from "react-icons/si"
import { NavBar } from "../components/NavBar"
import { StyledFrame } from "../components/StyledFrame"
import photo from "/src/assets/Foto.png"
import { StyledPanel } from "../components/StyledPanel"
import { dev, goals, profile } from "../data/Glossaries"

export const Home: React.FC = () => {

    return (
        /* Cambiamos h-screen por min-h-screen */
        <div className="bg-radial from-orange-100 to-orange-400/50 flex flex-col items-center min-h-screen w-full px-36 py-6 font-serif">
            <NavBar />
            {/* Primera Parte */}
            <div className="flex flex-col items-center pt-6 text-xl gap-6">
                <StyledFrame>
                    <div className="flex flex-col items-center gap-1 text-4xl px-3">
                        <div className="flex gap-4">
                            <span>
                                Josué Daniel Tecce
                            </span>
                            <SiFrontendmentor />
                        </div>
                    </div>
                </StyledFrame>
                <div className="bg-frame p-4 rounded-full text-white">
                    <img src={photo} width={324} height={324} />
                </div>
                {/* Segunda Parte */}
                <div className="flex gap-8">
                    <StyledPanel title="FrontEnd Developer:" par={dev()} />
                    <StyledPanel title="Professional Goals:" par={goals()} />
                    <StyledPanel title="Profile:" par={profile()} />
                </div>
            </div>
        </div>
    )

}