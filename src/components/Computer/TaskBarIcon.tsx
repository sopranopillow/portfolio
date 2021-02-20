import * as React from 'react';
import { FlexItem } from '../Flex';

export const TaskBarIcon: React.FunctionComponent = (props) => {
    return <FlexItem>{props.children}</FlexItem>;
}