// ICONS
import { CgProfile } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";

export const dataMenuToggle = [
        {
            name: "Tableau de bord",
            to: '/toggleLogin',
            icon: MdSpaceDashboard,
        },
        {
            name: "Mon profil",
            to: '/profile',
            icon: CgProfile,
        }
];
