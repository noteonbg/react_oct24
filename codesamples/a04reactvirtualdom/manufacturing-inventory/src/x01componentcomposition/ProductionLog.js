import React from 'react';

const ProductionLog = ({ logs }) => {
    return (
        <div>
            <h3>Production Logs:</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log.name}: {log.qty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductionLog;
