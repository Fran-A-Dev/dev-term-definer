import { Devterm } from 'lib/types';
import Link from 'next/link';
import styles from './Card.module.scss';
import React from 'react';





const Card: React.FC<Devterm> = ({ 
    
    
    
    
    term,
    definitions,
    id,





}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.h2}>Click on the term to learn!</h2>

      <div className="term">
        <Link  href={`/details/${id}`}>
          <a href={`details/${id}`}>
            <span className={styles.term}>{term}</span>
            
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

//left off at filtering and routing my term to their defintions page.  Need to pull the data from WordPress onto the details page
