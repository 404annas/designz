import Home from "@/app/Home/Home";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: { absolute: "Luxury Interior Design Services London | Dwell Rich" },
  description:
    "Luxury interior design, turnkey architectural build solutions, and high-end residential feasibility planning for London investors, developers, and private clients.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Interior Design Services London | Dwell Rich",
    description:
      "Turnkey architectural build solutions and high-end residential feasibility planning for London private clients, investors, and developers.",
    url: siteConfig.url,
  },
};

export default function Page() {
  return <Home />;
}
