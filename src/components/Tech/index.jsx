import { motion } from "framer-motion";

import img1 from '../../assets/logos/JavaScript-logo.jpg';
import img2 from '../../assets/logos/react-logo.png';
import img3 from '../../assets/logos/sass.jpg';
import img4 from '../../assets/logos/node-logo.png';
import img5 from '../../assets/logos/mongodb.png';
import img6 from '../../assets/logos/trello-logo.png';

const img = [img1, img2, img3, img4, img5, img6];
const technologies = [
  [img[0], 120, 40],
  [img[1], 20, 40],
  [img[2], 60, 90],
  [img[3], 90, 20],
  [img[4], 130, 30],
  [img[5], 150, 10],
];

const Tech = () => {

  const renderCard = (technology, hueA, hueB) => {
    const cardVariants = {
      offscreen: {
            y: 400,
      },
      onscreen: {
          y: 50,
        rotate: -10,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
        },
    };
    const hue = (h) => `hsl(${h}, 100%, 50%)`;
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
      <motion.div
        className="tech__container"
        key={technology}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}

      >
        <div className="tech__container__splash" id="splash" style={{ background }} />
        <motion.div className="tech__container__card" variants={cardVariants}>
          <img src={technology} alt="technology" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <section className="tech">
      {technologies.map(([technology, hueA, hueB]) => {
        return renderCard(technology, hueA, hueB);
      })}
    </section>
  )
}

export default Tech;
