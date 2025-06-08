import Image from "next/image";
import styles from "./HomePageCards.module.css";
import Link from "next/link";
import { silkscreen } from "@/utils/fonts";

type Params = {
  title: string;
  link: string;
  image: string;
};

export default function HomePageCards(params: Params) {
  return (
    <Link href={params.link} className={`center-container ${styles.container}`}>
      <p className={`${silkscreen.className}`}>{params.title}</p>
      <hr className={styles.hr} />
      <div className={`center-container ${styles.img_container}`}>
        <Image
          className={styles.image}
          src={params.image}
          alt="Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );
}
