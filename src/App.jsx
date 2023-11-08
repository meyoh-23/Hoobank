import React from 'react';
import styles from './style';

import { Navbar, Billing, CardDeal, Bussiness, Clients, CTA, Stats, Footer, Testimonials, Hero, }from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          S<Stats/>
          <Bussiness/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/> 
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App;