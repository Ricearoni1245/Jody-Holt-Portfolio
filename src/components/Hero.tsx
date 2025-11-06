import React from "react";
import profileImage from "../assets/jody.png";
import jodyMobile from "../assets/Jody-mobile.png";
import { useTheme } from "../hooks/useTheme";
export function Hero() {
  const { theme } = useTheme(); // "a" | "b" | "c" | "d" | "e"
  return (
    <section key={theme} className="relative w-full bg-hero anim-fade-in">
      <div className="md:hidden flex flex-col items-center text-center gap-2 min-h-[calc(100vh-64px)] py-6">
        <h1
          className="font-extrabold font-title tracking-wide leading-tight text-text
                 text-2xl underline md:decoration-secondary decoration-primary anim-pop-in"
        >
          Design. Develop. Deliver.
        </h1>

        <p className=" font-main text-sm text-text/80 anim-fade-in">
          Driven by a genuine passion for creation through code.
        </p>

        <div className="relative h-48 w-48 rounded-full overflow-hidden mb-2 anim-pop-in float-idle">
          <div className="absolute inset-0 rounded-full img-glow" />

          <img
            src={jodyMobile}
            alt="Jody Holt"
            className="relative z-[1] h-full w-full object-cover select-none pointer-events-none will-change-transform"
          />
        </div>

        <h2 className="mt- font-extrabold font-title text-text leading-tight tracking-wide text-3xl anim-fade-in">
          Hello, I’m Jody Holt
        </h2>

        <p className=" font-main mt-2 text-[22px] text-base text-text/85 anim-fade-in">
          Turning concepts into clean, functional code.
        </p>

     
       

        <div className="mt-5 mb-4 flex items-center justify-center gap-4">
          {[
            { label: "GitHub", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "#" },
          ].map((a) => (
            <a
              key={a.label}
              href={a.href}
              aria-label={a.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg 
              border border-secondary/70 bg-secondary/20 text-text anim-base icon-hover 
              hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 
              focus-visible:ring-primary/60"
            >
              <span className="h-3 w-3 rounded-full bg-current" />
            </a>
          ))}
        </div>
      </div>

      {/*DESKTOP*/}
      {/*____________________________________________________________________________________________________*/}
      <div
        className=" md:flex md:flex-col items-center hidden md: md:mx-auto px-4 w-full sm:h-[calc(100vh-80px)] 
                      overflow-hidden"
      >
        <h1
          className="text-text font-extrabold tracking-wide leading-tight
                           text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl 
                           underline md:decoration-secondary decoration-primary font-title 
                           text-center lg:pt-2 xl:pt-7 anim-pop-in "
        >
          Design. Develop. Deliver.
        </h1>
        <p
          className="text-text/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                      font-main text-center anim-fade-in"
        >
          Driven by a genuine passion for creation through code.
        </p>

        <div
          className="
            flex  items-center justify-evenly 
            w-full max-h-[calc(auto-400px) lg:px-5 xl:px-20"
        >
          <div className="self-end flex flex-col items-start lg:gap-1 mb-8 lg: items-center 
                          lg:pb-22 2xl:pb-30  ">
            <h5
              className="font-semi-bold text-text 
                           text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-4xl 
                           font-title text-left"
            >
              Hello,
            </h5>
            <h2
              className="font-extrabold text-text leading-tight tracking-wide 
                           text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-8xl 
                           font-title text-left"
            >
              I’m Jody Holt
            </h2>

            <p
              className="mb-3 text-text/85 md:mt-2
                          text-base md:text-xl lg:text-2xl xl:text-4xl font-main"
            >
              Turning concepts into clean, functional code.
            </p>

       
            <div className="flex  self-start items-center justify-start gap-4 md:gap-6 mt-5">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Email", href: "#" },
              ].map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className="inline-flex items-center justify-center rounded-xl border 
                  border-secondary/70 bg-secondary/20 text-text transition h-10 w-10 
                  sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 hover:border-primary 
                  hover:text-primary anim-base icon-hover focus:outline-none 
                  focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-label={a.label}
                  title={a.label}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-current" />
                </a>
              ))}
            </div>
          </div>
          <div className=" justify-start ">
            <img
              src={profileImage}
              alt="Jody Holt"
              className="lg:max-h-[78vh] sm:max-h-[50vh] h-auto object-contain select-none 
                         pointer-events-none anim-pop-in will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
