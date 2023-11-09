import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => ( 
  <section id='card__deal' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden'/> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Veritatis alias, nulla laudantium minus consectetur omnis nostrum cupiditate recusandae rerum sint odio. Laborum, voluptatem asperiores. Iusto facilis dignissimos omnis cumque cum.
      </p>
      <Button
      styles='mt-10'
      />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>
    </div>
    
  </section>
)

export default CardDeal;