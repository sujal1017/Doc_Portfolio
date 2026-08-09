import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations(containerRef) {
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * ============================================
       * HERO
       * ============================================
       */

      const hero = document.querySelector("#home");

      if (hero) {
        const heroContent = hero.querySelector(".container-custom");

        if (heroContent) {
          gsap.to(heroContent, {
            y: -80,
            opacity: 0.25,
            ease: "none",

            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      /*
       * ============================================
       * MAIN SECTIONS
       * ============================================
       */

      const sectionIds = [
        "#about",
        "#expertise",
        "#education",
        "#experience",
        "#awards",
        "#clinic",
        "#location",
        "#reviews",
      ];

      sectionIds.forEach((selector) => {
        const section = document.querySelector(selector);

        if (!section) {
          return;
        }

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",

            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 45%",
              scrub: true,
            },
          }
        );
      });

      /*
       * ============================================
       * ABOUT IMAGE
       * ============================================
       */

      const about = document.querySelector("#about");

      if (about) {
        const image = about.querySelector("img");

        if (image) {
          gsap.fromTo(
            image,
            {
              x: -80,
              scale: 0.92,
            },
            {
              x: 0,
              scale: 1,
              ease: "none",

              scrollTrigger: {
                trigger: about,
                start: "top 85%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
        }
      }

      /*
       * ============================================
       * EXPERTISE CARDS
       * ============================================
       */

      const expertise = document.querySelector("#expertise");

      if (expertise) {
        const cards = expertise.querySelectorAll(".expertise-card");

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 70,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.15,
              ease: "none",

              scrollTrigger: {
                trigger: expertise,
                start: "top 80%",
                end: "top 25%",
                scrub: true,
              },
            }
          );
        }
      }

      /*
       * ============================================
       * EDUCATION TIMELINE
       * ============================================
       */

      const education = document.querySelector("#education");

      if (education) {
        const timelineItems = education.querySelectorAll(
          ".space-y-8 > div"
        );

        if (timelineItems.length > 0) {
          gsap.fromTo(
            timelineItems,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              ease: "none",

              scrollTrigger: {
                trigger: education,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
              },
            }
          );
        }
      }

      /*
       * ============================================
       * EXPERIENCE CARDS
       * ============================================
       */

      const experience = document.querySelector("#experience");

      if (experience) {
        const cards = experience.querySelectorAll(
          ".grid > div"
        );

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 60,
              scale: 0.96,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.15,
              ease: "none",

              scrollTrigger: {
                trigger: experience,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        }
      }

      /*
       * ============================================
       * AWARDS
       * ============================================
       */

      const awards = document.querySelector("#awards");

      if (awards) {
        const cards = awards.querySelectorAll(
          ".grid > div"
        );

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 60,
              scale: 0.94,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.12,
              ease: "none",

              scrollTrigger: {
                trigger: awards,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        }
      }

      /*
       * ============================================
       * REVIEWS
       * ============================================
       */

      const reviews = document.querySelector("#reviews");

      if (reviews) {
        const cards = reviews.querySelectorAll(
          ".grid > div"
        );

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.12,
              ease: "none",

              scrollTrigger: {
                trigger: reviews,
                start: "top 80%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
        }
      }

      /*
       * ============================================
       * REFRESH SCROLLTRIGGER
       * ============================================
       */

      ScrollTrigger.refresh();

    }, container);

    /*
     * Cleanup
     *
     * This removes all GSAP animations and
     * ScrollTriggers when the component unmounts.
     */
    return () => {
      ctx.revert();
    };
  }, [containerRef]);
}