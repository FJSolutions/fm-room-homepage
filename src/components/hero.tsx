import { useState } from "preact/hooks";
import { heroData } from "../data/hero-data.ts";


const Hero = () => {
  const [ index, setIndex ] = useState(0)

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length);
  }

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  }

  return (
    <section className="hero">
      <article class="hero__img">
        <picture>
          <source media="(max-width: 768px)" srcset={ heroData[index].mobileImg }/>
          <img src={ heroData[index].desktopImg } alt={ heroData[index].title } width="840" height="534"/>
        </picture>
      </article>
      <article class="hero__content">
        <h2 className="hero__title">{ heroData[index].title }</h2>
        <p className="hero__description">{ heroData[index].description }</p>
        <p className="hero__cta">
          Shop Now
          <svg viewBox="0 0 40 12" width="32" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill="currentColor" fill-rule="nonzero"/>
          </svg>
        </p>
        <div class="hero__content--controls">
          <button type="button" aria-label="previous image" onClick={ handlePrevClick }>
            <img src="/images/icon-angle-left.svg" alt="previous image" width="14" height="24"/>
          </button>
          <button type="button" aria-label="Next image" onClick={ handleNextClick }>
            <img src="/images/icon-angle-right.svg" alt="next image" width="14" height="24"/>
          </button>
        </div>
      </article>
    </section>
  )
}

export { Hero }
