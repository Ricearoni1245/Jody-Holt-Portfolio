import React from "react";
import profileImage from "../assets/jody.png";
import jodyMobile from "../assets/Jody-mobile.png";

export function Hero() {
  return (
    <section className="relative w-full bg-hero">
      <div className="md:hidden flex flex-col items-center text-center gap-2 min-h-[calc(100vh-64px)] py-6">
        <h1
          className="font-extrabold font-title tracking-wide leading-tight text-text
                 text-2xl underline md:decoration-secondary decoration-primary"
        >
          Design. Develop. Deliver.
        </h1>

        <p className=" font-main text-sm text-text/80">
          Driven by a genuine passion for creation through code.
        </p>

        <div className="relative h-68 w-68 rounded-full overflow-hidden mb-2">

  <div className="absolute inset-0 rounded-full img-glow" />    


  <img
    src={jodyMobile}                      
    alt="Jody Holt"
    className="relative z-[1] h-full w-full object-cover select-none pointer-events-none"
  />
</div>

        <h2 className="mt- font-extrabold font-title text-text leading-tight tracking-wide text-3xl">
          Hello, I’m Jody Holt
        </h2>

        <p className=" font-main mt-5 text-lg text-base text-text/85">
          Turning concepts into clean, functional code.
        </p>

        <p className=" font-main text-2xl font-semibold text-text mt-4">It’s What I Do.</p>

        <p className="mt-8 text-2xl text-text font-main ">I would love to connect!</p>

        <div className="mt-2 mb-4 flex items-center justify-center gap-4">
          {[
            { label: "GitHub", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "#" },
          ].map((a) => (
            <a
              key={a.label}
              href={a.href}
              aria-label={a.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-secondary/70 bg-secondary/20 text-text hover:border-primary hover:text-primary transition"
            >
              <span className="h-3 w-3 rounded-full bg-current" />
            </a>
          ))}
        </div>
      </div>










 {/*DESKTOP*/}
{/*____________________________________________________________________________________________________*/}
      <div className="hidden md:block md:mx-auto max-w-7xl px-4">
        <div
          className="
      min-h-[calc(100vh-64px)]
      md:min-h-[calc(100vh-80px)]
      flex flex-col md:flex-row items-start gap-10 lg:gap-10
      py-8 md:py-1
    "
        >
          <div className="shrink-0 self-start lg:pl-20">
            <img
              src={profileImage}
              alt="Jody Holt"
              className="w-[240px] sm:h-[280px] md:h-[700px] lg:h-[780px] xl:g-[800px] h-auto object-contain select-none pointer-events-none"
            />
          </div>

          <div className="flex-1 self-start  md:pt-10 items-center text-center">
            <h1
              className="text-text font-extrabold tracking-wide leading-tight
                           text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl underline md:decoration-secondary decoration-primary font-title"
            >
              Design. Develop. Deliver.
            </h1>

            <p
              className="mb-10       text-text/80
                          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2 font-main"
            >
              Driven by a genuine passion for creation through code.
            </p>

            <h2
              className="font-extrabold text-text leading-tight tracking-wide mb-5
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title"
            >
              Hello, I’m Jody Holt
            </h2>

            <p
              className="mb-3 text-text/85 md:mt-10 md:mb-5
                          text-base md:text-xl lg:text-2xl xl:text-3xl font-main"
            >
              Turning concepts into clean, functional code.
            </p>

            <p
              className="mb-30 text-text/85
                          text-base md:text-3xl lg:text-4xl xl:text-5xl
            font-semibold font-main"
            >
              It’s What I Do.
            </p>

            <p
              className="mb-8 text-text
                          text-lg md:text-4xl lg:text-5xl font-main"
            >
              I would love to connect!
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-6">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Email", href: "#" },
              ].map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className="inline-flex items-center justify-center rounded-xl border border-secondary/70 bg-secondary/20 text-text transition
                             h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16
                             hover:border-primary hover:text-primary"
                  aria-label={a.label}
                  title={a.label}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-current" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
