"use client";
// @ts-ignore
import "./home.css";
import {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
// import Container from "../../components/home/container";
// import Image from "next/image";
import QuoteSection from "../../components/home/QouteSection";
// import App_Store from "../../public/img/App_Store.png";
// import Play_store from "../../public/img/Play_Store.png";
import { HeroSection } from "@/components/home/heroSection";
import {
  packagePlans,
  PlanCategory,
  testimonial_Slider,
} from "../../data/HomeDate";
import LogoSlider from "@/components/home/Logo_Slider";
import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
import InsuranceCardsSection from "@/components/home/Section1";
import Card_package from "@/components/healthCare/Card_package";
import icon_24_7 from "../../public/Icons/home/Value driven.png";
import support from "../../public/img/highest rated insurer .jpeg";
import Group from "../../public/Icons/home/highest rated insurer.png";
import Group1 from "../../public/Icons/home/hospital network.png";
import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
import content from "../../public/img/hospital network.jpeg";
import home_Section_Card_05 from "../../public/img/value-driven-ecosystem.png";
import InsuranceIntroSection from "@/components/home/Insuranceintrosection";
import GetConnected from "@/components/home/GetConnected";
import CtrlStyleScrollableSection from "@/components/home/CtrlStyleScrollableSection";
// import qrCode from "../../public/img/images.png";
import { useRouter } from "next/navigation";

// Moblie Screen Icon
// import Simple from "../../public/Icons/home/Faster Quotes. Easier Claims/simple.png";
// import Convenient from "../../public/Icons/home/Faster Quotes. Easier Claims/convenience.png";
// import Quickest from "../../public/Icons/home/Faster Quotes. Easier Claims/speedy.png";
import Mobile_Screen from "@/components/home/Mobile_Screen";
const services = [
  {
    title: "highest rated insurer",
    // tag: "Simple",
    tag: "",
    text: "Jubilee General holds an insurer financial strength rating of B (Fair) and a long-term Issuer Credit Rating of bb (Fair) assigned by AM Best -USA. VIS and PACRA have awarded Jubilee with insurer financial strength rating of AA++ with stable outlook.",
    icon: Group,
    image: support,
  },
  {
    title: "largest network of panel hospitals",
    // tag: "Protected",
    tag: "",
    text: "Premium network of over 700+ panel hospitals across Pakistan, ensuring seamless, cashless medical treatment for all policyholders.",
    icon: Group1,
    image: content,
  },
  {
    title: "value driven ecosystem",
    // tag: "Support",
    tag: "",
    text: "Enjoy Upto 55% off with Jubilee General Discount Card. It is our way of thanking and giving you more than just protection.",
    icon: icon_24_7,
    image: home_Section_Card_05,
  },
];

const CLIP_DUR = 500;
const FADE_DUR = 320;
const FADE_DEL = CLIP_DUR - 80;
const CARDS_START = CLIP_DUR - 120;
const TOTAL = CLIP_DUR + FADE_DUR;

const mr = (v: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (v - a) / (b - a)));

const eoo = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

const eic = (t: number) => t * t * t;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const PH = {
  FRAME_IN: [0.0, 0.09] as const,
  IMG1_IN: [0.09, 0.18] as const,
  C1_IN: [0.18, 0.31] as const,
  C1_OUT: [0.31, 0.43] as const,
  IMG2_IN: [0.41, 0.5] as const,
  C2_IN: [0.5, 0.63] as const,
  C2_OUT: [0.63, 0.74] as const,
  IMG3_IN: [0.72, 0.81] as const,
  C3_IN: [0.81, 0.93] as const,
  C3_OUT: [0.93, 1.0] as const,
} as const;

const CARD_H_EXPANDED = 188;
const CARD_H_COLLAPSED = 89;

