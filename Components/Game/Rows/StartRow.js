import TeamTile from "../Tiles/TeamTile";
import styles from "../../../styles/Rows/StartRow.module.css";

export default function StartRow({ team }) {
    return (
        <div className={styles.startRow}>
            {/* Zone 1 */}
            <TeamTile team={team} tileType={"startRow"}/>
            <TeamTile team={team} tileType={"startRow"}/>
            {/* Zone 2 */}
            <TeamTile team={team} tileType={"startRow"}/>
            <TeamTile team={team} tileType={"startRow"}/>
            <TeamTile team={team} tileType={"startRow"}/>
            {/* Zone 3 */}
            <TeamTile team={team} tileType={"startRow"}/>
            <TeamTile team={team} tileType={"startRow"}/>
            <TeamTile team={team} tileType={"startRow"}/>
            {/* Zone 4 */}
            <TeamTile team={team} tileType={"startRow"}/>
            <TeamTile team={team} tileType={"startRow"}/>
        </div>
    );
}