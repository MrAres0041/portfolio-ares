import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { StyledBody } from "../components/StyledBody"
import { TechMarquee } from "../components/StyledSeparator"
import { AboutMe } from "./AboutMe"
import { ContactMe } from "./ContactMe"
import { Projects } from "./Projects"

export const Home: React.FC = () => {
    return (
        <StyledBody>
            <NavBar />
            <AboutMe />

            <TechMarquee />

            <Projects />

            <TechMarquee />

            <ContactMe />
            <Footer />


        </StyledBody>
    )
}