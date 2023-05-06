import { TextField } from "@mui/material";

export function Campo({ nonbre }) {
    return (
        <TextField id={nonbre} label={nonbre} variant="outlined" />
    );
}