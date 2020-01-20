import { IChest, IWall } from "..";
import { IKey } from "../../../Components/Loop";

export interface IPlayer {
    update: (keys: IKey[], chests: IChest[], walls: IWall[]) => void;
}