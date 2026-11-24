import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  portraitFit: "contain" | "cover";
  profileTitle: string;
  paragraphs: string[];
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mahendra Chaudhary",
    role: "Founder and Managing Director",
    image: "/team/mahendra-chaudhary.png",
    portraitFit: "contain",
    profileTitle: "Founder and Managing Director",
    paragraphs: [
      "Maction is the result of Mahendra’s conviction to achieve excellence in market research. He has a solid passion for market research and 28 years of experience working on a diverse set of research projects.",
      "Before establishing Maction, he spent considerable time in both commercial and social and development sector research. He has advised world-class companies such as HUL, Reckitt Benckiser, PepsiCo, Coca-Cola, LG, HP, UNICEF and many more. He has handled projects in education, automobile, telecom, real estate, agriculture, insurance, banking, and rural and social development.",
      "Down to earth and an expert in the field of market research, he has built healthy and long-lasting relationships with clients, which is why Maction enjoys an exceptionally high rate of repeat business from its distinguished clients.",
      "Mahendra holds an MBA and is certified in Marketing Research from the University of Georgia. He enjoys spending time with his family, is an early riser and has interests in reading and yoga. He founded Maction in 2015 with a vision to provide holistic research services to clients across sectors.",
    ],
  },
  {
    name: "Sekar Murugesan",
    role: "Executive Director",
    image: "/team/sekar-murugesan.png",
    portraitFit: "contain",
    profileTitle: "Executive Director – Insights and Analytics",
    paragraphs: [
      "Sekar serves as Executive Director for Maction. He is a research and analytics professional with over 32 years of experience. His core competencies include quantitative data analytics, advanced statistical analysis, primary and secondary research, with substantial experience in qualitative research.",
      "At Maction, he is responsible for end-to-end project execution and driving the strategic initiatives of the organization. He previously worked with various market research, analytics and consulting organizations across consumer research, business research, and the social and development sectors.",
      "Sekar is highly skilled at interpreting research findings, generating insights and translating statistical results into actionable business plans that drive organizational growth.",
      "He has extensive experience working with clients in India, Singapore, Malaysia, Canada, UAE and the USA, and has led and trained research and analytics teams.",
      "Sekar holds a postgraduate degree in Statistics and an MBA in Marketing and Systems. He enjoys spending time with his family, listening to music and learning new things.",
    ],
  },
  {
    name: "Yash Chaudhary",
    role: "Vice President – USA Office",
    image: "/team/yash-chaudhary.png",
    portraitFit: "contain",
    profileTitle: "Vice President – USA Office",
    paragraphs: [
      "Yash is the Vice President of Maction’s USA office operations and the Branch Head. He is an executive management professional with extensive management experience. He is committed to maintaining complete project control while delivering exceptional results and exceeding client expectations.",
      "He excels at client retention and transparent communication. Yash has developed and refined his management skills while working for the provincial government of the USA and with a major transportation company.",
      "He believes strongly in developing staff personally and professionally and in helping teams succeed together.",
      "Yash is also a self-taught programmer who enjoys data analytics projects. In his leisure time, he is an avid reader of non-fiction, with reading supporting and extending his professional skill set.",
    ],
  },
  {
    name: "Dhaval Bundela",
    role: "Assistant Manager – Operations",
    image: "/team/dhaval-bundela.jpeg",
    portraitFit: "cover",
    profileTitle: "Assistant Manager – Operations",
    paragraphs: [
      "Dhaval Bundela is a seasoned professional in field operations and quality assurance within the market research industry. With extensive experience managing large-scale fieldwork, Dhaval specializes in ensuring that data collection processes are executed smoothly, efficiently and with the highest level of accuracy.",
      "His expertise includes supervising field teams, implementing strict quality control protocols, conducting on-ground validations and resolving operational challenges in real time. Dhaval is known for his hands-on approach, sharp attention to detail and commitment to maintaining data integrity across diverse project types and geographies.",
      "Holding a Master’s degree in Commerce (M.Com), he combines a strong understanding of business processes with practical field experience. Dhaval plays a critical role in upholding research standards, optimizing field performance and delivering reliable insights to clients through disciplined, quality-driven execution.",
    ],
  },
];

export default function TeamDirectory() {
  return (
    <section id="team" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Maction Team</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Our team
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Meet the experienced researchers, consultants, analysts and operations professionals
            responsible for delivering Maction projects across global markets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`${member.portraitFit === "cover" ? "object-cover" : "object-contain"} object-center transition-transform duration-500 group-hover:scale-[1.02]`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold leading-tight text-slate-950">{member.name}</h3>
                <p className="mt-2 text-sm font-bold text-brand">{member.profileTitle}</p>
                <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600">
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-950 px-6 py-10 text-center text-white md:px-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Get in touch</p>
          <h3 className="mt-3 text-2xl font-black md:text-3xl">Learn how our team can support your project</h3>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Find out more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
