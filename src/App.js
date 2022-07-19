import ProjectCard from "./components/ProjectCard";
import PROJECTS from "./constants/projects";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mx-20 p-8 sm:grid-cols-2 lg:grid-cols-3 ">
      {PROJECTS.map((project, index) => {
        return <ProjectCard key={index} item={project} />;
      })}
    </div>
  );
};

export default App;
