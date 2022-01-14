import Head from 'next/head';
import Footer from '../../components/Footer'
import styles from '../../styles/Game.module.css'
import { useState } from 'react';

import StartRow from '../../components/Game/Rows/StartRow';
import MiddleRow from '../../components/Game/Rows/MiddleRow';
import MineRow from '../../components/Game/Rows/MineRow';
import LetterRow from '../../components/Game/Rows/LetterRow';
import NoScript from '../../components/NoScript';

export default function Game() {
    const [selectedTeam, setSelectedTeam] = useState('red');
    
    return (
        <>
            <Head>
                <title>Battleship Game</title>  
                <NoScript/>
            </Head>
            <main>
                <div className={styles.boardGrid}>
                    <MineRow team={selectedTeam}/>
                    <div/>
                    <MiddleRow team={selectedTeam}/>
                    <div/>
                    <div/>
                    <StartRow team={selectedTeam}/>
                    <div/>
                    <LetterRow team={selectedTeam}/>
                </div>
            </main>
            <Footer/>
        </>
    );
}