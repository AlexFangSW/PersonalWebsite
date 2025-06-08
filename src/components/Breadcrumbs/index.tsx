"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

export default function Beadcrumbs() {
  const pathname = usePathname();
  let pathItems = pathname.split("/");

  // Get all links
  let pathLinks = pathItems.map((name, index) => {
    const path = pathItems.slice(0, index + 1).join("/");
    if (index === 0) {
      return (
        <Link key={`beadcrumb-${index}`} href={"/"}>
          home
        </Link>
      );
    }
    return (
      <Link key={`beadcrumb-${index}`} href={path}>
        {name}
      </Link>
    );
  });

  // Fill in seperator
  return (
    <div className={`${styles.breadcrumbs}`}>
      {pathLinks.flatMap((item, index) =>
        index < pathLinks.length - 1 ? [item, ">"] : item,
      )}
    </div>
  );
}
