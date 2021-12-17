import TeamTile from "../Tiles/TeamTile";
import styles from "../../../styles/Rows/MiddleRow.module.css";

export default function MiddleRow({ team }) {
    return (
        <div className={styles.middleRow}>
            {/* Zone 1 */}
            <TeamTile team={team} tileType={"middleRow"}/>
            <TeamTile team={team} tileType={"middleRow"}/>
            {/* Zone 2 */}
            <TeamTile team={team} tileType={"middleRow"}/>
            <TeamTile team={team} tileType={"middleRow"}/>
            <TeamTile team={team} tileType={"middleRow"}/>
            {/* Zone 3 */}
            <TeamTile team={team} tileType={"middleRow"}/>
            <TeamTile team={team} tileType={"middleRow"}/>
            <TeamTile team={team} tileType={"middleRow"}/>
            {/* Zone 4 */}
            <TeamTile team={team} tileType={"middleRow"}/>
            <TeamTile team={team} tileType={"middleRow"}/>
        </div>
    );
}