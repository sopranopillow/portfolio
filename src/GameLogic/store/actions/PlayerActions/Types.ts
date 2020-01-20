import { IKey } from "../../../Components/Loop";
import { IChest, IWall } from "../../reducers";

export enum PlayerActionTypes {
    SET = 'SET'
}

export interface ISetPlayer {
    type: PlayerActionTypes;
    update: (keys: IKey[], chests: IChest[], walls: IWall[]) => void;
}

// ILoopSubscribe | ILoopX
export type PlayerActions = ISetPlayer;