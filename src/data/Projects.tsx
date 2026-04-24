import fotoCuidadores from "../assets/Foto.png";

export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    tech: string[];
    image: string;
    demo?: string;
    github?: string;
    figma?: string;
    features: string[];
    role: string;
}

export const projects: Project[] = [
    {
        id: "cuidadores",
        title: "Cuidadores Manager",
        description: "A web application to manage activities related to gerontology.",
        shortDescription: "A web application to manage activities related to gerontology.",
        tech: ["React", "JavaScript", "REST API", "CSS"],
        image: fotoCuidadores,
        demo: "",
        github: "",
        figma: "",
        features: [
            "Create and edit records",
            "Data management",
            "User-friendly interface"
        ],
        role: "Developed frontend, UI components, and API integration."
    },


];
