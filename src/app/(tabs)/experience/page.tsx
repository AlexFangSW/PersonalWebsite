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

function Education() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="Education" />
      <ul>
        <li>
          <b>Bachelor's degree</b> at <b>NKUST</b>, Department of Computer
          Science & Information Engineering
        </li>
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
        <JobInfo time="2022-07 ~ Now" company="BigGo" title="Software Enginer">
          <ul>
            <li>
              Develop <b>backend microservices</b>
            </li>
            <li>
              Develop internal <b>python library</b>
            </li>
            <li>
              Develop <b>MCP servers</b> and{" "}
              <b>automated MCP server creation pipeline</b>
            </li>
            <li>Develop crawler maintenance tools</li>
            <li>
              Maintain <b>baremetal K8s cluster</b> (RKE2, K3s) and{" "}
              <b>CI/CD pipeline</b>
            </li>
            <li>Publicly accessible projects: </li>
            <ul>
              <li>
                <a href="https://github.com/OpenAgentPlatform/Dive">
                  <u>Dive</u>
                </a>
              </li>
              <li>
                <a href="https://apps.shopify.com/birse-visual-search">
                  <u>BIRSE: Visual Search</u>
                </a>
              </li>
              <li>
                <a href="https://biggo.com.tw/agent">
                  {" "}
                  <u>BigGo AI Shopping Assistant</u>
                </a>
              </li>
              <li>
                <a href="https://oaphub.ai/mcp">
                  {" "}
                  <u>Open Agent Platform</u>
                </a>
              </li>
            </ul>
          </ul>
        </JobInfo>
        <JobInfo
          time="2022-03 ~ 2022-07"
          company="BigGo"
          title="Software Enginer Intern"
        >
          <ul>
            <li>
              Develop <b>web crawlers</b> and <b>APIs</b> crawler services
            </li>
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
    <div className={`center-container tab-content-container`}>
      <TabHeader title="EXPERIENCE" image="/tree.png" />
      <main className={`center-container inner-content ${styles.title_gap}`}>
        <Tools />
        <Jobs />
        <Education />
        <Awards />
      </main>
    </div>
  );
}
