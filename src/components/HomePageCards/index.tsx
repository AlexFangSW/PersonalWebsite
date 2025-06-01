import Image from "next/image";
import styles from "./HomePageCards.module.css";
import Link from "next/link";
import { silkscreen } from "@/utils/fonts";
import { CONTENT_WIDTH } from "@/utils/constants";

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
      <Image
        className={styles.image}
        src={params.image}
        alt="Image"
        width={CONTENT_WIDTH}
        height={CONTENT_WIDTH}
      />
    </Link>
  );
}
