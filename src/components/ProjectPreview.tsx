import { useNavigate } from "react-router";
import { StyledFrame } from "./StyledFrame";
import type { Project } from "../data/Projects";

export function ProjectPreview({ project }: { project: Project }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/projects/${project.id}`)}>
            <StyledFrame>
                <div className="grid grid-cols-1 place-items-center gap-3">
                    <span className="text-2xl">{project.title}</span>
                    <img height="300" width="300" src={project.image} />
                    <span className="text-xl">{project.shortDescription}</span>
                    <div>
                        {project.tech.map((t) => (
                            <span key={t} className="pr-2">{t}</span>
                        ))}
                    </div>
                </div>
            </StyledFrame>
        </button>
    )
}