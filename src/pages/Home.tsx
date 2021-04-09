import * as React from 'react';
import { Icon, Screen, InnerScreen, TaskBar, TaskBarIcon, Window } from '../components';

export interface HomeState {
    gl: WebGLRenderingContext;
    canvas: HTMLCanvasElement;
}

export class Home extends React.Component<{}, HomeState>{
    componentDidMount(){
        const canvas = document.getElementById('background') as HTMLCanvasElement;
        const gl = canvas.getContext('webgl2');
        if (canvas && gl) {
            this.setState({
                canvas: canvas,
                gl: gl
            });
            gl.clearColor(0, 0, 0, 0.9);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
    }

    render(){
        return (
            <>
                <canvas id="background" style={{position:'absolute', width: '100%', height: '100%'}}></canvas>
                <Screen>
                    <Window title="Personal Projects"/>
                    <InnerScreen>
                        {icons.map(icon => <Icon>{icon}</Icon>)}
                    </InnerScreen>
                    <TaskBar>
                        {icons.map(icon => <TaskBarIcon>{icon}</TaskBarIcon>)}
                    </TaskBar>
                </Screen>
            </>
        );
    }
};

const icons = ['about me','school','personal projects','school projects', 'resume'];