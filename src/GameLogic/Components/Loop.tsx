import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../store/store';
import { IPlayer, IChest, IWall } from '../store/reducers';
import { setPlayer, addChest, addWall } from '../store/actions';
import './Loop.styles.css';

interface ILoopProps {
    player: IPlayer;
    chests: IChest[];
    walls: IWall[];
}

interface ILoopState {
    requestID: number;
    fps: number;
    keys: IKey[];
    log: String;
}

export interface IKey {
    key: string;
    isPressed: boolean;
    isToggle: boolean;
}

class Loop extends React.Component<ILoopProps, ILoopState> {
    public readonly state: Readonly<ILoopState> = {
        requestID: 0,
        fps: 0,
        keys: [],
        log: 'empty'
    }

    private timeMeasurements: number[] = [];

    componentDidMount(){
        this.setState({
            requestID: window.requestAnimationFrame(this.loop),
            keys: [
                {key: 'w', isPressed: false, isToggle: false},
                {key: 'a', isPressed: false, isToggle: false},
                {key: 's', isPressed: false, isToggle: false},
                {key: 'd', isPressed: false, isToggle: false},
                {key: 'e', isPressed: false, isToggle: true}
            ]
        });
        document.onkeydown = this.keyChange;
        document.onkeyup = this.keyChange;
    }

    componentWillUnmount() {
        const { requestID } = this.state;
        if(requestID){
            window.cancelAnimationFrame(requestID);
        }
    }

    keyChange = (ev: KeyboardEvent) => {
        const { keys } = this.state;

        if(ev.type === 'keyup'){
            this.setState({
                keys: keys.map((key: IKey) => {
                    if(ev.key === key.key && !key.isToggle){
                        return {key: key.key, isPressed: false, isToggle: false};
                    }else if(ev.key === key.key && key.isToggle){
                        return {key: key.key, isPressed: !key.isPressed, isToggle: true};
                    }
                    else {
                        return key;
                    }
                })
            })
        }else if(ev.type === 'keydown'){
            this.setState({
                keys: keys.map((key: IKey) => {
                    if(ev.key === key.key && !key.isToggle){
                        return {key: key.key, isPressed: true, isToggle: false};
                    }else{
                        return key;
                    }
                })
            })
        }
    }

    loop = () => {
        this.timeMeasurements.push(performance.now());
        const msPassed = this.timeMeasurements[this.timeMeasurements.length-1] - this.timeMeasurements[0];
        if (msPassed >= 0.5 * 1000) {
            this.setState({
                fps: Math.round(this.timeMeasurements.length / msPassed * 1000 * 2) / 2
            });
            this.timeMeasurements = [];
        }

        this.props.player.update(this.state.keys, this.props.chests, this.props.walls);

        this.setState({
            requestID: window.requestAnimationFrame(this.loop)
        })
    }

    public render() {
        const { fps, log } = this.state;
        return (
            <div className="loopStats">
                <div>{`fps: ${fps} log: ${log}`}</div>
            </div>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        player: store.player,
        chests: store.chests,
        walls: store.walls
    };
  };

export default connect(mapStateToProps, { setPlayer, addChest, addWall })(Loop);