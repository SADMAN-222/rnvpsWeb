"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Pause, Play, Sparkles, X } from "lucide-react";

export interface CampusMoment {
  id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
}

export const campusMoments: CampusMoment[] = [
  {
    id: 1,
    image: "/hero/hero-1.jpg",
    tag: "Morning Assembly",
    title: "Disciplined Beginnings & National Anthem",
    description: "Students gather in unified ranks under the morning sun for daily assembly, national anthem, and moral reflection.",
  },
  {
    id: 2,
    image: "/hero/hero-2.jpg",
    tag: "Classroom Learning",
    title: "Interactive Lessons & Focused Guidance",
    description: "Dedicated faculty guiding secondary students through core curriculum subjects with personalized classroom attention.",
  },
  {
    id: 3,
    image: "/hero/hero-3.jpg",
    tag: "Practical Science",
    title: "Hands-on Laboratory Investigations",
    description: "Fostering scientific curiosity and experimental skills in physics, chemistry, and biology laboratories.",
  },
  {
    id: 4,
    image: "/hero/hero-4.jpg",
    tag: "Residential Life",
    title: "Boarding Campus & Supervised Evening Study",
    description: "A structured, caring residential environment offering supervised evening preparation and peer camaraderie.",
  },
  {
    id: 5,
    image: "/hero/hero-5.jpg",
    tag: "Sports & Athletics",
    title: "Team Spirit, Fitness & Healthy Competition",
    description: "Developing physical agility, leadership, and health across seasonal football, cricket, and athletic events.",
  },
  {
    id: 6,
    image: "/hero/hero-6.jpg",
    tag: "Cultural Heritage",
    title: "Artistic Expression & National Observances",
    description: "Honoring national heritage, Language Movement Day, and cultural milestones through debate, recitals, and music.",
  },
  {
    id: 7,
    image: "/hero/hero-7.jpg",
    tag: "Student Mentorship",
    title: "Collaborative Study & Personal Guidance",
    description: "Small-group study circles and continuous teacher mentorship building self-reliance and academic confidence.",
  },
  {
    id: 8,
    image: "/hero/hero-8.jpg",
    tag: "Campus Grounds",
    title: "A Peaceful, Green Learning Oasis",
    description: "A safe, verdant campus sanctuary at Raniganj Bazar where character and intellect thrive side by side.",
  },
  {
    id: 9,
    image: "/hero/hero-9.jpg",
    tag: "Reading & Research",
    title: "Library Hours & Independent Exploration",
    description: "Cultivating lifelong reading habits, quiet research, and academic discipline in the campus library.",
  },
  {
    id: 10,
    image: "/hero/hero-10.jpg",
    tag: "Academic Excellence",
    title: "Celebrating Decades of Success & 100% Pass Rate",
    description: "Recognizing continuous 100% SSC pass achievements and alumni who lead across public and professional sectors.",
  },
];

