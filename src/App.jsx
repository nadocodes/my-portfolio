import styles from './style'

import { Navbar, Hero, About, Projects, Contact, Button, Skills } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    
    <div classname={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div classname={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>

  </div>
);


export default App