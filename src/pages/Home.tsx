import * as React from 'react';
import { Icon, Screen, InnerScreen, TaskBar } from '../components';

export const Home: React.FunctionComponent<{}> = () => {
    return (
        <Screen>
            <InnerScreen>
                <Icon>about me</Icon>
                <Icon>school</Icon>
                <Icon>personal projects</Icon>
                <Icon>school projects</Icon>
                <Icon>resume</Icon>
            </InnerScreen>
            <TaskBar/>
        </Screen>
    );
};