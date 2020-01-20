import * as React from 'react';
import { addChest } from '../GameLogic/store/actions';
import { IAppState } from '../GameLogic/store/store';
import { connect } from 'react-redux';
import { IBoundaries } from '../GameLogic/GeneralUtils';
import './Chest.styles.css';
import chest from '../Resources/Sprites/chest.png';

interface IChestState {
    position: IBoundaries;
    showContent: boolean;
}

interface IChestProps {
    addChest: typeof addChest;
    size: number;
    top: number;
    left: number;
    children: React.ReactNode | JSX.Element;
}

class Chest extends React.Component<IChestProps, IChestState> {
    constructor(props: IChestProps){
        super(props);
        const {left, top, size} = this.props;
        this.state = ({
            position: {
                topLeft: {
                    x: left,
                    y: top
                },
                bottomRight: {
                    x: left + size,
                    y: top + size
                }
            },
            showContent: false
        })
    }

    componentDidMount(){
        this.props.addChest(this.state.position, this.toggleContent);
    }

    toggleContent = (): void => {
        this.setState({
            showContent: !this.state.showContent
        })
    }

    render(){
        const { size } = this.props;
        const { topLeft } = this.state.position;
        const styles: React.CSSProperties = {
            position: 'absolute',
            width: size + 'px',
            height: size + 'px',
            left: topLeft.x + 'px',
            top: topLeft.y + 'px'
        }
        return(
            <>
                <img alt="Chest" src={chest} style={styles}></img>
                {this.state.showContent && <div className="content">{this.props.children}</div>}
            </>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        chests: store.chests,
        player: store.player,
        walls: store.walls
    };
  };

export default connect(mapStateToProps,{ addChest })(Chest);