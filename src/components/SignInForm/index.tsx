import { Box, Button, TextField } from '@mui/material';
import { formButtonBox, signInBtn, createAccountBtn, forgotPwdBtn } from './styles';
import GLOBALS from '../../data/constants/globals';
import FormLayout from '../../layouts/FormLayout';
import FormTitle from '../FormTitle';
import PasswordField from '../PasswordField';
import RelatedFieldLayout from '../../layouts/RelatedFieldLayout';

function SignInForm() {
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
                <Button size="large" sx={createAccountBtn}>Create Account</Button>
                <Button variant="contained" size="large" sx={signInBtn}>Sign in</Button>
            </Box>

        </FormLayout>
    )
}

export default SignInForm;