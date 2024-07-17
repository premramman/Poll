import { Box, Button, TextField } from '@mui/material';
import { formButtonBox, signInBtn, createAccountBtn, forgotPwdBtn } from './styles';
import GLOBALS from '../../../../data/constants/globals';
import FormLayout from '../../../../layouts/FormLayout';
import FormTitle from '../../../../components/FormTitle';
import PasswordField from '../../../../components/PasswordField';
import RelatedFieldLayout from '../../../../layouts/RelatedFieldLayout';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
    const navigate = useNavigate();
    const handleClickCreateAccount = () => navigate("/signup");
    const handleClickSignIn = () => navigate("/");

    return (
        <FormLayout>
            <FormTitle title="Sign in" subTitle={`to continue to ${GLOBALS.APP.NAME}`} />

            <TextField label="Email" name="email" />

            <RelatedFieldLayout>
                <PasswordField />
                <Box>
                    <Button variant="text" sx={forgotPwdBtn}>Forgot Password?</Button>
                </Box>
            </RelatedFieldLayout>

            <Box sx={formButtonBox}>
                <Button size="large" sx={createAccountBtn} onClick={handleClickCreateAccount}>Create Account</Button>
                <Button variant="contained" size="large" sx={signInBtn} onClick={handleClickSignIn}>Sign in</Button>
            </Box>

        </FormLayout>
    )
}

export default SignInForm;