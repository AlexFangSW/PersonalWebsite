"use client";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavIcon({ img, href }: { img: string; href: string }) {
  return (
    <Link href={href}>
      <div className={`${styles.icon} center-container`}>
        <Image src={img} alt="Image" fill style={{ objectFit: "contain" }} />
      </div>
    </Link>
  );
}

function getPrev() {
  const pathname = usePathname();
  let pathItems = pathname.split("/");
  if (pathItems.length === 1) {
    return "/";
  }
  const lastLocation = `/${pathItems.slice(0, -1).join("/")}`;
  return lastLocation;
}

export default function Navbar() {
  const upOneLevel = getPrev();
  return (
    <nav className={`${styles.nav}`}>
      <div className={`center-container ${styles.nav_container}`}>
        <NavIcon img="/left.svg" href={upOneLevel} />
        <NavIcon img="/home.svg" href="/" />
      </div>
    </nav>
  );
}
