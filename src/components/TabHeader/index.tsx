import { silkscreen } from "@/utils/fonts";
import HeaderImage from "@/components/HeaderImage";
import styles from "./TabHeader.module.css";
import Beadcrumbs from "../Breadcrumbs";

type Params = {
  title: string;
  image: string;
};

export default function TabHeader(params: Params) {
  return (
    <header className={`center-container inner-content ${styles.header}`}>
      <h1 className={`${silkscreen.className}`}>{params.title}</h1>
      <Beadcrumbs />
      <HeaderImage image={params.image} />
    </header>
  );
}
