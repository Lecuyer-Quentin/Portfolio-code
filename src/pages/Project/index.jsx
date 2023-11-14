import { useParams, Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../app/data/dataContext";
import Slider from "react-slick";
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Collapse from "../../components/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnRight } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const { id } = useParams()
  const projectsHook = useContext(DataContext);
  const { getProject } = projectsHook;
  const [projectData] = useState(getProject(id))
  const { title, description, images = [], technologies = [], tasks = [], link, url } = projectData;

  // For animation on scroll
  const [ref, inView] = useInView(
    {
      threshold: 0.01,
    }
  )
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    window.scrollTo(0, 0)
  }
    , [])

  // For 3D effect on slider
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateXSpring = useSpring(x)
  const rotateYSpring = useSpring(y)
  const rotateX = useTransform(
    rotateYSpring, [-.5, .5], ['17.5deg', '-17.5deg']
  )
  const rotateY = useTransform(
    rotateXSpring, [-.5, .5], ['17.5deg', '-17.5deg']
  )

  const renderImg = () => {
    return images.map((image, id) => {
      const { src, name } = image;
      return (
        <motion.div key={id}>
          <img src={src} alt={name} />
        </motion.div>
      )
    })
  }

  const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  }

  const renderSlider = () => {
    return (
      <Slider {...settings}
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {renderImg()}
      </Slider>
    )
  }

  const renderDescription = () => {
    const descriptionVariants = {
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 1
        }
      },
    }


    return (
      <motion.div
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="project__content__description">{description}</p>
      </motion.div>
     
    )
  }

  const renderTech = () => {
    const techVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1
        }
      },
    }
    return (
      <motion.div
        ref={ref}
        variants={techVariants}
        initial="hidden"
        animate="visible"
      >
          {technologies.map((tech, id) => {
            const { name, image } = tech;
            return (
              <div key={id}>
                <img src={image} alt={name} />
              </div>
            )
          })}
      </motion.div>
    )
  }

  const renderTask = () => {  
    const taskVariants = {
      hidden: {
        opacity: 0,
        y: -100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    }
    return (
      tasks.map((task, index) => {
        const {title, description } = task;
        return (
          <motion.div key={index}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={taskVariants}
          >
            <Collapse title={title} description={description} />
          </motion.div>
        )
      }
      )
    )
  }

  const renderLink = () => {
    const linkVariants = {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    }
    const urlVariants = {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    }
    return (
      <>
        {link &&
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={linkVariants}
          >
            <div className="button">
              <a href={link} target="_blank" rel="noreferrer">
                <p>GitHub</p>
                <span className="hoverBtn"></span>
                <span className="hoverBtn-bottom"></span>
              </a>
            </div>
          </motion.div>
        }
        {url &&
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={urlVariants}
          >
            <div className="button">
              <a href={url} target="_blank" rel="noreferrer">
                <p>Visit</p>
                <span className="hoverBtn"></span>
                <span className="hoverBtn-bottom"></span>
              </a>
            </div>

          </motion.div>
        }
        </>

    )
  }
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct)
    y.set(yPct)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }


  return (
    <section className="project">

      <Link to='/projects'>
        <FontAwesomeIcon icon={faArrowTurnRight} size='1x' className="btn__back"/>
      </Link>
      

      <h1>{title}</h1>
      <motion.div
        className="project__slider"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX, rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {renderSlider()}
      </motion.div>
      <article className="project__content">
        {renderDescription()}

        <div className="project__content__task">
          {renderTask()}
        </div>
        <div className="project__content__link">
          {renderLink()}
        </div>

        <div className="project__content__tech">
          {renderTech()}
        </div>
      </article>
    </section>
  )
}

export default Project