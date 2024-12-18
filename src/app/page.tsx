import Header from "../components/Header";
import PersonalProjects from "../components/PersonalProjects";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <PersonalProjects />
      <main className="flex-grow">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
