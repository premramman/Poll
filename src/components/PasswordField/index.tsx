import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { KeyboardEvent, useState } from "react";

interface Props {
    register?: any,
    error?: boolean,
    helperText?: string | undefined,
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
}

function PasswordField({ register, error, helperText, onKeyUp }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <TextField label="Password"
            type={showPassword ? 'text' : 'password'}
            {...register("password")}
            error={error}
            helperText={helperText}
            onKeyUp={onKeyUp}
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