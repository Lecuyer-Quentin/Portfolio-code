// import ProgressBar from "../ProgressBar"
import { motion} from 'framer-motion'
import { useEffect, useState } from 'react'

const About = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0)
  const [hasShownItem1, setHasShownItem1] = useState(false)
  const [hasShownItem2, setHasShownItem2] = useState(false)
  const [hasShownItem3, setHasShownItem3] = useState(false)
  const [hasShownItem4, setHasShownItem4] = useState(false)
  const [hasShownItem5, setHasShownItem5] = useState(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      const aboutSectionTop = document.getElementById('about').offsetTop
      const aboutSectionHeight = document.getElementById('about').offsetHeight
      const scrollPosition = window.scrollY

      if (scrollPosition >= aboutSectionTop && scrollPosition <= aboutSectionTop + aboutSectionHeight) {
        setScrollYProgress((scrollPosition - aboutSectionTop) / aboutSectionHeight)
      } else if (scrollPosition < aboutSectionTop) {
        setScrollYProgress(0)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])
  const renderScroll = () => {
    return (
      <motion.div className="about-bar"
        style={{
          scaleY: scrollYProgress * 1.5,
          originY: 0,
        }} />
    )
  }
  const renderScrollItem = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      duration: 0.5,
    },
  }

  return (
    <div>
      {(scrollYProgress > 0.05 || hasShownItem1) &&
        <motion.div
          className="about__content__progress__item"
          initial="hidden"
          animate="visible"
          variants={variants}
          onAnimationComplete={() => setHasShownItem1(true)}
        >
          <p>{`Bac Pro Systèmes Électroniques et Numériques`}</p>
        </motion.div>
      }

      {(scrollYProgress > 0.2 || hasShownItem2) &&
        <motion.div
          className="about__content__progress__item"
          initial="hidden"
          animate="visible"
          variants={variants}
          onAnimationComplete={() => setHasShownItem2(true)}
        >
          <p>{`Licence 1 Histoire`}</p>
        </motion.div>
      }

      {(scrollYProgress > 0.4 || hasShownItem3) &&
        <motion.div
          className="about__content__progress__item"
          initial="hidden"
          animate="visible"
          variants={variants}
          onAnimationComplete={() => setHasShownItem3(true)}
        >
          <p>{`RNCP V Développeur/Intégrateur Web`}</p>
        </motion.div>
      }

      {(scrollYProgress > 0.6 || hasShownItem4) &&
        <motion.div
          className="about__content__progress__item"
          initial="hidden"
          animate="visible"
          variants={variants}
          onAnimationComplete={() => setHasShownItem4(true)}
        >
          <p>{`Next:`} <br />
            {`CP Développeur Web `}
          </p>
        </motion.div>
      }

      {(scrollYProgress > 0.7 || hasShownItem5) &&
        <motion.div
          className="about__content__progress__item"
          initial="hidden"
          animate="visible"
          variants={variants}
          onAnimationComplete={() => setHasShownItem5(true)}
        >
        <p>{`RoadMap Never End`}</p>
        </motion.div>
      }
    </div>
  )
  }
  const renderText = () => {
    return (
      <div className="about__content__text">
        <p>{`Salut ! Je m'appelle Lecuyer Quentin, et je suis passionné par le développement web, avec une spécialisation dans React. En tant que développeur React junior, je suis constamment à la recherche de nouvelles opportunités pour améliorer mes compétences et contribuer à des projets innovants`}</p>
      </div>
    )
  }
  const renderParcours = () => {
    return (
      <div className="about__content__text">
        <p>{`J'ai récemment obtenu mon diplôme d’intégrateur Web et depuis, je me suis plongé dans le monde du développement web. La logique propre et la modularité de React m'ont captivé, et j'ai rapidement décidé d'en faire ma principale compétence.`}</p>
      </div>
    )
  }
  const renderPhilo = () => {
    return (
      <div className="about__content__text">
        <p>{`Je suis convaincu que la collaboration et l'apprentissage continu sont les clés du succès dans le domaine du développement. Chaque projet est une opportunité d'apprentissage, et j'aborde chaque défi avec enthousiasme et détermination.`}</p>
      </div>
    )
  }
  const renderLookingFor = () => {
    return (
      <div className="about__content__text">
        <p>
          {`Je suis actuellement à la recherche d'opportunités professionnelles où je pourrais contribuer en tant que développeur React junior. Mon objectif est de travailler au sein d'une équipe dynamique et collaborative, où je pourrais continuer à apprendre tout en apportant ma passion pour le développement web.`}<br />
          {`N'hésitez pas à me contacter si vous souhaitez discuter de projets passionnants, de collaborations potentielles ou simplement pour échanger sur le monde du développement web.`}<br /><br />
        </p>
      </div>
    )
  }
  const renderThanks = () => {
    return (
      <div className="about__content__text">
        <p>{`Merci de visiter mon site web !`}</p>
      </div>
    )
  }

 
  return (
    <section className="about" id="about">
      <h2 className="about__title">About me</h2>
      <div className='about__content'>
        {renderText()}
        {renderParcours()}

        <div className="about__content__progress">
          {renderScroll()}
          {renderScrollItem()} 
        </div>
        
        {renderPhilo()}
        {renderLookingFor()}
        {renderThanks()}
      </div>


    </section>
  )
}

export default About