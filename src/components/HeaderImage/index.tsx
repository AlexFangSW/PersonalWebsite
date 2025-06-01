import Image from "next/image";
import styles from "./HeaderImage.module.css";
import { CONTENT_WIDTH } from "@/utils/constants";

type Params = {
  image: string;
};

export default function HeaderImage(params: Params) {
  return (
    <div className={`center-container ${styles.container}`}>
      <Image
        src={params.image}
        alt="Image"
        width={CONTENT_WIDTH}
        height={CONTENT_WIDTH}
      />
    </div>
  );
}
