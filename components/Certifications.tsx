import React from "react";
import { certifications, leadership, publications } from "@/data";
import { Sparkle } from "./ui/Sparkle";
import Reveal from "./ui/Reveal";

const Certifications = (): JSX.Element => (
  <section id="certifications" className="py-20 w-full space-y-16">
    {/* Certifications Section */}
    <div>
      <Reveal>
        <h3 className="title mb-10">
          Certifications &amp;{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            Credentials.
          </span>
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Sparkle key={`cert-${index}`} duration={12000}>
            <div className="p-6 text-start flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">{cert.title}</h4>
                  <span className="text-xs bg-purple/20 text-purple-300 border border-purple/30 px-3 py-1 rounded-full font-mono">
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm text-purple-400 font-semibold mt-1">{cert.issuer}</p>
                <p className="text-sm opacity-80 mt-3 leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          </Sparkle>
        ))}
      </div>
    </div>

    {/* Leadership Section */}
    <div>
      <Reveal>
        <h3 className="title mb-10">
          Leadership &amp;{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            Community.
          </span>
        </h3>
      </Reveal>

      <div className="space-y-6">
        {leadership.map((item) => (
          <Sparkle key={`lead-${item.id}`} duration={15000}>
            <div className="p-6 md:p-8 text-start space-y-4">
              <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-2xl font-extrabold">{item.role}</h4>
                  <p className="text-lg font-semibold bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent mt-1">
                    {item.organization}
                  </p>
                </div>
                <div className="text-left md:text-right opacity-80 mt-2 md:mt-0 text-sm">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 opacity-90 text-sm md:text-base">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Sparkle>
        ))}
      </div>
    </div>

    {/* Publication Section */}
    <div>
      <Reveal>
        <h3 className="title mb-10">
          Research &amp;{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            Publications.
          </span>
        </h3>
      </Reveal>

      {publications.map((pub, idx) => (
        <Sparkle key={`pub-${idx}`} duration={18000}>
          <div className="p-6 md:p-8 text-start space-y-4 border border-purple/20 rounded-3xl">
            <span className="text-xs bg-red-700/30 text-red-300 border border-red-500/30 px-3 py-1 rounded-full font-mono inline-block">
              {pub.role}
            </span>
            <h4 className="text-xl md:text-2xl font-bold leading-snug">{pub.title}</h4>
            <p className="text-sm opacity-80 font-medium">{pub.authors}</p>
            <p className="text-sm text-purple-300 italic">{pub.journal}</p>
            <p className="text-xs opacity-60 font-mono">DOI: {pub.doi}</p>
          </div>
        </Sparkle>
      ))}
    </div>
  </section>
);

export default Certifications;
