import styles from '../../../styles/Tiles/LetterTile.module.css';

export default function LetterTile({ team, letter }) {
    const currentTeam = require('../Teams.json')[team];
    return (
        <div id={`${team}-${letter}`} className={styles.letterTile} style={{ border: `3px solid ${currentTeam.colour}` }}>
            <p className={styles.letterTileContent} style={{ color: currentTeam.colour }}>{letter}</p>
        </div>
    );
}