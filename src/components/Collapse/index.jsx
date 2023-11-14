import { useState } from "react"
import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"

const Collapse = ({ title, description }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className="collapse">
            <motion.div
                className="collapse__header"
                onClick={() => setOpen(!open)}
                animate={{ opacity: open ? 0.5 : 1 }}
                transition={{ duration: .5 }}
            >
                <h3>{title}</h3>
            </motion.div>


            <AnimatePresence>
                {open && <motion.div
                    className="collapse__content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: .5 }}
                >
                    <p>{description}</p>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Collapse