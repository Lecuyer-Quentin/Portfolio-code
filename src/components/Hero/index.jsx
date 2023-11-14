const Hero = () => {

    const renderFly = () => {
        return (
            <div className="hero__fly">
                <span className="hero__fly__item" >
                    FullStack Developer
                </span>
                <span className="hero__fly__item" >
                    Design UX/UI
                </span>
                <span className="hero__fly__item" >
                    Web Development
                </span>
                <span className="hero__fly__item" >
                    Modern Animation
                </span>
                <span className="hero__fly__item" >
                    Agile
                </span>
            </div>
        )
    }

    const renderTitle = () => {
        return (
            <div className="hero__text">
                <h1 className="hero__text__title">
                    Good News Everyone <br />
                    As a
                    <div className="hero__text__title__slider">
                        <ul className="hero__text__title__slider__words">
                            <li className="hero__text__title__slider__words__item">
                                FrontEnd Developer
                            </li>
                            <li className="hero__text__title__slider__words__item">
                                Designer
                            </li>
                            <li className="hero__text__title__slider__words__item">
                                Human
                            </li>
                        </ul>
                    </div>
                    <br />
                    I
                    <div className="hero__text__title__slider">
                        <ul className="hero__text__title__slider__words">
                            <li className="hero__text__title__slider__words__item">
                                create
                            </li>
                            <li className="hero__text__title__slider__words__item">
                                make
                            </li>
                            <li className="hero__text__title__slider__words__item">
                                share
                            </li>
                        </ul>
                    </div>
                    your
                    <div className="hero__text__title__slider">
                        <ul className="hero__text__title__slider__words">
                            <li className="hero__text__title__slider__words__item">
                                website
                            </li>
                            <li className="hero__text__title__slider__words__item">
                                visual
                            </li>
                            <li className="hero__text__title__slider__words__item">
                                stories
                            </li>
                        </ul>
                    </div>

                </h1>
            </div>
        )
    }


  return (
    <section className="hero" id="hero">
        {renderTitle()}
        {renderFly()}
    </section>
  )
}

export default Hero