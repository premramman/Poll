import { Box, Button, TextField } from '@mui/material';
import { formButtonBox, signInBtn, createAccountBtn } from './styles';
import GLOBALS from '../../data/constants/globals';
import FormLayout from '../../layouts/FormLayout';
import FormTitle from '../FormTitle';
import PasswordField from '../PasswordField';
import RelatedFieldLayout from '../../layouts/RelatedFieldLayout';

function SignUpForm() {
    return (
        <FormLayout>
            <FormTitle title="Create Account" subTitle={`sign up to become a ${GLOBALS.APP.NAME} family member`} />

            <TextField label="Email" name="email" />

            <RelatedFieldLayout>
                <PasswordField />
            </RelatedFieldLayout>

            <Box sx={formButtonBox}>
                <Button size="large" sx={signInBtn}>Already a member? Sign in</Button>
                <Button variant="contained" size="large" sx={createAccountBtn}>Create</Button>
            </Box>

        </FormLayout>
    )
}

export default SignUpForm;