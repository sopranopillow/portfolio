import * as React from 'react';
import { Icon, Screen, InnerScreen, TaskBar, TaskBarIcon } from '../components';

export const Home: React.FunctionComponent<{}> = () => {
    return (
        <Screen>
            <InnerScreen>
                {icons.map(icon => <Icon>{icon}</Icon>)}
            </InnerScreen>
            <TaskBar>
                {icons.map(icon => <TaskBarIcon>{icon}</TaskBarIcon>)}
            </TaskBar>
        </Screen>
    );
};

const icons = ['about me','school','personal projects','school projects', 'resume'];