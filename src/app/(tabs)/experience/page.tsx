import TabHeader from "@/components/TabHeader";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import WordWithLine from "@/components/WordWithLine";

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

function JobInfo({
  time,
  company,
  title,
  children,
}: Readonly<{
  time: string;
  company: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={`center-container ${styles.job_info_container}`}>
      <div
        className={`center-container ${styles.job_info_title} ${styles.full_width}`}
      >
        <span>
          <strong>{time}</strong>
        </span>
        <span>
          Company: <strong>{company}</strong>
        </span>
        <span>
          Title: <strong> {title}</strong>
        </span>
      </div>
      <WordWithLine content="Job Content" />
      <div>{children}</div>
    </div>
  );
}

function Jobs() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="JOBS" />
      <div className={`${styles.full_width} ${styles.job_info_list}`}>
        <JobInfo time="9999-11-11~9999-11-11" company="GoBig" title="Hmmm...">
          <ul>
            <li>aaabbbccc</li>
            <ul>
              <li>aaabbbccc</li>
              <li>aaabbbccc</li>
            </ul>
            <li>aaabbbccc</li>
            <li>aaabbbccc</li>
          </ul>
        </JobInfo>
        <JobInfo time="9999-11-11~9999-11-11" company="GoBig" title="Hmmm...">
          <ul>
            <li>aaabbbccc</li>
            <ul>
              <li>aaabbbccc</li>
              <li>aaabbbccc</li>
            </ul>
            <li>aaabbbccc</li>
            <li>aaabbbccc</li>
          </ul>
        </JobInfo>
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
