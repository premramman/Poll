import { object, string } from "yup";

const schema = object({
    username: string().label('Username').required(),
    email: string().label('Email').email().required(),
    password: string().label('Password').required()
});

export default schema;