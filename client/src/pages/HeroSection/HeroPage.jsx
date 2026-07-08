import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Container from "../../components/UI/Container/Container";
import AvatarCard from "../../components/UI/card/AvatarCard";
import ResumeDownload from "../../components/UI/card/ResumeDownload";
import SocialLinksComponents from "../../components/Sociallinks/SocialLinksComponents";

const Home = () => {
  return (
    <>
     

      {/* Manual CSS animations — no framer-motion dependency on this page */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1.2s ease-out both;
        }
        .fade-slide-up {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease-out forwards;
        }
      `}</style>

      <Container>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          {/* 🔹 Left: Avatar */}
          <div className="flex items-center justify-center order-2 lg:order-1 fade-in">
            <AvatarCard size="w-72 h-72 md:w-96 md:h-96" priority />
          </div>

          {/* 🔸 Right: Content */}
          <div className="flex items-center justify-center order-1 lg:order-2 font-mono">
            <aside className="space-y-6 max-w-xl">
              {/* Heading */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white fade-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                HI, I'M{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.6)]">
                  MOHD AZAM
                </span>
              </h1>

              {/* Underline accent */}
              <div
                className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-transparent fade-slide-up"
                style={{ animationDelay: "0.2s" }}
              />

              {/* Role */}
              <h2
                className="text-base md:text-lg uppercase tracking-widest text-gray-300 fade-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-cyan-400">&gt;</span> Full Stack Developer |
                MERN Developer
              </h2>

              {/* Description */}
              <p
                className="text-gray-400 text-sm md:text-base leading-relaxed fade-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
               MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in developing REST APIs, implementing JWT authentication, and creating responsive user interfaces. Passionate about writing clean, scalable code and continuously improving my technical skills.
              </p>

              {/* Social links */}
              <div className="fade-slide-up" style={{ animationDelay: "0.5s" }}>
                <SocialLinksComponents
                  className="flex gap-4"
                  style={{ cursor: "pointer" }}
                />
              </div>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-4 pt-2 fade-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <ResumeDownload />

                <Link
                  to="/contact-us"
                  className="px-6 py-3 border border-cyan-500/40 text-cyan-400 uppercase tracking-widest text-sm font-bold hover:bg-cyan-400 hover:text-black transition-colors duration-300"
                  aria-label="Contact Mohd Umar"
                >
                  Contact_Me
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;