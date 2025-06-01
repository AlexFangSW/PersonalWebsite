import TabHeader from "@/components/TabHeader";

export default function Page() {
  return (
    <div className={`center-container content-container tab-content-container`}>
      <TabHeader title="EXPERIENCE" image="/tree.png" />
      <main className={`center-container inner-content`}>
        <p>Experience</p>
      </main>
    </div>
  );
}
