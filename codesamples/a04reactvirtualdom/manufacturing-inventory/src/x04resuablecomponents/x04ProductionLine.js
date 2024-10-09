import React from 'react';
import X04ProductionStatus from './x04ProductionStatus';
import X04ProductionLog from './x04Productionlog';

const X04ProductionLine = ({ name, status, logs }) => {
    return (
        <div className="production-line">
            <h2>{name} Production Line</h2>
            <X04ProductionStatus status={status} />
            <X04ProductionLog logs={logs} />
        </div>
    );
};

export default X04ProductionLine;
