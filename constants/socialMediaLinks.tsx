import { IconBrandTwitter, TablerIconProps, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons";
import { ReactNode } from "react";

type SocialMediaLinks = {
    icon: ReactNode,
    link: string,
}

const iconProps: TablerIconProps = { size: 18, stroke: 1.5 }

export const socialMediaLinks: SocialMediaLinks[] = [
    {
        "icon": <IconBrandTwitter {...iconProps} />,
        "link": "https://twitter.com/"
    },
    {
        "icon": <IconBrandYoutube {...iconProps} />,
        "link": "https://www.youtube.com/"
    },
    {
        "icon": <IconBrandInstagram {...iconProps} />,
        "link": "https://www.instagram.com/"
    }
];