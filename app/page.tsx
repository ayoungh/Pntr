import Image from "next/image";
import { BrowserArt } from "@/components/browser-art";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Nav } from "@/components/nav";
import { REPOSITORY_URL } from "@/lib/site";

const principles = [
  {
    number: "01",
    title: "Compose freely",
    copy: "Modular by design. Rearrange, extend, and break the grid.",
    shape: "shape-compose",
  },
  {
    number: "02",
    title: "Keep it tactile",
    copy: "Real textures, painterly details, and a world that feels handcrafted.",
    shape: "shape-tactile",
  },
  {
    number: "03",
    title: "Ship with confidence",
    copy: "Built on sensible defaults and production-ready code.",
    shape: "shape-ship",
  },
];

const process = [
  {
    number: "01",
    title: "Clone the canvas",
    copy: "Grab the template and get a solid, flexible foundation in seconds.",
  },
  {
    number: "02",
    title: "Choose your colours",
    copy: "Set the mood with a palette that matches your brand and vision.",
  },
  {
    number: "03",
    title: "Make it yours",
    copy: "Swap, edit, and compose until it feels unmistakably you.",
  },
];

const stack = ["Next.js 16", "Tailwind CSS", "TypeScript", "Motion-ready"];

export default function Home() {
  return (
    <main className="overflow-clip">
      <Nav />

      <section
        className="hero relative flex min-h-[900px] items-start justify-center text-white lg:min-h-[980px]"
        id="top"
      >
        <Image
          alt=""
          className="object-cover object-[50%_50%]"
          fill
          priority
          sizes="100vw"
          src="/pntr-hero.png"
        />
        <div className="hero-vignette absolute inset-0" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 pb-60 pt-40 text-center sm:pt-44 lg:pt-48">
          <h1 className="max-w-[900px] text-[clamp(4rem,9.3vw,8.6rem)] font-black leading-[0.82] tracking-[-0.085em] text-balance">
            Paint outside
            <br />
            the grid.
          </h1>
          <p className="mt-8 max-w-[600px] text-lg font-medium leading-snug text-white/90 sm:text-[1.35rem]">
            An open-source Next.js canvas for expressive, beautifully built
            websites.
          </p>
          <a
            className="ink-button mt-8"
            href={REPOSITORY_URL}
            rel="noreferrer"
            target="_blank"
          >
            <span>Get the template</span>
            <i>
              <ArrowRight className="size-5" />
            </i>
          </a>
          <p className="mt-5 text-sm font-semibold text-white/85 sm:text-base">
            Open source. Made for remixing.
          </p>
        </div>

        <div className="hero-canvas absolute bottom-[-118px] left-1/2 z-20 w-[min(92vw,720px)] -translate-x-1/2">
          <div className="browser-shell">
            <div className="browser-shell-bar">
              <div className="flex gap-2">
                <span className="bg-orange" />
                <span className="bg-ochre" />
                <span className="bg-cobalt" />
              </div>
              <div className="browser-address">pntr / your next idea</div>
              <div className="size-4 rounded-full border border-ink/20" />
            </div>
            <div className="live-canvas">
              <div className="mini-brand">Pntr.</div>
              <div className="mini-copy">
                Make a little
                <br />
                beautiful trouble.
              </div>
              <span className="mini-sun" />
              <span className="mini-blue" />
              <span className="mini-orange" />
              <span className="mini-stroke" />
            </div>
          </div>
        </div>
      </section>

      <section className="paper-section relative pb-28 pt-52 sm:pt-64" id="work">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.35fr] lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-heading max-w-[600px]">
                A foundation for beautiful messes.
              </h2>
              <div className="brush-underline mt-5" />
              <p className="mt-7 max-w-[540px] text-lg leading-relaxed text-ink/70 sm:text-xl">
                Pntr gives you the structure to ship fast—and the freedom to
                make it feel entirely yours.
              </p>

              <div
                className="mt-12 grid gap-0 border-y border-ink/25 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
                id="principles"
              >
                {principles.map((principle) => (
                  <article
                    className="principle py-7 sm:px-5 sm:first:pl-0 lg:border-l-0 lg:px-0 xl:border-l xl:px-5 xl:first:border-l-0 xl:first:pl-0"
                    key={principle.number}
                  >
                    <p className="text-sm font-black text-cobalt">
                      {principle.number}
                    </p>
                    <div className={`principle-shape ${principle.shape}`} />
                    <h3 className="mt-5 text-lg font-black tracking-[-0.035em]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {principle.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="art-rail relative min-h-[760px] sm:min-h-[920px]">
              <BrowserArt
                className="absolute left-0 top-0 z-10 w-[78%] -rotate-[4deg]"
                variant="blocks"
              />
              <BrowserArt
                className="absolute right-0 top-[27%] z-20 w-[80%] rotate-[2.5deg]"
                variant="arch"
              />
              <BrowserArt
                className="absolute bottom-0 left-[4%] z-30 w-[76%] -rotate-[1.5deg]"
                variant="editorial"
              />
              <span className="pin pin-one" />
              <span className="pin pin-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="process-section relative bg-cobalt py-24 text-white sm:py-28">
        <div className="process-brush" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-[820px] text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.9] tracking-[-0.07em]">
              Three strokes.
              <br />
              One finished site.
            </h2>
            <a
              className="outline-button shrink-0"
              href={REPOSITORY_URL}
              rel="noreferrer"
              target="_blank"
            >
              View the source <ArrowRight className="size-5" />
            </a>
          </div>

          <div className="mt-16 grid border-y border-white/45 md:grid-cols-3">
            {process.map((step) => (
              <article className="process-step py-8 md:px-8 md:first:pl-0" key={step.number}>
                <p className="text-sm font-black">{step.number}</p>
                <div aria-hidden="true" className="step-mark">
                  {step.number === "01" ? "↓" : step.number === "02" ? "●" : "↗"}
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.045em]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[330px] leading-relaxed text-white/75">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-section py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="display-heading max-w-[900px]">
                Made in the open.
                <br />
                Made to be changed.
              </h2>
              <p className="mt-7 max-w-[690px] text-lg leading-relaxed text-ink/70 sm:text-xl">
                No locked sections. No precious pixels. Pntr is a starting point,
                not a finished painting.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-cobalt pb-1 font-mono text-lg font-bold text-cobalt"
                href="/LICENSE"
              >
                MIT licensed <ArrowUpRight className="size-5" />
              </a>
            </div>
            <div className="paint-swatch" aria-hidden="true">
              <span>Pntr.</span>
            </div>
          </div>

          <div
            className="mt-20 grid border-y-2 border-ink md:grid-cols-4"
            id="stack"
          >
            {stack.map((item, index) => (
              <div className="stack-item" key={item}>
                <span className={`stack-glyph glyph-${index + 1}`} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section relative overflow-hidden bg-orange px-5 py-24 text-center text-white sm:py-32">
        <span className="closing-stroke closing-stroke-left" />
        <span className="closing-stroke closing-stroke-right" />
        <div className="relative z-10 mx-auto max-w-[1000px]">
          <h2 className="text-[clamp(3.4rem,7.3vw,7.7rem)] font-black leading-[0.88] tracking-[-0.075em] text-balance">
            Your blank canvas
            <br />
            is waiting.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              className="ink-button"
              href={REPOSITORY_URL}
              rel="noreferrer"
              target="_blank"
            >
              <span>Start painting</span>
              <i>
                <ArrowRight className="size-5" />
              </i>
            </a>
            <a
              className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-lg font-bold"
              href={REPOSITORY_URL}
              rel="noreferrer"
              target="_blank"
            >
              View on GitHub <ArrowUpRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
            <a className="text-3xl font-black tracking-[-0.06em]" href="#top">
              Pntr<span className="text-cobalt">.</span>
            </a>
            <p className="text-sm text-white/60">
              Open-source website template for expressive people.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-7 text-sm font-semibold">
            <a className="footer-link" href="#principles">
              Docs
            </a>
            <a className="footer-link" href="/LICENSE">
              License
            </a>
            <a
              className="footer-link"
              href={REPOSITORY_URL}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
