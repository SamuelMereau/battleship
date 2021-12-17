import styles from '../../../styles/Tiles/TeamTile.module.css';

export default function TeamTile({ team, tileType }) {
    const currentTeam = require('../Teams.json')[team];
    const tileImage = require('../Tiles.json')[tileType];
    return (
        <div className={styles.tile} style={{ 
            border: `3px solid ${currentTeam.colour}`,
            background: `lightblue url(${tileImage.backgroundImage}) no-repeat fixed`
        }}></div>
    );
}