import React, {Component} from 'react';

class ScrollButton extends Component {
    handleClick = () => {
        const scrollRatio = 0.05;
        const scrollAmount = window.innerWidth * (this.props.direction === "forward" ? scrollRatio : -scrollRatio);
        window.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        })
    };

    render() {
        return (
            <React.Fragment>
                <button className="scroll-btn" id={this.props.direction} onMouseDown={this.handleClick}>></button>
            </React.Fragment>
        );
    }
}

export default ScrollButton;