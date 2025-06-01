import { silkscreen } from "@/utils/fonts";
import HeaderImage from "@/components/HeaderImage";
import styles from "./TabHeader.module.css";

type Params = {
  title: string;
  image: string;
};

export default function TabHeader(params: Params) {
  return (
    <header className={`center-container inner-content ${styles.header}`}>
      <h1 className={`${silkscreen.className}`}>{params.title}</h1>
      <HeaderImage image={params.image} />
    </header>
  );
}
