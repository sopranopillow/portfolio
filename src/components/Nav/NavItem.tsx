import * as React from 'react';
import { NavItemProps } from './NavItem.types';

export class NavItem extends React.Component<NavItemProps, {}> {
    public render(): JSX.Element {
        return <div style={this.props.style}>{this.props.children}</div>
    }
}