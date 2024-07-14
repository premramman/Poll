import Illustration from "../../components/Illustration";
import SignInForm from "../../components/SignInForm";
import SignInLayout from "../../layouts/SignInLayout";

function SignIn() {
    const illustration = <Illustration type="sign_in" />;

    return (
        <SignInLayout illustration={illustration}>
            <SignInForm />
        </SignInLayout>
    )
}

export default SignIn;