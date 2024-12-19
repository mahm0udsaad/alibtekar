import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { ProductAluminumWindows } from "@/components/product-aluminum-windows";
import { ProductMetalDoors } from "@/components/product-metal-doors";
import { ProductGlassFacades } from "@/components/product-glass-facades";
import { ProductWPCDoors } from "@/components/product-wpc-doors";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <ProductAluminumWindows />
      <ProductMetalDoors />
      <ProductGlassFacades />
      <ProductWPCDoors />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
