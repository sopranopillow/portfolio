import * as React from 'react';
import { Nav, NavItem } from '../components';

export const Home = () => {
    return (
        <div>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>About Me</NavItem>
                <NavItem>School</NavItem>
                <NavItem>Personal Projects</NavItem>
                <NavItem>Resume</NavItem>
            </Nav>
        </div>
    )
};