"use client";

import Image from "next/image";

interface ClientLogo {
  name: string;
  src: string;
}

const clients: ClientLogo[] = [
  { name: "Yamaha Motor Company", src: "/logos/logo_1.webp" },
  { name: "Ashok Leyland", src: "/logos/logo_2.webp" },
  { name: "Toyota Motor Corporation", src: "/logos/logo_3.webp" },
  { name: "Vodafone Group", src: "/logos/logo_4.webp" },
  { name: "Micro Labs", src: "/logos/logo_5.webp" },
  { name: "National University of Singapore (NUS)", src: "/logos/logo_6.webp" },
  { name: "London Business School", src: "/logos/logo_7.webp" },
  { name: "Melbourne Business School", src: "/logos/logo_8.webp" },
  { name: "Entrepreneurship Development Institute of India (EDII)", src: "/logos/logo_9.webp" },
  { name: "Università Bocconi", src: "/logos/logo_10.webp" },
  { name: "Singapore Management University (SMU)", src: "/logos/logo_11.webp" },
  { name: "University of Louisville", src: "/logos/logo_12.webp" },
  { name: "Adani Group", src: "/logos/logo_13.webp" },
  { name: "Sursagar Dairy", src: "/logos/logo_14.webp" },
  { name: "India Development Foundation (IDF)", src: "/logos/logo_15.webp" },
  { name: "The Energy and Resources Institute (TERI)", src: "/logos/logo_16.webp" },
  { name: "Council on Energy, Environment and Water (CEEW)", src: "/logos/logo_17.webp" },
  { name: "W2 Innovations", src: "/logos/logo_18.webp" },
  { name: "Check An Invoice", src: "/logos/logo_19.webp" },
  { name: "Duke University", src: "/logos/logo_20.webp" },
  { name: "Indian Institutional Ranking Framework (IIRF)", src: "/logos/logo_21.webp" },
  { name: "Gujarat State Petroleum (GSP)", src: "/logos/logo_22.webp" },
  { name: "SIS Prosegur", src: "/logos/logo_23.webp" },
  { name: "Wharton School of the University of Pennsylvania", src: "/logos/logo_24.webp" },
  { name: "Vadilal Industries", src: "/logos/logo_25.webp" },
  { name: "Wagh Bakri Tea Group", src: "/logos/logo_26.webp" },
  { name: "Hitachi", src: "/logos/logo_27.webp" },
  { name: "Chinese University of Hong Kong (CUHK)", src: "/logos/logo_28.webp" },
  { name: "Nanyang Technological University (NTU)", src: "/logos/logo_29.webp" },
  { name: "Ernst & Young (EY)", src: "/logos/logo_30.webp" },
  { name: "Cairn Oil & Gas", src: "/logos/logo_31.webp" },
  { name: "Pegasi Communications", src: "/logos/logo_32.webp" },
  { name: "Times Internet", src: "/logos/logo_33.webp" },
  { name: "SML Isuzu", src: "/logos/logo_34.webp" },
  { name: "Texas Tech University", src: "/logos/logo_35.webp" },
  { name: "University of Michigan", src: "/logos/logo_36.webp" },
  { name: "University of Texas at Austin", src: "/logos/logo_37.webp" },
  { name: "Ayurveda", src: "/logos/ayurveda.png" },
  { name: "The Hong Kong Polytechnic University", src: "/logos/hong-kong-polytechnic.png" },
  { name: "Setco", src: "/logos/setco.svg" },
];

export default function TrustedBy() {
  return (
    <section className="bg-slate-50/50 border-y border-slate-100 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Our Global Clients
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by leading global brands, corporate enterprises, and premier academic institutions across Market Research, FMCG, Healthcare, Retail, and Technology sectors.
          </p>
        </div>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client) => (
            <div 
              key={client.name} 
              className="flex items-center justify-center bg-white p-3 md:p-4 border border-slate-100 rounded-xl shadow-xs hover:shadow-md hover:border-blue-100 transition-all duration-300 group h-28 sm:h-32"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                  quality={90}
                  loading="lazy"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}