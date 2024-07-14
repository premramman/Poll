import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface Props {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function PasswordField({ onChange }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <TextField label="Password" name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
            }}
        />
    )
}

export default PasswordField;