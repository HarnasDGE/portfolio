import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { LetsWorkTogether } from "../components/LetsWorkTogether";
import { WhatIDo } from "../components/WhatIDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <LetsWorkTogether />
      <FeaturedProjects />
    </>
  );
}
