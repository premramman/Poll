import signin from "../../assets/Happy student-cuate.svg";
import create_account from "../../assets/Enthusiastic-cuate.svg";

interface ILIST<T> {
    [key: string]: T
}

interface ILLUSTRATION {
    SRC: string,
    ATTRIBUTION_LINK: string,
    ATTRIBUTION_TEXT: string
}

const ILLUSTRATIONS: ILIST<ILLUSTRATION> = {
    SIGN_IN: {
        SRC: signin,
        ATTRIBUTION_LINK: "https://storyset.com/education",
        ATTRIBUTION_TEXT: "Education illustrations by Storyset"
    },
    CREATE_ACCOUNT: {
        SRC: create_account,
        ATTRIBUTION_LINK: "https://storyset.com/people",
        ATTRIBUTION_TEXT: "People illustrations by Storyset"
    }
}

export default ILLUSTRATIONS;