import About from "../Components/About"
import Contact from "../Components/Contact"
import Education from "../Components/Education"
import Introduction from "../Components/Introduction"
import Latestprojects from "../Components/Latestprojects"
import Skills from "../Components/Skills"
import Sociallinks from "../Components/Sociallinks"
import Workexperience from "../Components/Workexperience"

const RootLayout = () => {
  return (
    <>
    <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-10 sm:py-24 px-6">
    <Introduction/>
    <About/>
    <Workexperience/>
    <Education/>
    <Skills/>
    <Latestprojects/>
    <Contact/>
    <Sociallinks/>
    </div>
    </>
  )
}

export default RootLayout
