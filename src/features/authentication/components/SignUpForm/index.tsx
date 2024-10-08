import { Box, Button, TextField } from '@mui/material';
import { formButtonBox } from './styles';
import GLOBALS from '../../../../data/constants/globals';
import FormLayout from '../../../../layouts/FormLayout';
import FormTitle from '../../../../components/FormTitle';
import PasswordField from '../../../../components/PasswordField';
import RelatedFieldLayout from '../../../../layouts/RelatedFieldLayout';
import { KeyboardEvent, useState } from 'react';
import PasswordMeter from '../../../../components/PasswordMeter';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import UsernameCheckField from '../../../../components/UsernameCheckField';

interface FormData {
    username: string,
    email: string,
    password: string
}

function SignUpForm() {
    const navigate = useNavigate();

    const handleClickSignIn = () => navigate("/signin");

    const [password, setPassword] = useState("");
    const handlePasswordChange = (e: KeyboardEvent<HTMLInputElement>) => setPassword((e.target as HTMLInputElement).value);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormLayout>
                <FormTitle title="Create Account" subTitle={`sign up to become a ${GLOBALS.APP.NAME} family member`} />

                <UsernameCheckField label="Username"
                    {...register("username")}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    isValid={true}
                />

                <TextField label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <RelatedFieldLayout>
                    <PasswordField label="Password"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        onKeyUp={handlePasswordChange}
                    />

                    <PasswordMeter password={password} />
                </RelatedFieldLayout>

                <Box sx={formButtonBox}>
                    <Button size="large" onClick={handleClickSignIn}>Already a member? Sign in</Button>
                    <Button variant="contained" size="large" type="submit">Create</Button>
                </Box>
            </FormLayout>
        </form>
    )
}

export default SignUpForm;