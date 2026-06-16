import { useState } from "preact/hooks";
import { heroData } from "../data/hero-data.ts";


const Hero = () => {
  const [ index, _setIndex ] = useState(0)

  return (
    <section className="hero">
      <article class="hero__img">
        <picture>
          <source media="(max-width: 768px)" srcset={ heroData[index].mobileImg } />
          <img src={ heroData[index].desktopImg } alt={ heroData[index].title } width="840" height="534"/>
        </picture>
      </article>
      <article class="hero__content">
        <h2 className="hero__title">{ heroData[0].title }</h2>
        <p className="hero__description">{ heroData[0].description }</p>
        <p className="hero__cta">Shop Now</p>
      </article>
    </section>
  )
}

export { Hero }
