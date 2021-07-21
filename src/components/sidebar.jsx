import React, { Component } from 'react';

class SideBar extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="w3-sidebar w3-bar-block w3-light-grey" style="width:25%">
                    <a href="#" class="w3-bar-item w3-button w3-border-bottom">Link 1</a>
                    <a href="#" class="w3-bar-item w3-button w3-border-bottom">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button w3-border-bottom">Link 3</a>
                </div>

            </React.Fragment>
        );
    }
}

export default SideBar;