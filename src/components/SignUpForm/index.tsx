import { Box, Button, TextField } from '@mui/material';
import { formButtonBox } from './styles';
import GLOBALS from '../../data/constants/globals';
import FormLayout from '../../layouts/FormLayout';
import FormTitle from '../FormTitle';
import PasswordField from '../PasswordField';
import RelatedFieldLayout from '../../layouts/RelatedFieldLayout';
import { KeyboardEvent, useState } from 'react';
import PasswordMeter from '../PasswordMeter';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
    email: string,
    password: string
}

function SignUpForm() {
    const navigate = useNavigate();

    const schema = object({
        email: string().label('Email').email().required(),
        password: string().label('Password').required()
    });

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

                <TextField label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <RelatedFieldLayout>
                    <PasswordField
                        register={register}
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