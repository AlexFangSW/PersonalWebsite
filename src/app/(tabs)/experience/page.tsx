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

function Education() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="Education" />
      <ul>
        <li>
          <b>Bachelor's degree</b> at{" "}
          <b>
            NKUST ( National Kaohsiung University Of Science And Technology )
          </b>
          , Department of Computer Science & Information Engineering
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
              Develop{" "}
              <b>
                backend services ( API / Message Queue Publisher, Consumer )
              </b>
            </li>
            <li>
              Develop <b>AI agents</b> with <b>LangChain</b> / <b>LangGraph</b>
            </li>
            <li>
              Develop <b>MCP servers</b> and{" "}
              <b>automated MCP server creation pipeline</b>
            </li>
            <li>
              Develop internal <b>python library</b>
            </li>
            <li>
              Develop <b>image search</b> data pipeline
            </li>
            <li>
              Maintain <b>baremetal K8s cluster</b> (RKE2, K3s) and{" "}
              <b>CI/CD pipeline</b>
            </li>
            <li>Develop crawler maintenance tools</li>
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
              {/*
              <li>
                <a href="https://oaphub.ai/mcp">
                  {" "}
                  <u>Open Agent Platform</u>
                </a>
              </li>
              */}
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
              Develop <b>web crawlers</b> and <b>APIs</b> for crawler services
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
          src="/tool_icons/neovim.svg"
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

type ToolInfo = {
  name: string;
  href: string;
  type?: string;
  width?: number;
  height?: number;
};

function ToolIcons({ toolInfos }: { toolInfos: ToolInfo[] }) {
  const toolIconList = toolInfos.map((info, index) => {
    const fileType = info.type ? info.type : "svg";
    const width = info.width ? info.width : 50;
    const height = info.height ? info.height : 50;
    return (
      <Link
        className={`${styles.icon} center-container`}
        key={index}
        href={info.href}
        target="_blank"
      >
        <Image
          src={`/tool_icons/${info.name}.${fileType}`}
          alt={info.name}
          width={width}
          height={height}
        />
      </Link>
    );
  });
  return (
    <div className={`${styles.icon_container} center-container`}>
      {toolIconList}
    </div>
  );
}

function otherTools(): ToolInfo[] {
  return [
    {
      name: "linux",
      href: "https://www.kernel.org/",
    },
    {
      name: "ubuntu",
      href: "https://ubuntu.com/",
    },
    {
      name: "git",
      href: "https://git-scm.com/",
    },
    {
      name: "docker",
      href: "https://www.docker.com/",
    },
    {
      name: "kubernetes",
      href: "https://kubernetes.io/",
    },
    {
      name: "istio",
      href: "https://istio.io/",
    },
    {
      name: "helm",
      href: "https://helm.sh/",
    },
    {
      name: "droneci",
      href: "https://www.drone.io/",
    },
    {
      name: "k3s",
      href: "https://k3s.io/",
    },
    {
      name: "rancher",
      href: "https://www.rancher.com/",
    },
    {
      name: "prometheus",
      href: "https://prometheus.io/",
    },
    {
      name: "grafana",
      href: "https://grafana.com/",
    },
    {
      name: "envoyproxy",
      href: "https://www.envoyproxy.io/",
    },
    {
      name: "coredns",
      href: "https://coredns.io/",
    },
    {
      name: "goharbor",
      href: "https://goharbor.io/",
      type: "png",
    },
    {
      name: "kibana",
      href: "https://www.elastic.co/kibana",
    },
    {
      name: "logstash",
      href: "https://www.elastic.co/logstash",
      width: 40,
      height: 40,
    },
    {
      name: "filebeat",
      href: "https://www.elastic.co/beats/filebeat",
      width: 40,
      height: 40,
    },
    {
      name: "lua",
      href: "https://www.lua.org/",
    },
  ];
}

function frontendTools(): ToolInfo[] {
  return [
    {
      name: "javascript",
      href: "",
    },
    {
      name: "typescript",
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "html",
      href: "",
    },
    {
      name: "css",
      href: "",
    },
    {
      name: "sass",
      href: "https://sass-lang.com/",
    },
    {
      name: "react",
      href: "https://react.dev/",
    },
    {
      name: "nextjs",
      href: "https://nextjs.org/",
    },
  ];
}

function backendTools(): ToolInfo[] {
  return [
    {
      name: "python",
      href: "https://www.python.org/",
    },
    {
      name: "golang",
      href: "https://go.dev/",
    },
    {
      name: "pytest",
      href: "https://docs.pytest.org/en/stable/",
    },
    {
      name: "fastapi",
      href: "https://fastapi.tiangolo.com/",
    },
    {
      name: "postgresql",
      href: "https://www.postgresql.org/",
    },
    {
      name: "redis",
      href: "https://redis.io/",
    },
    {
      name: "sqlite",
      href: "https://sqlite.org/",
    },
    {
      name: "elasticsearch",
      href: "https://www.elastic.co/elasticsearch",
    },
    {
      name: "rabbitmq",
      href: "https://www.rabbitmq.com/",
    },
    {
      name: "langchain",
      href: "https://www.langchain.com/",
    },
    {
      name: "langgraph",
      href: "https://www.langchain.com/langgraph",
      type: "png",
    },
  ];
}

function Tools() {
  return (
    <div className={`center-container inner-content ${styles.title_gap}`}>
      <SectionTitle title="TOOLS" />
      <h3>Backend</h3>
      <ToolIcons toolInfos={backendTools()} />
      <h3>Frontend</h3>
      <ToolIcons toolInfos={frontendTools()} />
      <h3>Others</h3>
      <ToolIcons toolInfos={otherTools()} />
    </div>
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader title="EXPERIENCE" image="/anvil-pixilart.png" />
      <main className={`center-container inner-content ${styles.title_gap}`}>
        <Tools />
        <Jobs />
        <Education />
      </main>
    </div>
  );
}
