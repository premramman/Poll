import { Box, Button, TextField } from '@mui/material';
import { formButtonBox } from './styles';
import GLOBALS from '../../data/constants/globals';
import FormLayout from '../../layouts/FormLayout';
import FormTitle from '../FormTitle';
import PasswordField from '../PasswordField';
import RelatedFieldLayout from '../../layouts/RelatedFieldLayout';
import { ChangeEvent, useState } from 'react';
import PasswordMeter from '../PasswordMeter';

function SignUpForm() {
    const [password, setPassword] = useState("");
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <FormLayout>
            <FormTitle title="Create Account" subTitle={`sign up to become a ${GLOBALS.APP.NAME} family member`} />

            <TextField label="Email" name="email" />

            <RelatedFieldLayout>
                <PasswordField onChange={handlePasswordChange} />
                <PasswordMeter password={password} />
            </RelatedFieldLayout>

            <Box sx={formButtonBox}>
                <Button size="large">Already a member? Sign in</Button>
                <Button variant="contained" size="large">Create</Button>
            </Box>

        </FormLayout>
    )
}

export default SignUpForm;