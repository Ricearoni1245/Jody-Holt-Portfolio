import React, { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer"; 

export default function App() {
const sections = useMemo(() => ["home", "projects", "experience"], []);
const refs = useRef<Record<string, HTMLElement | null>>({});
const [active, setActive] = useState<string>(sections[0]);


useEffect(() => {
const map: Record<string, HTMLElement | null> = {};
sections.forEach((id) => (map[id] = document.getElementById(id)));
refs.current = map;


const io = new IntersectionObserver(
(entries) => {
entries.forEach((e) => {
if (e.isIntersecting) setActive(e.target.id);
});
},
{ rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 1] }
);


Object.values(map).forEach((el) => el && io.observe(el));
return () => io.disconnect();
}, [sections]);


const handleNav = (id: string) => {
const el = refs.current[id];
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};


return (
<div className="min-h-screen bg-bg text-text">
<Navbar onNav={handleNav} />


<main>
<Section id="home"><Hero /></Section>
<GradientBand />
<Section id="projects"><Projects /></Section>
<GradientBand />
<Section id="experience"><Resume /></Section>
</main>


<Footer />


{/* Active section indicator (optional) */}
<div className="fixed bottom-4 right-4 rounded-full border border-secondary bg-bg/80 px-3 py-1 text-sm text-text/80 shadow">{active.toUpperCase()}</div>
</div>
);
}


function GradientBand() {
return <div className="h-px bg-gradient-to-r from-secondary via-primary/60 to-secondary" />;
}


