import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";


interface HeroContactDetailsType {
    icon: any,
    link: string
}

export const HeroContactDetails: HeroContactDetailsType[] =[
    {
        icon: AiFillGithub,
        link: "https://github.com/YARE0909"
    },
    {
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/pradyumna-d-95a88123b/"
    },
    {
        icon: AiOutlineTwitter,
        link: "https://twitter.com/PradyumnaD7"
    },
]