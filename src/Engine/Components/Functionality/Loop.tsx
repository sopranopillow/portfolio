import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../store/store';
import './Loop.styles.css';

interface ILoopState {
    requestID: number;
    fps: number;
    keys: IKey[];
}

export interface IKey {
    key: string;
    isPressed: boolean;
}

class Loop extends React.Component<{}, ILoopState> {
    public readonly state: Readonly<ILoopState> = {
        requestID: 0,
        fps: 0,
        keys: []
    }

    private timeMeasurements: number[] = [];

    componentDidMount(){
        this.setState({
            requestID: window.requestAnimationFrame(this.loop),
            keys: [
                {key: 'w', isPressed: false},
                {key: 'a', isPressed: false},
                {key: 's', isPressed: false},
                {key: 'd', isPressed: false}
            ]
        });
        document.onkeydown = this.keyChange;
        document.onkeyup = this.keyChange;
    }

    componentWillUnmount() {
        const {requestID} = this.state;

        if(requestID){
            window.cancelAnimationFrame(requestID);
        }
    }

    keyChange = (ev: KeyboardEvent) => {
        const { keys } = this.state;

        if(ev.type === 'keyup'){
            this.setState({
                keys: keys.map((key: IKey) => {
                    if(ev.key === key.key){
                        return {key: key.key, isPressed: false};
                    }else{
                        return key;
                    }
                })
            })
        }else if(ev.type === 'keydown'){
            this.setState({
                keys: keys.map((key: IKey) => {
                    if(ev.key === key.key){
                        return {key: key.key, isPressed: true};
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

        // update

        // render

        this.setState({
            requestID: window.requestAnimationFrame(this.loop)
        })
    }

    public render() {
        const { fps } = this.state;
        return (
            <div className="loopStats">
                <div>{`fps: ${fps}`}</div>
            </div>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        playerState: store.playerState,
        generalState: store.generalState
    };
};

export default connect(mapStateToProps)(Loop);