import AboutMe from "../../Components/AboutMe/AboutMe";
import Contact from "../../Components/Contact/Contact";
import Cover from "../../Components/Cover/Cover";
import Features from "../../Components/Features/Features";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";





const Home = () => {
    return (
        <div>
            <Cover></Cover>
           <Features></Features>
           <Projects></Projects>
           <Skills></Skills>
           <AboutMe></AboutMe>
           <Contact></Contact>
            
        </div>
    );
};

export default Home;