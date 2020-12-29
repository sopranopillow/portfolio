import * as React from 'react';
import { NavProps } from './Nav.types';
import { NavItem } from './NavItem';

const isNavItem = (item: React.ReactNode): item is NavItem => {
    return ((item as React.ReactElement)?.type as React.ComponentType)?.name === NavItem.name;
}

export class Nav extends React.Component<NavProps, {}> {
    render() {
        return (
            <div style={this.props.style}>
                {this.props.children &&
                    React.Children.map(React.Children.toArray(this.props.children),
                    (child)=>{
                        if (isNavItem(child)) {
                            return child;
                        }else {
                            console.warn("Child needs to be NavItem");
                            return undefined;
                        }
                    })
                }
            </div>
        );
    }
}