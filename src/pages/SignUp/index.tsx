import Illustration from "../../components/Illustration";
import SignUpForm from "../../components/SignUpForm";
import SignInLayout from "../../layouts/SignInLayout";

function SignUp() {
    const illustration = <Illustration type="create_account" />;

    return (
        <SignInLayout illustration={illustration}>
            <SignUpForm />
        </SignInLayout>
    )
}

export default SignUp;