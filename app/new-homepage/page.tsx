import type { Metadata } from "next";
import { ArrowRight, Menu, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "New Homepage Concept | 5 Star Roofing",
  description: "Alternate homepage hero concept for 5 Star Roofing.",
};

function StarMark({ className = "" }: { className?: string }) {
  return (
    <span className={`alt-star-mark ${className}`} aria-hidden="true">
      <Star />
    </span>
  );
}

export default function NewHomepage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/heroes/5star-new-hero.png" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body:has(.alt-home-hero) > header,
            body:has(.alt-home-hero) > footer {
              display: none;
            }

            body:has(.alt-home-hero) button[aria-label="Open Next.js Dev Tools"],
            body:has(.alt-home-hero) button[aria-label="Select to open the chat widget"],
            body:has(.alt-home-hero) nextjs-portal,
            body:has(.alt-home-hero) [data-nextjs-dev-tools-button] {
              display: none !important;
            }

            body:has(.alt-home-hero) {
              background: #050403;
            }

            .alt-home-hero {
              --gold: #d8a64d;
              --gold-bright: #f1b84f;
              --ivory: #f2eadb;
              --ink: #050403;
              position: relative;
              min-height: 100svh;
              overflow: hidden;
              isolation: isolate;
              color: var(--ivory);
              background-color: #120b06;
              background-image: url("/images/heroes/5star-new-hero.png");
              background-size: cover;
              background-position: 52% 50%;
              font-family: Georgia, "Times New Roman", serif;
            }

            .alt-home-hero::before {
              content: "";
              position: absolute;
              inset: 0;
              z-index: -1;
              background:
                radial-gradient(circle at 86% 34%, rgba(255, 174, 45, 0.18), transparent 24%),
                linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.36) 42%, rgba(0, 0, 0, 0.1) 68%, rgba(0, 0, 0, 0.35) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.72) 100%);
            }

            .alt-home-hero::after {
              content: "";
              position: absolute;
              inset: 0;
              z-index: -1;
              background:
                radial-gradient(ellipse at center, transparent 44%, rgba(0, 0, 0, 0.42) 100%),
                linear-gradient(0deg, rgba(0, 0, 0, 0.34), transparent 32%);
            }

            .alt-home-nav {
              position: absolute;
              top: clamp(24px, 4vw, 48px);
              left: clamp(26px, 3.5vw, 48px);
              right: clamp(26px, 3.5vw, 48px);
              z-index: 3;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-family: Arial, Helvetica, sans-serif;
              text-transform: uppercase;
              letter-spacing: 0.18em;
              font-size: clamp(0.82rem, 0.86vw, 0.98rem);
              font-weight: 700;
            }

            .alt-brand {
              display: inline-flex;
              align-items: center;
              gap: 22px;
              color: var(--ivory);
              text-decoration: none;
            }

            .alt-brand-menu {
              width: 23px;
              height: 23px;
              color: var(--gold);
            }

            .alt-desktop-links {
              display: flex;
              align-items: center;
              gap: clamp(34px, 4vw, 66px);
            }

            .alt-desktop-links a,
            .alt-brand {
              color: var(--ivory);
            }

            .alt-desktop-links a:hover,
            .alt-brand:hover {
              color: var(--gold-bright);
            }

            .alt-star-mark.alt-mobile-logo,
            .alt-mobile-menu {
              display: none;
            }

            .alt-headline {
              position: absolute;
              top: clamp(74px, 7vw, 104px);
              left: clamp(30px, 6.7vw, 124px);
              z-index: 2;
              margin: 0;
              color: color-mix(in srgb, var(--gold) 86%, white 14%);
              font-family: "Bodoni 72 Display", "Bodoni 72", Didot, "Times New Roman", serif;
              font-size: clamp(7rem, min(18.8vw, 29vh), 20rem);
              font-weight: 400;
              line-height: 0.76;
              letter-spacing: -0.04em;
              text-transform: uppercase;
              opacity: 0.84;
              text-shadow: 0 10px 42px rgba(0, 0, 0, 0.28);
            }

            .alt-headline span {
              display: block;
            }

            .alt-side-copy {
              position: absolute;
              left: clamp(30px, 3.6vw, 56px);
              top: 43%;
              z-index: 2;
              display: flex;
              align-items: center;
              gap: 22px;
              color: var(--gold-bright);
              font-family: Arial, Helvetica, sans-serif;
              font-size: clamp(0.82rem, 0.9vw, 1rem);
              font-weight: 500;
              letter-spacing: 0.22em;
              line-height: 1.45;
              text-transform: uppercase;
              writing-mode: vertical-rl;
              transform: rotate(180deg);
            }

            .alt-side-copy::before {
              content: "";
              display: block;
              width: 1px;
              height: 118px;
              background: rgba(255, 238, 209, 0.78);
            }

            .alt-right-place {
              position: absolute;
              right: clamp(36px, 4vw, 66px);
              top: 21%;
              z-index: 2;
              display: flex;
              align-items: center;
              gap: 30px;
              color: rgba(255, 246, 226, 0.9);
              font-family: Arial, Helvetica, sans-serif;
              font-size: clamp(0.82rem, 0.88vw, 1rem);
              letter-spacing: 0.22em;
              text-transform: uppercase;
              writing-mode: vertical-rl;
            }

            .alt-right-place::after {
              content: "";
              width: 1px;
              height: clamp(130px, 18vw, 238px);
              background: rgba(255, 238, 209, 0.62);
            }

            .alt-intro {
              position: absolute;
              left: clamp(42px, 7.3vw, 122px);
              bottom: clamp(116px, 15vh, 184px);
              z-index: 2;
              max-width: 540px;
            }

            .alt-intro h2 {
              margin: 0 0 18px;
              color: var(--ivory);
              font-family: Georgia, "Times New Roman", serif;
              font-size: clamp(2.2rem, min(3.85vw, 8.2vh), 4.45rem);
              font-weight: 400;
              line-height: 0.98;
              letter-spacing: -0.035em;
              text-shadow: 0 8px 24px rgba(0, 0, 0, 0.58);
            }

            .alt-intro .rule {
              width: 70px;
              height: 3px;
              margin: 0 0 22px;
              background: var(--gold-bright);
            }

            .alt-intro p {
              margin: 0;
              color: var(--gold-bright);
              font-size: clamp(1.18rem, 1.8vw, 2rem);
              line-height: 1.24;
              letter-spacing: 0.045em;
              text-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
            }

            .alt-cta {
              position: absolute;
              right: clamp(46px, 3.6vw, 60px);
              bottom: clamp(44px, 5.1vw, 74px);
              z-index: 3;
              display: inline-flex;
              align-items: center;
              justify-content: space-between;
              gap: 34px;
              min-width: clamp(360px, 21.5vw, 430px);
              min-height: 58px;
              padding: 0.9rem 1rem 0.9rem 2rem;
              border: 1px solid rgba(255, 207, 116, 0.45);
              border-radius: 999px;
              background: linear-gradient(90deg, #efad41 0%, #f8bd56 55%, #f3ad3e 100%);
              box-shadow: 0 0 42px rgba(255, 170, 45, 0.2), 0 16px 30px rgba(0, 0, 0, 0.34);
              color: #080604;
              font-family: Arial, Helvetica, sans-serif;
              font-size: clamp(0.82rem, 0.84vw, 0.98rem);
              font-weight: 800;
              letter-spacing: 0.17em;
              text-transform: uppercase;
              text-decoration: none;
            }

            .alt-cta:hover {
              color: #080604;
              filter: brightness(1.04);
            }

            .alt-cta-icon {
              display: grid;
              flex: 0 0 auto;
              width: 42px;
              height: 42px;
              place-items: center;
              border-radius: 999px;
              background: #030303;
              color: var(--gold-bright);
            }

            .alt-seal {
              position: absolute;
              right: clamp(70px, 6.2vw, 116px);
              bottom: clamp(118px, 15vh, 188px);
              z-index: 2;
              display: grid;
              width: clamp(126px, 10.5vw, 178px);
              aspect-ratio: 1;
              place-items: center;
              border: 2px solid rgba(223, 166, 70, 0.86);
              border-radius: 50%;
              color: var(--gold);
              font-family: Arial, Helvetica, sans-serif;
              box-shadow: inset 0 0 0 1px rgba(223, 166, 70, 0.2), 0 10px 28px rgba(0, 0, 0, 0.42);
            }

            .alt-seal::before {
              content: "5 STAR ROOFING";
              position: absolute;
              top: 16px;
              width: 100%;
              text-align: center;
              font-size: clamp(0.62rem, 0.72vw, 0.82rem);
              font-weight: 700;
              letter-spacing: 0.26em;
            }

            .alt-seal::after {
              content: "TEXAS BUILT. TEXAS PROUD.";
              position: absolute;
              bottom: 18px;
              width: 100%;
              text-align: center;
              font-size: clamp(0.52rem, 0.58vw, 0.68rem);
              font-weight: 700;
              letter-spacing: 0.16em;
            }

            .alt-seal-number {
              color: var(--gold);
              font-family: Georgia, "Times New Roman", serif;
              font-size: clamp(4.1rem, 5.7vw, 6.1rem);
              font-weight: 800;
              line-height: 1;
            }

            .alt-seal-star {
              position: absolute;
              bottom: 47px;
              left: 50%;
              width: 28px;
              height: 28px;
              transform: translateX(-50%);
              fill: var(--gold);
            }

            .alt-star-mark {
              display: grid;
              width: 42px;
              height: 42px;
              place-items: center;
              border: 1px solid rgba(226, 168, 70, 0.74);
              color: var(--gold-bright);
            }

            .alt-star-mark svg {
              width: 24px;
              height: 24px;
              fill: currentColor;
              stroke-width: 1.2;
            }

            .alt-left-star {
              position: absolute;
              left: clamp(30px, 3.6vw, 56px);
              top: 43%;
              z-index: 2;
              transform: translateY(-70px);
            }

            .alt-bottom-star {
              position: absolute;
              left: clamp(30px, 3.6vw, 56px);
              bottom: clamp(70px, 8vw, 116px);
              z-index: 2;
              width: 30px;
              height: 30px;
              border-radius: 999px;
            }

            @media (min-width: 1025px) and (max-height: 780px) {
              .alt-headline {
                top: clamp(70px, 8.5vh, 86px);
                font-size: clamp(6.8rem, min(16.5vw, 23vh), 13rem);
                line-height: 0.78;
              }

              .alt-intro {
                left: clamp(124px, 9vw, 150px);
                bottom: clamp(78px, 10vh, 104px);
                max-width: min(520px, 40vw);
              }

              .alt-intro h2 {
                font-size: clamp(2rem, min(3.2vw, 7vh), 3.35rem);
                line-height: 1.02;
              }

              .alt-intro p {
                max-width: 420px;
                font-size: clamp(1.25rem, min(1.65vw, 3.4vh), 1.75rem);
              }

              .alt-cta {
                bottom: clamp(34px, 5vh, 46px);
                min-height: 54px;
              }

              .alt-seal {
                width: clamp(104px, 8vw, 132px);
                right: clamp(70px, 7.5vw, 120px);
                bottom: clamp(104px, 16vh, 132px);
              }
            }

            @media (max-width: 1024px) {
              .alt-home-hero {
                min-height: 100svh;
                background-position: 64% 50%;
              }

              .alt-home-hero::before {
                background:
                  radial-gradient(circle at 90% 24%, rgba(255, 174, 45, 0.16), transparent 30%),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.18) 100%),
                  linear-gradient(180deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.16) 34%, rgba(0, 0, 0, 0.9) 100%);
              }

              .alt-home-hero::after {
                background:
                  radial-gradient(ellipse at center, transparent 38%, rgba(0, 0, 0, 0.52) 100%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.46), transparent 38%);
              }

              .alt-home-nav {
                top: clamp(28px, 4.3vh, 40px);
                left: clamp(24px, 5.2vw, 34px);
                right: clamp(24px, 5.2vw, 34px);
              }

              .alt-brand {
                gap: clamp(14px, 3.6vw, 22px);
                font-size: clamp(0.88rem, 2.45vw, 1rem);
                letter-spacing: 0.16em;
              }

              .alt-brand-menu,
              .alt-desktop-links,
              .alt-right-place {
                display: none;
              }

              .alt-star-mark.alt-mobile-logo {
                display: grid;
                width: clamp(50px, 12vw, 60px);
                height: clamp(50px, 12vw, 60px);
              }

              .alt-mobile-menu {
                display: block;
                color: var(--gold-bright);
                width: clamp(42px, 9.8vw, 54px);
                height: clamp(42px, 9.8vw, 54px);
              }

              .alt-headline {
                top: clamp(118px, 13vh, 150px);
                left: clamp(22px, 5.4vw, 36px);
                font-size: clamp(6.45rem, 28.2vw, 18rem);
                line-height: 0.76;
                letter-spacing: -0.052em;
              }

              .alt-side-copy {
                top: 37.5%;
                left: clamp(24px, 5.4vw, 34px);
                font-size: clamp(0.82rem, 2.25vw, 0.96rem);
                letter-spacing: 0.18em;
              }

              .alt-side-copy::before {
                height: clamp(96px, 13vh, 118px);
              }

              .alt-left-star {
                top: 37.5%;
                left: clamp(22px, 5.1vw, 32px);
                width: clamp(46px, 10vw, 54px);
                height: clamp(46px, 10vw, 54px);
              }

              .alt-intro {
                left: clamp(28px, 6.8vw, 58px);
                right: clamp(28px, 6.8vw, 42px);
                bottom: clamp(142px, 17.5vh, 184px);
                max-width: min(650px, calc(100vw - 112px));
              }

              .alt-intro h2 {
                font-size: clamp(2.45rem, 8.5vw, 4.2rem);
                line-height: 1.02;
              }

              .alt-intro p {
                max-width: 360px;
                font-size: clamp(1.42rem, 5.1vw, 2rem);
              }

              .alt-seal {
                right: 50px;
                bottom: 245px;
                width: 136px;
                opacity: 0.9;
              }

              .alt-cta {
                left: clamp(28px, 6.7vw, 56px);
                right: clamp(28px, 6.7vw, 56px);
                bottom: clamp(46px, 6.6vh, 68px);
                min-width: 0;
                min-height: clamp(66px, 8vh, 78px);
                padding: 0.82rem 0.95rem 0.82rem clamp(1.45rem, 5vw, 2rem);
                font-size: clamp(0.82rem, 2.55vw, 1rem);
              }

              .alt-cta-icon {
                width: clamp(42px, 10.5vw, 50px);
                height: clamp(42px, 10.5vw, 50px);
              }

              .alt-bottom-star {
                display: none;
              }
            }

            @media (max-width: 520px) {
              .alt-home-hero {
                background-position: 68% 50%;
              }

              .alt-home-nav {
                left: 24px;
                right: 24px;
              }

              .alt-brand {
                gap: 14px;
                letter-spacing: 0.2em;
              }

              .alt-star-mark.alt-mobile-logo {
                width: 50px;
                height: 50px;
              }

              .alt-headline {
                top: 116px;
                left: 21px;
                font-size: clamp(5.85rem, 26.8vw, 7.6rem);
              }

              .alt-side-copy,
              .alt-left-star {
                left: 22px;
              }

              .alt-intro {
                left: 88px;
                right: 24px;
                bottom: 148px;
              }

              .alt-intro h2 {
                font-size: clamp(2.08rem, 9vw, 2.45rem);
              }

              .alt-intro p {
                font-size: clamp(1.18rem, 4.7vw, 1.42rem);
              }

              .alt-seal {
                display: none;
              }

              .alt-cta {
                left: 36px;
                right: 36px;
                gap: 18px;
              }
            }

            @media (max-width: 640px) {
              .alt-seal {
                display: none;
              }
            }
          `,
        }}
      />

      <section className="alt-home-hero" aria-labelledby="alt-home-heading">
        <nav className="alt-home-nav" aria-label="New homepage preview">
          <a className="alt-brand" href="/">
            <Menu className="alt-brand-menu" strokeWidth={2} aria-hidden="true" />
            <StarMark className="alt-mobile-logo" />
            <span>5 Star Roofing</span>
          </a>

          <div className="alt-desktop-links">
            <a href="/residential-roofing/">Residential</a>
            <a href="/commercial-roofing/">Commercial</a>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
          </div>

          <Menu className="alt-mobile-menu" strokeWidth={2} aria-hidden="true" />
        </nav>

        <h1 id="alt-home-heading" className="alt-headline">
          <span>West</span>
          <span>Texas</span>
        </h1>

        <StarMark className="alt-left-star" />
        <div className="alt-side-copy">
          Serving the Texas Panhandle
          <br />
          &amp; all of West &amp; Central Texas
        </div>

        <div className="alt-right-place">Amarillo, TX</div>

        <div className="alt-intro">
          <h2>Your West Texas Roofing Company</h2>
          <div className="rule" aria-hidden="true" />
          <p>5 Star Residential and Commercial Roofing</p>
        </div>

        <div className="alt-seal" aria-hidden="true">
          <span className="alt-seal-number">5</span>
          <Star className="alt-seal-star" />
        </div>

        <StarMark className="alt-bottom-star" />

        <a className="alt-cta" href="/contact/">
          <span>Schedule Your Consultation</span>
          <span className="alt-cta-icon" aria-hidden="true">
            <ArrowRight size={24} strokeWidth={2.4} />
          </span>
        </a>
      </section>
    </>
  );
}
