import { useContext, useEffect } from "react"
import { DataContext } from "../../app/data/dataContext"
import { Link } from "react-router-dom"
import Slider from "react-slick";
import { InfinitySpin } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnRight } from "@fortawesome/free-solid-svg-icons";

const ProjectsList = () => {
    const projectsHook = useContext(DataContext);
    const { getProjects } = projectsHook;
    const projects = getProjects();
    const sortedProjects = projects.sort((a, b) => {
        return b.id - a.id;
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }
    , [])
   
    const renderImages = (images) => {
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
        speed: 5500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5500,
        fade: true,
    }

    const renderSlider = (images) => {
        if (!images) {
            return (
                <div className="projectsList__card__images">
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
                {renderImages(images)}
            </Slider>
        )
    }

    const renderTechnologies = (technologies) => {
        return technologies.map((technology, index) => {
            const { name, image } = technology;
            return (
                <div key={index}>
                    <img src={image} alt={name} />
                </div>
            )
        }
        )
    }


    

    const renderProjects = () => {
        return sortedProjects.map((project) => {
            const {id, title, description, images=[], technologies=[]} = project;
            return (
                    <Link to={`/projects/${id}`} key={id} className="projectsList__card">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className="projectsList__card__images">
                            {renderSlider(images)}
                        </div>
                        <div className="projectsList__card__technologies">
                            {renderTechnologies(technologies)}
                        </div>
                    </Link>
            )
        }
        )
    }

    return (
        <>
            <Link to='/'>
                <FontAwesomeIcon icon={faArrowTurnRight} size='1x' className="btn__back"/>
            </Link>
            <section className="projectsList">
                {renderProjects()}
            </section>
        </>
  )
}

export default ProjectsList