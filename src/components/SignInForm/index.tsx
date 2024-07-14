import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { formBox, pwdBtnBox, formButtonBox, signInBtn, createAccountBtn, forgotPwdBtn, formTitleBox } from './styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import GLOBALS from '../../data/constants/globals';

function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (<>
        <Box sx={formBox}>
            <Box sx={formTitleBox}>
                <Typography variant="h4">Sign in</Typography>
                <Typography>to continue to {GLOBALS.APP.NAME}</Typography>
            </Box>

            <TextField label="Email" name="email" />
            <TextField label="Password" name="password"
                type={showPassword ? 'text' : 'password'}
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

            <Box sx={pwdBtnBox}>
                <Button variant="text" sx={forgotPwdBtn}>Forgot Password?</Button>
            </Box>

            <Box sx={formButtonBox}>
                <Button size="large" sx={createAccountBtn}>Create Account</Button>
                <Button variant="contained" size="large" sx={signInBtn}>Sign in</Button>
            </Box>

        </Box>
    </>)
}

export default SignInForm;