import Head from 'next/head';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [joinMenuActive, setJoinMenuActive] = useState(false);
  const joinMenu = joinMenuActive ? `${styles.slideIn} ${styles.joinMenu}` : styles.joinMenu;
  const mainMenu = joinMenuActive ? `${styles.slideOut} ${styles.mainMenu}` : styles.mainMenu;

  return (
    <>
      <Head>
        <title>Battleship</title>
      </Head>
      <Header/>
      <main id={styles.mainContent}>
        <div className={mainMenu}>
          <h1 className={styles.pageHeader}>Join or Host a game</h1>
          <div className={styles.buttonList}>
            <button className='isMain'>Host a Game</button>
            <button onClick={() => setJoinMenuActive(!joinMenuActive)}>Join a Game</button>
          </div>
        </div>
        <div id='joinMenu' className={joinMenu}>
          <div id={styles.joinMenuHeader}>
            <svg onClick={() => setJoinMenuActive(false)} xmlns="http://www.w3.org/2000/svg" className={styles.backArrow} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
            <h1 className={styles.pageHeader}>Join a Game</h1>
          </div>
          <div className={styles.buttonList}>
            <input type='text' id='joincode' placeholder='Join Code'></input>
            <input type='text' id='username' placeholder='Username'></input>
            <button className='isMain'>Join</button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