const HomePage = () => {
  const { data: testimonialsRes } = useGetAllTestimonialsQuery();

  const apiCarouselData = useMemo(() => {
    if (!testimonialsRes) return [];
    const list = Array.isArray(testimonialsRes)
      ? testimonialsRes
      : testimonialsRes.docs || testimonialsRes.data || [];

    return (list || []).map((t: any) => ({
      para: t.testimonialText ?? "",
      heading: t.name ?? "",
      avatar: t.profilePicture ?? "",
      rating:
        typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
    }));
  }, [testimonialsRes]);

  const [cardInset, setCardInset] = useState(
    "inset(15% 38% 42% 38% round 20px)",
  );
  const [onHero, setOnHero] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    "forward" | "reverse"
  >("forward");

  const onHeroRef = useRef(true);
  const transitioningRef = useRef(false);
  const touchStartY = useRef(0);
  const t1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const progressRef = useRef(0);

  const frameRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  const c1WrapRef = useRef<HTMLDivElement>(null);
  const c2WrapRef = useRef<HTMLDivElement>(null);
  const c3WrapRef = useRef<HTMLDivElement>(null);

  const c1InnerRef = useRef<HTMLDivElement>(null);
  const c2InnerRef = useRef<HTMLDivElement>(null);
  const c3InnerRef = useRef<HTMLDivElement>(null);

  const c1IconRef = useRef<HTMLImageElement>(null);
  const c2IconRef = useRef<HTMLImageElement>(null);
  const c3IconRef = useRef<HTMLImageElement>(null);

  const c1TitleRef = useRef<HTMLHeadingElement>(null);
  const c2TitleRef = useRef<HTMLHeadingElement>(null);
  const c3TitleRef = useRef<HTMLHeadingElement>(null);

  const ct1Ref = useRef<HTMLParagraphElement>(null);
  const ct2Ref = useRef<HTMLParagraphElement>(null);
  const ct3Ref = useRef<HTMLParagraphElement>(null);

  const [c1Show, setC1Show] = useState(false);
  const [c2Show, setC2Show] = useState(false);
  const [c3Show, setC3Show] = useState(false);
  const prevShow = useRef({ c1: false, c2: false, c3: false });

  const applyAnimations = useCallback((p: number) => {
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;

    if (frameRef.current) {
      const t = eoo(mr(p, ...PH.FRAME_IN));
      const ty = lerp(vh, 0, t);
      frameRef.current.style.opacity = String(t);
      frameRef.current.style.transform = `translateY(${ty}px)`;
    }

    if (img1Ref.current) {
      img1Ref.current.style.transform = `translateY(${lerp(
        100,
        0,
        eoo(mr(p, ...PH.IMG1_IN)),
      )}%)`;
    }

    if (img2Ref.current) {
      img2Ref.current.style.transform = `translateY(${lerp(
        100,
        0,
        eoo(mr(p, ...PH.IMG2_IN)),
      )}%)`;
    }

    if (img3Ref.current) {
      img3Ref.current.style.transform = `translateY(${lerp(
        100,
        0,
        eoo(mr(p, ...PH.IMG3_IN)),
      )}%)`;
    }

    const applyCard = (
      wrap: React.RefObject<HTMLDivElement | null>,
      inner: React.RefObject<HTMLDivElement | null>,
      icon: React.RefObject<HTMLImageElement | null>,
      title: React.RefObject<HTMLHeadingElement | null>,
      inPhase: readonly [number, number],
      outPhase: readonly [number, number],
    ) => {
      if (!wrap.current) return;

      const inT = mr(p, ...inPhase);
      const outT = mr(p, ...outPhase);
      const done = p >= outPhase[1];

      const h = done
        ? CARD_H_COLLAPSED
        : p < outPhase[0]
          ? CARD_H_EXPANDED
          : lerp(CARD_H_EXPANDED, CARD_H_COLLAPSED, eic(outT));

      const op = done ? 1 : eoo(inT);
      const ty = done ? 0 : lerp(vh * 0.85, 0, eoo(inT));

      wrap.current.style.height = `${h}px`;
      wrap.current.style.opacity = String(op);
      wrap.current.style.transform = `translateY(${ty}px)`;

      const active = p < outPhase[1];
      const collapsed = h < CARD_H_EXPANDED - 8;

      if (inner.current) {
        inner.current.style.backgroundColor = active ? "#BA0C2F" : "#D7DCE1";
        inner.current.style.height = `${h}px`;
        inner.current.style.display = "flex";
        inner.current.style.flexDirection = collapsed ? "row" : "column";
        inner.current.style.alignItems = collapsed ? "center" : "flex-start";
        inner.current.style.justifyContent = collapsed
          ? "flex-start"
          : "flex-start";
        inner.current.style.gap = collapsed ? "16px" : "0px";
        inner.current.style.padding = collapsed ? "18px 24px" : "28px";
      }

      if (icon.current) {
        icon.current.style.filter = active
          ? "brightness(0) invert(1)"
          : "brightness(0)";
        icon.current.style.marginBottom = collapsed ? "0px" : "20px";
        icon.current.style.width = collapsed ? "46px" : "58px";
        icon.current.style.height = collapsed ? "46px" : "58px";
        icon.current.style.flexShrink = "0";
      }

      if (title.current) {
        title.current.style.color = active ? "#ffffff" : "#24262A";
        title.current.style.fontSize = collapsed ? "22px" : "29px";
        title.current.style.lineHeight = "1.1";
        title.current.style.margin = "0";
      }
    };

    const applyContent = (
      el: React.RefObject<HTMLParagraphElement | null>,
      inPhase: readonly [number, number],
      outPhase: readonly [number, number],
    ) => {
      if (!el.current) return;

      let op = 0;
      let ty = vh * 0.7;
      let zIndex = 0;

      if (p < inPhase[0]) {
        op = 0;
        ty = vh * 0.7;
        zIndex = 0;
      }

      if (p >= inPhase[0] && p < inPhase[1]) {
        const inT = eoo(mr(p, ...inPhase));
        op = inT;
        ty = lerp(vh * 0.7, 0, inT);
        zIndex = 2;
      }

      if (p >= inPhase[1] && p < outPhase[0]) {
        op = 1;
        ty = 0;
        zIndex = 3;
      }

      if (p >= outPhase[0] && p < outPhase[1]) {
        const outT = eic(mr(p, ...outPhase));
        op = 1 - outT;
        ty = lerp(0, -80, outT);
        zIndex = 1;
      }

      if (p >= outPhase[1]) {
        op = 0;
        ty = -80;
        zIndex = 0;
      }

      el.current.style.opacity = String(op);
      el.current.style.transform = `translateY(${ty}px)`;
      el.current.style.pointerEvents = op > 0.05 ? "auto" : "none";
      el.current.style.zIndex = String(zIndex);
    };

    if (p >= PH.C1_IN[0]) {
      applyCard(
        c1WrapRef,
        c1InnerRef,
        c1IconRef as React.RefObject<HTMLImageElement | null>,
        c1TitleRef,
        PH.C1_IN,
        PH.C1_OUT,
      );
    }

    if (p >= PH.C2_IN[0]) {
      applyCard(
        c2WrapRef,
        c2InnerRef,
        c2IconRef as React.RefObject<HTMLImageElement | null>,
        c2TitleRef,
        PH.C2_IN,
        PH.C2_OUT,
      );
    }

    if (p >= PH.C3_IN[0]) {
      applyCard(
        c3WrapRef,
        c3InnerRef,
        c3IconRef as React.RefObject<HTMLImageElement | null>,
        c3TitleRef,
        PH.C3_IN,
        PH.C3_OUT,
      );
    }

    applyContent(ct1Ref, PH.C1_IN, PH.C1_OUT);
    applyContent(ct2Ref, PH.C2_IN, PH.C2_OUT);
    applyContent(ct3Ref, PH.C3_IN, PH.C3_OUT);

    const nC1 = p >= PH.C1_IN[0];
    const nC2 = p >= PH.C2_IN[0];
    const nC3 = p >= PH.C3_IN[0];

    if (nC1 !== prevShow.current.c1) {
      setC1Show(nC1);
      prevShow.current.c1 = nC1;
    }

    if (nC2 !== prevShow.current.c2) {
      setC2Show(nC2);
      prevShow.current.c2 = nC2;
    }

    if (nC3 !== prevShow.current.c3) {
      setC3Show(nC3);
      prevShow.current.c3 = nC3;
    }
  }, []);

  useEffect(() => {
    const readScroll = () => {
      const el = scrollSectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const scrolledIn = Math.max(0, -rect.top);

      progressRef.current =
        totalScrollable > 0 ? Math.min(1, scrolledIn / totalScrollable) : 0;
    };

    const onScroll = () => {
      readScroll();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        applyAnimations(progressRef.current),
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    readScroll();
    rafRef.current = requestAnimationFrame(() =>
      applyAnimations(progressRef.current),
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyAnimations]);

  useEffect(() => {
    const measure = () => {
      const card = document.querySelector(
        "[data-health-card]",
      ) as HTMLElement | null;

      if (!card) return;

      const r = card.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (r.width === 0 || r.height === 0) return;

      const t = ((r.top / vh) * 100).toFixed(2);
      const ri = (((vw - r.right) / vw) * 100).toFixed(2);
      const b = (((vh - r.bottom) / vh) * 100).toFixed(2);
      const l = ((r.left / vw) * 100).toFixed(2);

      setCardInset(`inset(${t}% ${ri}% ${b}% ${l}% round 20px)`);
    };

    const tid = setTimeout(measure, 400);
    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(tid);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    onHeroRef.current = onHero;
  }, [onHero]);

  useEffect(() => {
    transitioningRef.current = transitioning;
  }, [transitioning]);

  useEffect(() => {
    document.body.style.overflow = onHero || transitioning ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [onHero, transitioning]);

  useEffect(() => {
    if (!onHero && !transitioning) {
      document.body.classList.add("hero-exit-complete");
    } else {
      document.body.classList.remove("hero-exit-complete");
    }
  }, [onHero, transitioning]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("hero-nav-hidden");
      document.body.classList.remove("hero-exit-complete");
      document.body.style.overflow = "";
    };
  }, []);

  const goToContent = useCallback(() => {
    if (transitioningRef.current || !onHeroRef.current) return;

    if (t1Ref.current) clearTimeout(t1Ref.current);
    if (t2Ref.current) clearTimeout(t2Ref.current);

    document.body.classList.add("hero-nav-hidden");
    setTransitionDirection("forward");
    setTransitioning(true);
    setCardsVisible(false);
    setOnHero(false);

    t1Ref.current = setTimeout(() => setCardsVisible(true), CARDS_START);
    t2Ref.current = setTimeout(() => setTransitioning(false), TOTAL);
  }, []);

  const goToHero = useCallback(() => {
    if (transitioningRef.current || onHeroRef.current) return;

    if (t1Ref.current) clearTimeout(t1Ref.current);
    if (t2Ref.current) clearTimeout(t2Ref.current);

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    document.body.classList.add("hero-nav-hidden");
    setTransitionDirection("reverse");
    setTransitioning(true);
    setCardsVisible(false);
    setOnHero(true);

    t2Ref.current = setTimeout(() => {
      setTransitioning(false);
      document.body.classList.remove("hero-nav-hidden");
    }, TOTAL);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (transitioningRef.current) {
        e.preventDefault();
        return;
      }

      if (onHeroRef.current && e.deltaY > 0) {
        e.preventDefault();
        goToContent();
      }

      if (!onHeroRef.current && e.deltaY < 0 && window.scrollY === 0) {
        e.preventDefault();
        goToHero();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (transitioningRef.current) return;

      const d = touchStartY.current - e.changedTouches[0].clientY;

      if (onHeroRef.current && d > 30) goToContent();
      if (!onHeroRef.current && d < -30 && window.scrollY === 0) goToHero();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goToContent, goToHero]);

  const heroTransition = transitioning
    ? transitionDirection === "forward"
      ? `clip-path ${CLIP_DUR}ms cubic-bezier(0.76,0,0.24,1), opacity ${FADE_DUR}ms ease ${FADE_DEL}ms`
      : `clip-path ${CLIP_DUR}ms cubic-bezier(0.76,0,0.24,1), opacity 0ms ease 0ms`
    : "none";

  const heroStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 20,
    clipPath: onHero ? "inset(0% 0% 0% 0% round 0px)" : cardInset,
    opacity: onHero ? 1 : 0,
    overflow: "hidden",
    borderRadius: onHero ? "0px" : "20px",
    pointerEvents: onHero ? "auto" : "none",
    transition: heroTransition,
    willChange: "clip-path, opacity",
    backgroundColor: "#ffffff",
  };

  const [selectedPlan, setSelectedPlan] = useState<PlanCategory>("Health");
  const planSectionRef = useRef<HTMLDivElement | null>(null);
  const quoteSectionRef = useRef<HTMLDivElement | null>(null);

  // const [selectedCategory, setSelectedCategory] = useState("Health");
  const [selectedCategory, setSelectedCategory] =
    useState<PlanCategory>("Health");
  const [quotePrefill, setQuotePrefill] = useState<{
    coverageType?: string;
    selectedProduct?: string;
  }>({});
  type PackageCategory = keyof typeof packagePlans;
  const handleCategoryClick = (title: string) => {
    const category = title as PackageCategory;

    setSelectedCategory(category);

    setTimeout(() => {
      planSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleGetPlanClick = (data: {
    coverageType: string;
    selectedProduct: string;
  }) => {
    setQuotePrefill(data);

    setTimeout(() => {
      quoteSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };
  const router = useRouter();
  // const handleGetPlanClick = (data: {
  //   coverageType: string;
  //   selectedProduct: string;
  // }) => {
  //   if (data.selectedProduct === "Parents Care Plus") {
  //     router.push("/parentscare");
  //     return;
  //   }

  //   if (data.selectedProduct === "Personal Health Care") {
  //     router.push("#");
  //     return;
  //   }

  //   if (data.selectedProduct === "Family HealthCare") {
  //     router.push("#");
  //     return;
  //   }

  //   router.push("/parents-care");
  // };

  // testimonial Section

  // const {
  //   data: testimonialsRes,
  //   isLoading: isTestimonialsLoading,
  //   isError: isTestimonialsError,
  // } = useGetAllTestimonialsQuery();

  // const apiCarouselData = useMemo(() => {
  //   if (!testimonialsRes) return [];
  //   const list = Array.isArray(testimonialsRes)
  //     ? testimonialsRes
  //     : testimonialsRes.docs || testimonialsRes.data || [];
  //   return (list || []).map((t: any) => ({
  //     para: t.testimonialText ?? "",
  //     heading: t.name ?? "",
  //     avatar: t.profilePicture ?? "",
  //     rating:
  //       typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
  //   }));
  // }, [testimonialsRes]);

  // const carouselDataToShow =
  //   apiCarouselData.length > 0 ? apiCarouselData : testimonial_Slider;
  return (
    <>
      <style>{`
        body { background-color: #ffffff; }

        body.hero-nav-hidden .site-header,
        body.hero-exit-complete .site-header {
          opacity: 0 !important;
          pointer-events: none !important;
          transition: opacity 0.12s ease !important;
        }
      `}</style>

      <GetConnected />

      <div style={{ position: "relative" }}>
        <div style={heroStyle}>
          <HeroSection onStartLivingClick={goToContent} />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "#ffffff",
          }}
        >
          <div id="quote-section">
            <InsuranceCardsSection
              forceVisible={cardsVisible}
              onPlanClick={handleCategoryClick}
            />
          </div>

          <div ref={planSectionRef}>
            <Card_package
              key={selectedCategory}
              // agr motor select karne pr plan dikhana hai tw is ko commet out karke neeche wale ko comment karna hai or use selectecPlans ko comment karna hai
              plans={packagePlans[selectedCategory]}
              // plans={packagePlans[selectedPlan]}
              selectedCategory={selectedCategory}
              onGetPlanClick={handleGetPlanClick}
              showPrice={false}
              showDescription={false}
            />
          </div>
          <h1 className="font-futura text-4xl text-center font-bold">
            WE HAVE GOT YOU COVERED
          </h1>

          <div ref={quoteSectionRef}>
            <Suspense fallback={<div />}>
              <QuoteSection prefillData={quotePrefill} />
            </Suspense>
          </div>
          {/* <QuoteSection /> */}

          <InsuranceIntroSection />

          <CtrlStyleScrollableSection services={services} />

          <TestimonialsPreview />

          <Mobile_Screen />

          <div className="mt-20 mb-20">
            <h1 className="text-center font-futura md:text-3xl text-xl px-8 font-semibold mb-10 text-[#4A4A4A] uppercase">
              Associated Companies
            </h1>

            <LogoSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
