import { GoCodeReview } from "react-icons/go"
import { ProjectPreview } from "../components/ProjectPreview"
import { StyledFrame } from "../components/StyledFrame"
import { projects } from "../data/Projects"
import { useLanguage } from "../contexts/LanguageContext"


export const Projects: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col gap-8 items-center">
            <StyledFrame>
                <div className="flex gap-4 items-center text-4xl">
                    <GoCodeReview color="white" size={48} />
                    <span>
                        {language === 'es' ? "My Projects" : "Mis Proyectos"}
                    </span>
                </div>
            </StyledFrame>

            <div className="grid grid-cols-4 gap-6 py-6">
                {projects.map((project) => (
                    <ProjectPreview key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}