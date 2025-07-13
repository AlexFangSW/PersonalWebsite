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
        Hi, my name is <b>Hao-Yun Fang</b>. I go by <strong>AlexFangSW</strong>{" "}
        on most of my work related accounts (email, github ... etc). If you were
        wondering, SW means study and work.
      </p>
      <p>
        My day job revolves around backend development and managing our
        company's bare metal kubernetes cluster.
      </p>
      <p>
        I enjoy programing and is interested in most things related to
        development, from computer networks, development environments,
        automation, backend to frontend. I continue to learn and improve myself,
        I also have a simple homelab to experiment and host my personal
        projects, this site itself is hosted on my homelab as well.
      </p>
      <p>
        Oh, and I also like drawing, the artworks used on this site are all
        drawn by me :)
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
      </main>
    </div>
  );
}
