import TeamTile from "../Tiles/TeamTile";
import styles from "../../../styles/Rows/MineRow.module.css";

export default function MineRow({ team }) {
    return (
        <div className={styles.mineRow}>
            {/* Zone 1 */}
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            {/* Zone 2 */}
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            {/* Zone 3 */}
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            {/* Zone 4 */}
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
            <TeamTile team={team} tileType={"mineRow"}/>
        </div>
    );
}