import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { AppContext } from "../AppContext";

export default () => {
    const {
        appData
    } = useContext(AppContext)

    return (
        <Box
            sx={{
                width: '100%',
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px",
                position: 'absolute',
                top: "0",
                left: "0",
                zIndex: "100"
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                }}
            >examples UI</Typography>
            <Button
            variant="contained"
            >Start</Button>
        </Box>
    )

}

