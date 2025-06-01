import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`center-container content-container tab-content-container`}>
      <TabHeader title="ABOUT" image="/tree.png" />
      <main className={`center-container inner-content ${styles.main}`}>
        <div>
          <p>
            <strong>Email</strong>: alexfangsw@gmail.com
          </p>
          <p>
            <strong>GitHub</strong>:{" "}
            <Link href={"https://github.com/AlexFangSW"}>
              <u>AlexFangSW</u>
            </Link>
          </p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
    </div>
  );
}
