import React from 'react';
import './DriverList.css'

const DriverList = ({ driversList }) => {
    const driverItem = driversList
        .map(({ position, name, team, points, wins }, i) => {

            return (
                <div className="driverItem" key={++i}>
                    <div className="driver-position">
                        {position}
                    </div>
                    <div className="driver-name">
                        {name}
                    </div>
                    <div className="driver-team">
                        {team}
                    </div>
                    <div className="driver-points">
                        {points}
                    </div>
                    <div className="driver-wins">
                        {wins}
                    </div>
                </div>
            )
        })

    return (
        <div className="grid-container">
            <div className="driverItem label">
                <div>
                    Position
                </div>
                <div>
                    Name
                </div>
                <div>
                    Team
                </div>
                <div>
                    Points
                </div>
                <div>
                    Wins
                </div>
            </div>
            {driverItem}
        </div>
    );
};

export default DriverList;