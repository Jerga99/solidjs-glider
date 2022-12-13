import { CgProfile, CgMoreO } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassDiscoverLine } from "solid-icons/ri";
import { AiOutlineHome } from "solid-icons/ai";

const SIZE = 24;

export const links = [{
  name: "Home",
  href: "/",
  icon: () => <AiOutlineHome size={SIZE} />
}, {
  name: "Profile",
  href: "/profile",
  icon: () => <CgProfile size={SIZE} />
}, {
  name: "More",
  href: "/more",
  icon: () => <CgMoreO size={SIZE} />
}, {
  name: "Login", // Notification
  href: "/auth/login", // /notification
  icon: () => <IoNotificationsCircleOutline size={SIZE} />
}, {
  name: "Register", // Discover
  href: "/auth/register", // /discover
  icon: () => <RiMapCompassDiscoverLine size={SIZE} />
}]
