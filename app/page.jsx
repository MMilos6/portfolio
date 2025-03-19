import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";

export const metadata = { title: "Miloš Milovanović - Portfolio" };

const index = () => { return <Hero /> };

export default dynamic(() => Promise.resolve(index), { ssr: false });