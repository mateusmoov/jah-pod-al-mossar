import Intro from "@/components/jpa";
import SectionDivider from "@/components/section-divider";
import Oracao from "@/components/oracao";
import Sindicate from "@/components/sindicate";
import Almosso from "@/components/posso-almossar";
import HundredDays from "@/components/hundred-days";
import Stack from "@/components/stack";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <Oracao />
      <Sindicate />
      <Almosso />
      <HundredDays />
      <Stack />
      <Footer />
    </main>
  );
}
