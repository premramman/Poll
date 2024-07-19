import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { forwardRef, useState } from "react";

const cmp = function (props: TextFieldProps, ref) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const adornment = (
        <InputAdornment position="end">
            <IconButton
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    );

    return (
        <TextField
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: adornment
            }}
        />
    )
}

const PasswordField = forwardRef(cmp);

export default PasswordField;