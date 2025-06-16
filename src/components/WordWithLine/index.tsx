import styles from "./WordWithLine.module.css";

export default function WordWithLine({ content }: { content: string }) {
  return <div className={`${styles.separator}`}>{content}</div>;
}