export function MomentsOnCampus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbTrackRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Touch tracking for mobile swipe navigation
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % campusMoments.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + campusMoments.length) % campusMoments.length);
  }, []);

  // Auto-advance every 2 seconds (2000ms), paused on hover or touch
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const isFirstRender = useRef(true);

  // Smoothly center active thumbnail inside the horizontal track ONLY (never scrolls window)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const track = thumbTrackRef.current;
    const activeThumb = thumbRefs.current[currentIndex];
    if (track && activeThumb) {
      const trackRect = track.getBoundingClientRect();
      const thumbRect = activeThumb.getBoundingClientRect();
      const offsetLeft = thumbRect.left - trackRect.left;
      const targetScroll = track.scrollLeft + offsetLeft - (trackRect.width / 2) + (thumbRect.width / 2);

      // Strictly scroll the thumbnail div container horizontally — leaves page/window scroll completely untouched
      track.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Handle keyboard navigation when maximized
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMaximized) {
        setIsMaximized(false);
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMaximized, nextSlide, prevSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    // Check if horizontal swipe exceeds 40px and is primarily horizontal
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const currentMoment = campusMoments[currentIndex];

  return (
    <section className="section moments-section" aria-label="Moments on Campus Photo Gallery">
      <div className="shell">
        <div className="moments-header">
          <div>
            <span className="eyebrow">
              <Sparkles size={13} className="moments-sparkle" /> Campus Life in Motion
            </span>
            <h2 className="moments-title">Moments on Campus</h2>
            <p className="moments-subtitle">
              A vibrant look into daily learning, assembly, sports, and residential life at Raniganj National Bidyapith.
            </p>
          </div>

          <div className="moments-header-controls">
            <div className={`moments-status-badge ${isHovered ? "paused" : "playing"}`}>
              <span className="moments-status-dot" />
              <span>{isHovered ? "Paused (Hovering)" : "Live (Changes 2s)"}</span>
            </div>

            <button
              type="button"
              className="moments-maximize-btn"
              onClick={() => setIsMaximized(true)}
              aria-label="Maximize photo gallery to full screen"
              title="Maximize gallery"
            >
              <Maximize2 size={16} />
              <span className="btn-label">Maximize</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div
          ref={containerRef}
          className="moments-stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Frame */}
          <div className="moments-viewport" onClick={() => setIsMaximized(true)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMoment.id}
                className="moments-image-wrapper"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={currentMoment.image}
                  alt={currentMoment.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 1180px"
                  className="moments-img"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            <div className="moments-overlay-gradient" />

            {/* Click to Maximize Hint */}
            <div className="moments-expand-pill">
              <Maximize2 size={13} />
              <span>Click to Maximize</span>
            </div>

            {/* Photo Caption Box */}
            <div className="moments-caption-box">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMoment.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="moments-caption-content"
                >
                  <div className="moments-tag-row">
                    <span className="moments-tag">{currentMoment.tag}</span>
                    <span className="moments-counter">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(campusMoments.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="moments-caption-title">{currentMoment.title}</h3>
                  <p className="moments-caption-desc">{currentMoment.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav Arrows */}
            <button
              type="button"
              className="moments-nav-btn prev"
              onClick={e => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="moments-nav-btn next"
              onClick={e => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Thumbnail Track */}
          <div ref={thumbTrackRef} className="moments-track">
            {campusMoments.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                ref={el => { thumbRefs.current[idx] = el; }}
                onClick={() => setCurrentIndex(idx)}
                className={`moments-thumb-btn ${idx === currentIndex ? "active" : ""}`}
                aria-label={`View photo ${idx + 1}: ${item.tag}`}
              >
                <div className="moments-thumb-img-box">
                  <Image src={item.image} alt={item.tag} fill sizes="80px" className="moments-thumb-img" />
                </div>
                <span className="moments-thumb-label">{item.tag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Maximize Lightbox Modal ── */}
      <AnimatePresence>
        {isMaximized && (
          <motion.div
            className="moments-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsMaximized(false)}
          >
            <motion.div
              className="moments-lightbox-container"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Top Bar with Title & Minimize Button */}
              <div className="moments-lightbox-topbar">
                <div className="lightbox-title-wrap">
                  <span className="lightbox-tag">MOMENTS ON CAMPUS · {currentMoment.tag}</span>
                  <strong className="lightbox-title">{currentMoment.title}</strong>
                </div>

                <div className="lightbox-actions">
                  <span className="lightbox-status">
                    {isHovered ? "Paused on hover" : "Auto-playing (2s)"}
                  </span>
                  <button
                    type="button"
                    className="lightbox-close-btn"
                    onClick={() => setIsMaximized(false)}
                    aria-label="Minimize and return to page"
                    title="Minimize (Esc)"
                  >
                    <Minimize2 size={18} />
                    <span>Minimize</span>
                  </button>
                </div>
              </div>

              {/* High-Res Viewport */}
              <div
                className="moments-lightbox-media"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMoment.id}
                    className="lightbox-img-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <Image
                      src={currentMoment.image}
                      alt={currentMoment.title}
                      fill
                      sizes="95vw"
                      className="lightbox-img"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Lightbox Nav Arrows */}
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={prevSlide}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={nextSlide}
                  aria-label="Next photo"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Bottom Description Strip */}
              <div className="moments-lightbox-bottom">
                <div className="lightbox-desc-text">
                  <h4>{currentMoment.title}</h4>
                  <p>{currentMoment.description}</p>
                </div>

                <div className="lightbox-bottom-nav">
                  <span className="lightbox-slide-num">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(campusMoments.length).padStart(2, "0")}
                  </span>
                  <div className="lightbox-dots">
                    {campusMoments.map((item, idx) => (
                      <button
                        type="button"
                        key={item.id}
                        className={`lightbox-dot ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
