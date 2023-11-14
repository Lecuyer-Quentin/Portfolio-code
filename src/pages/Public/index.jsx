import Hero from "../../components/Hero"
import Contact from "../../components/Contact"
import { motion, useScroll } from "framer-motion"
import LastProjects from "../../components/LastProjects"
import Tech from "../../components/Tech"
import About from "../../components/About"


const Public = () => {
  const { scrollYProgress } = useScroll()
  const renderScroll = () => {
    return (
      <motion.div className="progress-bar"
        style={{ scaleX: scrollYProgress }} />
    )
  }

  return (
    <>
      {renderScroll()}
      <Hero />
      <LastProjects />
      <About />
      <Tech />
      <Contact />
    </>
  )
}

export default Public