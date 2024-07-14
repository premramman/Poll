import PasswordStrengthBar from "react-password-strength-bar";
import "./index.css";

interface Props {
    password: string
}

function PasswordMeter({ password }: Props) {
    const prefix = "Strength:";
    const scoreWords = [`${prefix} weak`, `${prefix} weak`, `${prefix} okay`, `${prefix} good`, `${prefix} strong`];
    return <PasswordStrengthBar password={password} scoreWordClassName="score-word" scoreWords={scoreWords} />
}

export default PasswordMeter;