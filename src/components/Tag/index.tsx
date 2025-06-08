import styles from "./Tag.module.css";

type Params = {
  text: string;
  colorHex: string;
};

export default function Tag(params: Params) {
  return (
    <div
      className={`center-container ${styles.container} }`}
      style={{ color: params.colorHex, borderColor: params.colorHex }}
    >
      {" "}
      {params.text}{" "}
    </div>
  );
}
