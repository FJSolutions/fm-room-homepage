import { Nav } from "./components/nav.tsx";
import { Hero } from "./components/hero.tsx";
import { About } from "./components/about.tsx";

export function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}
