import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

function StepThree(props) {
    return (
        <Box sx={{ margin: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 4 }}>
                {props.title}
            </Typography>
        </Box>
    )
}

export default StepThree;