import Container from "./hocs";
import Greetings from "./Components/Greetings";
import Navbar from "./Components/Navbar";
import RecentProjects from "./Components/RecentProjects";
import RecentPosts from "./Components/RecentPosts";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Greetings/>
      <RecentProjects/>
      <RecentPosts/>
      <Footer/>
    </div>
  );
}

export default App;
