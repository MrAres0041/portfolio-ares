import { useParams } from 'react-router';
import { projects } from '../data/Projects';
import { NavBar } from '../components/NavBar';
import { StyledFrame } from '../components/StyledFrame';
import { StyledBody } from '../components/StyledBody';

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>();

    // Buscamos el proyecto que coincida con el ID de la URL
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <div>Proyecto no encontrado :</div>;
    }
    return (
        <StyledBody>
            <NavBar />
            <div className="flex flex-col items-center pt-6 text-xl gap-6">

                {/* Primer bloque */}

                <StyledFrame>
                    <div className="text-4xl px-3">
                        <span>
                            {project.title}
                        </span>
                    </div>
                </StyledFrame>
                <StyledFrame>
                    <img width={500} src={project.image} />
                </StyledFrame>

                {/* Segundo bloque */}

                <div className="flex gap-3">
                    <StyledFrame>
                        <div className="flex flex-col items-center text-2xl gap-2 max-w-150">
                            <span className="text-3xl">
                                Role:
                            </span>
                            <span>
                                {project.role}
                            </span>
                        </div>
                    </StyledFrame>
                    <StyledFrame>
                        <div className="flex flex-col items-center text-2xl gap-2 max-w-150">
                            <span className="text-3xl">
                                Technologies:
                            </span>
                            <span className="underline text-2xl gap-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="mr-2">{t}</span>
                                ))}
                            </span>
                        </div>
                    </StyledFrame>
                </div>

                {/* Tercer bloque */}

                <StyledFrame>
                    <div className="flex flex-col items-center text-2xl gap-2 max-w-150">
                        <span className="text-3xl">
                            Description:
                        </span>
                        <span className='text-2xl'>
                            {project.description}
                        </span>
                    </div>
                </StyledFrame>
                <StyledFrame>
                    <div>
                        <span className="text-3xl">
                            Features:
                        </span>
                    </div>
                </StyledFrame>
            </div>
        </StyledBody>
    );
}