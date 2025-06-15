import TabHeader from "@/components/TabHeader";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

function SectionTitle({ title }: { title: string }) {
  return (
    <div className={`center-container ${styles.section_title}`}>
      <h2>{title}</h2>
    </div>
  );
}

function Awards() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="AWARDS" />
      <ul>
        <li>AAA</li>
        <li>AAAAAAAAA</li>
        <li>AAAAAAAAAAAAAAA</li>
      </ul>
    </div>
  );
}

function Jobs() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="JOBS" />
      <div>
        <div>AAAAAAAAAAAAAAA</div>
        <div>AAAAAAAAAAAAAAA</div>
        <div>AAAAAAAAAAAAAAA</div>
        <div>AAAAAAAAAAAAAAA</div>
      </div>
    </div>
  );
}

function DummyIcons() {
  const list = [];
  for (let index = 0; index < 20; index++) {
    list.push(
      <Link key={`icon-${index}`} href="https://skillicons.dev">
        <Image
          src="/tool_icons/NeoVim-Dark.svg"
          alt="Neovim"
          width={50}
          height={50}
        />
      </Link>,
    );
  }
  return (
    <div className={`${styles.icon_container} center-container`}>{list}</div>
  );
}

function Tools() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="TOOLS" />
      <h3>Backend</h3>
      <DummyIcons />
      <h3>Frontend</h3>
      <DummyIcons />
      <h3>Others</h3>
      <DummyIcons />
    </div>
  );
}

export default function Page() {
  return (
    <div
      className={`center-container tab-content-container ${styles.container}`}
    >
      <TabHeader title="EXPERIENCE" image="/tree.png" />
      <main className={`center-container inner-content ${styles.title_gap}`}>
        <Tools />
        <Jobs />
        <Awards />
      </main>
    </div>
  );
}
