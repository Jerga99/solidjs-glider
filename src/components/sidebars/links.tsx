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
  name: "Notifications",
  href: "/",
  icon: () => <IoNotificationsCircleOutline size={SIZE} />
}, {
  name: "More",
  href: "/",
  icon: () => <CgMoreO size={SIZE} />
}, {
  name: "Discover",
  href: "/", 
  icon: () => <RiMapCompassDiscoverLine size={SIZE} />
}]
