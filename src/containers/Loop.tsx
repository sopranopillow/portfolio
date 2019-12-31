import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../store/store';
import { ISubscription } from '../reducers/LoopReducer';

interface ILoopProps {
    loop: ISubscription[];
}

class Loop extends React.Component<ILoopProps> {
    public render() {
        const { loop } = this.props;
        return (
            <>
            {loop && loop.map(func => {
                func.func();
            })}
            </>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        loop: store.loopState.subscriptions
    };
};

export default connect(mapStateToProps)(Loop);