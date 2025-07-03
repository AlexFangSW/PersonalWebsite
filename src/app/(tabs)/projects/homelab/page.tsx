import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";

function Links() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        <li>
          <a
            href="https://blog.alexfangsw.com/blogs/9/my-homelab-setup"
            target="_blank"
          >
            Blog Post: <u>My Homelab Setup</u>
          </a>
        </li>
      </ul>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>Local infrastructure that hosts my personal projects.</p>
    </>
  );
}

function TechStack() {
  return (
    <>
      <h2>Tech stack</h2>
      <h3>Hardware</h3>
      <ul>
        <li>
          Server
          <ul>
            <li>CPU: Intel(R) Core(TM) i5-14500</li>
            <li>RAM: 64G</li>
            <li>Storage: 1T M.2 NVMe</li>
          </ul>
        </li>
        <li>
          VPN server:
          <blockquote>
            <p>My old PC, currently just runs the VPN server</p>
          </blockquote>
          <ul>
            <li>CPU: Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz</li>
            <li>RAM: 8G</li>
            <li>
              Storage:
              <ul>
                <li>128G SSD</li>
                <li>1T HDD</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h3>OS</h3>
      <ul>
        <li>Ubuntu 24.04</li>
      </ul>
      <h3>DNS</h3>
      <ul>
        <li>
          <strong>External</strong> Domain registration and DNS provider:{" "}
          <strong>CloudFlare</strong>
          <ul>
            <li>
              Uses <strong>CloudFlare API</strong> and <strong>ipify</strong> to
              implement <strong>DDNS</strong>, updates DNS record every 5
              minutes, runs locally as a docker container
            </li>
          </ul>
        </li>
        <li>
          <strong>Local</strong> DNS: <strong>CoreDNS</strong>
          <ul>
            <li>Self hosted with docker</li>
            <li>
              Used for registering domains that are only accessible in my local
              network
            </li>
          </ul>
        </li>
      </ul>
      <h3>VPN</h3>
      <ul>
        <li>
          <strong>OpenVPN</strong> with TUN interface
        </li>
      </ul>
      <h3>Container orchestration</h3>
      <ul>
        <li>
          <strong>K3s</strong> with <strong>Cilium</strong> as kube-proxy
          replacement
        </li>
        <li>
          <strong>Rancher</strong> as the UI for <strong>K3s</strong>
        </li>
      </ul>
      <h3>Persistent Storage</h3>
      <ul>
        <li>
          <strong>Longhorn</strong>
        </li>
        <li>
          <strong>Rancher Local-Path</strong>, pre-installed with k3s
        </li>
        <li>
          <strong>NFS server</strong> for storing backup
        </li>
      </ul>
      <h3>API Gateway</h3>
      <ul>
        <li>
          <strong>Istio</strong> and <strong>K8s gateway API</strong> for
          external traffic
        </li>
        <li>
          <strong>Traefik</strong> for internal use ( domains accessible in LAN
          )
        </li>
        <li>
          Automated TLS with <strong>Cert-manager</strong> and{" "}
          <strong>Let's encrypt</strong> with DNS challenge
        </li>
      </ul>
      <h3>CI/CD</h3>
      <ul>
        <li>
          <strong>Drone CI</strong>
        </li>
        <li>
          <strong>Helm</strong>: stored in a git repository
        </li>
        <li>
          <strong>Harbor</strong>: self hosted image registry
        </li>
      </ul>
      <h3>Monitoring</h3>
      <ul>
        <li>
          Hardware and resources:
          <ul>
            <li>
              <strong>Prometheus</strong>: collect metrics
            </li>
            <li>
              <strong>Grafana</strong>: visualization
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

function Architecture() {
  return (
    <>
      <h2>Architecture</h2>
      <img
        src="https://raw.githubusercontent.com/AlexFangSW/Typephoon_api/refs/heads/master/doc/pics/typing_game_design-Architecture.drawio.svg"
        alt="Image"
        width={"100%"}
        style={{ objectFit: "contain" }}
      />
    </>
  );
}

function Details() {
  return (
    <>
      <h2>Details</h2>
      <p>
        For more details, please refer to the{" "}
        <a
          href="https://blog.alexfangsw.com/blogs/9/my-homelab-setup"
          target="_blank"
        >
          <u>Blog Post</u>
        </a>
      </p>
    </>
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader title="Homelab" image="/homelab.png" />
      <main className={`${styles.content} inner-content`}>
        <Links />
        <About />
        <TechStack />
        <Details />
      </main>
    </div>
  );
}
