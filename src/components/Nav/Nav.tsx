import * as React from 'react';

export const Nav: React.FunctionComponent<{}> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}