import { CiDollar, CiWallet } from "react-icons/ci";
import { FaSquarePlus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const SidebarData = [
  {
    id: uuidv4(),
    icon: <FaSquarePlus />,
    title: "Dashboard",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <CiWallet />,
    title: "Wallet",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <MdHistory />,
    title: "Records",
    path: "",
    subNav: [
      {
        id: uuidv4(),
        icon: <MdHistory />,
        title: "Earnings",
        path: "",
      },
      {
        id: uuidv4(),
        icon: <MdHistory />,
        title: "Expenses",
        path: "",
      },
      {
        id: uuidv4(),
        icon: <MdHistory />,
        title: "Others",
        path: "",
      },
    ],
  },
  {
    id: uuidv4(),
    icon: <MdHistory />,
    title: "Accounts",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <MdHistory />,
    title: "Shop List",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <CiDollar />,
    title: "Send/Request",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <FiPlus />,
    title: "New Page",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <IoSettingsOutline />,
    title: "Settings",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <IoIosHelpCircleOutline />,
    title: "FAQ & Help",
    path: "",
  },
];

export default SidebarData;
