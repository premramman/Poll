import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { InputAdornment, TextField } from '@mui/material';
import { KeyboardEvent } from "react";

interface Props {
    isValid: boolean,
    register?: any,
    error?: boolean,
    helperText?: string | undefined,
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
}

function UsernameCheckField({ isValid, register, error, helperText, onKeyUp }: Props) {
    return (
        <TextField label="Username"
            {...register("username")}
            error={error}
            helperText={helperText}
            onKeyUp={onKeyUp}
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        {isValid ? <CheckIcon color="success"/> : <ErrorOutlineIcon color="warning"/>}
                    </InputAdornment>
            }}
        />
    )
}

export default UsernameCheckField;