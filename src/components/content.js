//adding another component and putting in todays date in java
import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (
            <div>
                {/* Text that shows on screen */}
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Content;