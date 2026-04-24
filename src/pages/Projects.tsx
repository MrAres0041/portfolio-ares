import { NavBar } from "../components/NavBar"
import { ProjectPreview } from "../components/ProjectPreview"
import { StyledFrame } from "../components/StyledFrame"
import { projects } from "../data/Projects"


export const Projects: React.FC = () => {
    return (
        <div className="bg-radial from-orange-100 to-orange-400/50 flex flex-col items-center min-h-screen w-full px-36 py-6 font-serif">
            <NavBar />
            <div className="py-6">
                <StyledFrame>
                    <div className="flex flex-col items-center text-4xl px-3">
                        <span>
                            My Projects
                        </span>
                    </div>
                </StyledFrame>
            </div>

            <div className="grid grid-cols-4 gap-6 py-6">
                {projects.map((project) => (
                    <ProjectPreview key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}