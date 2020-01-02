import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Engine/store/store';
import { ISubscription } from '../Engine/reducers';
import './Loop.styles.css';

interface ILoopProps {
    loop: ISubscription[];
}

interface ILoopState {
    requestID?: number;
}

class Loop extends React.Component<ILoopProps, ILoopState> {

    componentDidMount(){
        this.setState({
            requestID: window.requestAnimationFrame(this.loop)
        });
    }

    componentWillUnmount() {
        const {requestID} = this.state;

        if(requestID){
            window.cancelAnimationFrame(requestID);
        }
    }

    loop = () => {
        this.props.loop.forEach(func => {
            func.func();
        });

        this.setState({
            requestID: window.requestAnimationFrame(this.loop)
        })
    }

    public render() {
        return (
            <div className="loopStats">
                <div>fps</div>
            </div>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        loop: store.loopState.subscriptions
    };
};

export default connect(mapStateToProps)(Loop);