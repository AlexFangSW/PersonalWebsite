import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

function Contacts() {
  return (
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
  );
}

function AboutMe() {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );
}

function PictureOfMe() {
  return (
    <div className={`center-container ${styles.picture_of_me}`}>
      <Image
        src={"/tree.png"}
        alt="Picture of me"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader title="ABOUT" image="/quill-pixilart.png" />
      <main className={`center-container inner-content ${styles.main}`}>
        <Contacts />
        <AboutMe />
        <PictureOfMe />
      </main>
    </div>
  );
}
