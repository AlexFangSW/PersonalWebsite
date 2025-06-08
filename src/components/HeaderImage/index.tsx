import Image from "next/image";
import styles from "./HeaderImage.module.css";

type Params = {
  image: string;
};

export default function HeaderImage(params: Params) {
  return (
    <div className={`center-container ${styles.container}`}>
      <Image
        src={params.image}
        alt="Image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
