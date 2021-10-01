import React, {Component} from 'react';
import ScrollButton from "./ScrollButton";

class LivingRoom extends Component {
    render() {
        return (
            <div className="room" id="living-room">
                <ScrollButton direction={"forward"} />
                <ScrollButton direction={"backward"} />
            </div>
        );
    }
}

export default LivingRoom;