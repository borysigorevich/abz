import React from 'react';
import {Tooltip, Typography} from "@mui/material";

const CustomTooltip = ({data, className}) => {
    const editedData = data.length > 24 ? data.substring(0, 24) + '...' : data
    const isTooltip = data.length > 24

    return (
        <>
            {isTooltip
                ? <Tooltip title={data}><Typography className={className}>{editedData}</Typography></Tooltip>
                : <Typography className={className}>{editedData}</Typography>
            }
        </>
    );
};

export default CustomTooltip;