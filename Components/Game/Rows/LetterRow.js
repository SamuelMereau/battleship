import LetterTile from '../Tiles/LetterTile';
import styles from '../../../styles/Rows/LetterRow.module.css';

export default function LetterRow({ team }) {
    const letters = require('../Letters.json');
    return (
        <div className={styles.letterRow}>
            {letters.map((letter) => {
                return <LetterTile key={`${team}-${letter}`} team={team} letter={letter}/>
            })}
        </div>
    );
}