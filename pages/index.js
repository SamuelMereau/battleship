import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import NoScript from '../components/NoScript';

export default function Home() {
  const [hostMenuActive, setHostMenuActive] = useState(false);
  const [joinMenuActive, setJoinMenuActive] = useState(false);

  const hostMenu = hostMenuActive ? `${styles.slideIn} ${styles.hostMenu}` : styles.hostMenu;
  const joinMenu = joinMenuActive ? `${styles.slideIn} ${styles.joinMenu}` : styles.joinMenu;
  const mainMenu = () => {
    switch (true) {
      case joinMenuActive:
        return `${styles.slideOutLeft} ${styles.mainMenu}`;
      case hostMenuActive:
        return `${styles.slideOutRight} ${styles.mainMenu}`;
      default:
        return styles.mainMenu;
    }
  }

  return (
    <>
      <Head>
        <title>Battleship</title>
        <NoScript/>
      </Head>
      <Header/>
      <main id={styles.mainContent}>
        {/* Host Menu */}
        <div id='hostMenu' className={hostMenu}>
        <div className={styles.menuHeader}>
            <h1 className={styles.pageHeader}>Host a Game</h1>
            <svg onClick={() => setHostMenuActive(false)} xmlns="http://www.w3.org/2000/svg" 
                 className={`${styles.isPointingRight} ${styles.backArrow}`} 
                 viewBox="0 0 24 24" 
                 strokeWidth="1.5" 
                 stroke="#000000" 
                 fill="none" 
                 strokeLinecap="round" 
                 strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </div>
            <form id='hostGameOptionsMenu' className={styles.hostGameForm}>
              <div id={styles.team}>
                <label htmlFor='colourOptions'>Your Team</label>
                <select name='colourOptions' id='colourOptions'>
                  <option value='blue'>Blue Team</option>
                  <option value='red'>Red Team</option>
                </select>
              </div>
              <div id={styles.commands}>
                <label>Commands Per Row</label>
                <div className={styles.commandsOptions}>
                  <label htmlFor='startRowCommands'>Start Row Commands</label>
                  <input type='text' name='startRowCommands' id='startRowCommands' className='smallTextField' defaultValue='2'></input>
                  <label htmlFor='middleRowCommands'>Middle Row Commands</label>
                  <input type='text' name='middleRowCommands' id='middleRowCommands' className='smallTextField' defaultValue='3'></input>
                  <label htmlFor='mineRowCommands'>Mine Row Commands</label>
                  <input type='text' name='mineRowCommands' id='mineRowCommands' className='smallTextField' defaultValue='4'></input>
                </div>
              </div>
              <div id={styles.options}>
                <div className={styles.option}>
                  <label htmlFor='allowSpectators'>Allow Spectators</label>
                  <label className='switch'>
                    <input type='checkbox' defaultChecked={true} name='allowSpectators' id='allowSpectators'></input>
                    <span className='switch-slider'></span>
                  </label>
                </div>
                <div className={styles.option}>
                  <label htmlFor='enableTutorial'>Enable Tutorial</label>
                  <label className='switch'>
                    <input type='checkbox' defaultChecked={true} name='enableTutorial' id='enableTutorial'></input>
                    <span className='switch-slider'></span>
                  </label>
                </div>
              </div>
              <input type='button' id='resetToDefault' value='Reset to Default' className='smallButton'></input>
            </form>
            <button className='isMain'>Start Game</button>
        </div>

        {/* Main Menu */}
        <div className={mainMenu()}>
          <h1 className={styles.pageHeader}>Join or Host a game</h1>
          <div className={styles.optionsMenu}>
            <button onClick={() => setHostMenuActive(!hostMenuActive)} className='isMain'>Host a Game</button>
            <button onClick={() => setJoinMenuActive(!joinMenuActive)}>Join a Game</button>
          </div>
        </div>
        
        {/* Join Menu */}
        <div id='joinMenu' className={joinMenu}>
          <div className={styles.menuHeader}>
            <svg onClick={() => setJoinMenuActive(false)} xmlns="http://www.w3.org/2000/svg" 
                 className={styles.backArrow} 
                 viewBox="0 0 24 24" 
                 strokeWidth="1.5" 
                 stroke="#000000" 
                 fill="none" 
                 strokeLinecap="round" 
                 strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
            <h1 className={styles.pageHeader}>Join a Game</h1>
          </div>
          <div id='joinGameOptionsMenu' className={styles.optionsMenu}>
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
