import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { forwardRef } from 'react';

interface extendedProps {
    isValid: boolean
}

type UsernameCheckFieldProps = TextFieldProps & extendedProps;

const cmp = function ({ isValid, ...props }: UsernameCheckFieldProps, ref) {
    const adornment = (
        <InputAdornment position="end">
            {isValid ? <CheckIcon color="success" /> : <ErrorOutlineIcon color="warning" />}
        </InputAdornment>
    );

    return (
        <TextField
            {...props}
            ref={ref}
            InputProps={{
                endAdornment: adornment
            }}
        />
    )
}

const UsernameCheckField = forwardRef(cmp);

export default UsernameCheckField;