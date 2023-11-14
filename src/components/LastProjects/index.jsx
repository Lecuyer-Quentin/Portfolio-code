import { useContext, useEffect, useState} from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"
import { DataContext } from "../../app/data/dataContext";
import { InfinitySpin } from "react-loader-spinner";
import Slider from "react-slick";

const LastProjects = () => {
    const projectsHook = useContext(DataContext);
    const { getProjects} = projectsHook;
    const projects = getProjects();
    const sortProjects = projects.sort((a, b) => {
        return b.id - a.id;
    });
    const lastProjects = sortProjects.slice(0, 3);
    const [hoverId, setHoverId] = useState(null)

    const handleHover = (id) => {
        setHoverId(id === hoverId ? null : id)
    }

    const [ref, inView] = useInView(
        {
            rootMargin: "1000px 0px",
        }
    )
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const renderImg = (images) => {
        return images.map((image, index) => {
            const { src, name } = image;
            return (
                <div key={index}>
                    <img src={src} alt={name} />
                </div>
            )
        })
    }
    const settings = {
        infinite: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3500,
        fade: true,
    }
    const renderSlider = (images) => {
        if (!images) {
            return (
                <div className="lastProjects__project__content__images">
                    <InfinitySpin
                        color='black'
                        size={200}
                        speed={1}
                        visible={true}
                        ariaLabel='three circles loading'
                    />
                </div>
            )
        }
        return (
            <Slider {...settings}>
                {renderImg(images)}
            </Slider>
        )
    }

    const renderHovered = (id) => {
        return (
            <AnimatePresence>
                { hoverId === id && (
                    <motion.div
                        key={id}
                        className="lastProjects__project__hovered"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: .5 }}
                    >
                        <motion.p
                            key={id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .5, delay: .5 }}
                        >
                            Voir le projet
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

        )
    }
        
    const renderProject = () => {
        const projectVariants = {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
        }
        return (
            lastProjects.map((project) => {
                const {id, title, images, description } = project;
                return (
                    <motion.div
                        key={id}
                        className="lastProjects__project"
                        id="lastProjects__project"
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                        variants={projectVariants}
                    >
                        <Link to={`/projects/${id}`}
                            onMouseLeave={() => handleHover(id)}
                            onMouseEnter={() => handleHover(id)}
                        >
                            <div className="lastProjects__project__content">
                                <h2>{title}</h2>
                                <div className="lastProjects__project__content__images">
                                    {renderSlider(images)}
                                </div>
                                <p>Description:< br /> < br /> {description}</p>
                                <div className="lastProjects__project__overlay"></div>
                            </div>
                            {renderHovered(id)}
                        </Link>
                    </motion.div>

                )
            }
            )
        )
    }


  return (
      <section id="projects" className="lastProjects">
              {renderProject() }                         
      </section>
  )
}

export default LastProjects