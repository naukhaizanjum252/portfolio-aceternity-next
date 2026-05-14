"use client";

import { useState, useEffect, useCallback } from "react";
import "@/styles/new-portfolio-layout.css";

const SHORT_FORM_VIDEOS = [
  "https://drive.google.com/file/d/15eODuMf9Xgm12J4S3poXrhB1daNyCena/preview",
  "https://drive.google.com/file/d/1_S4s9eOYB_9Y3uJHxHn0c4-jlidSgJOg/preview",
  "https://drive.google.com/file/d/11yOSpU2lsBeeoI-U1-jx5jNOzMGLr7eF/preview",
  "https://drive.google.com/file/d/1PLnpYyCBxbfJsdxW6vPFv61Tw72MZmx8/preview",
  "https://drive.google.com/file/d/1dvuLw3Yr4hKBwfTUYM2eHKMMSGj-AMfe/preview",
  "https://drive.google.com/file/d/1xawA3DCigqyVS8Amhw3euE_6lMTkJmOg/preview",
  "https://drive.google.com/file/d/1qyyCP-J3xsjFhGY-GPm4m-yPSS7HfE20/preview",
  "https://drive.google.com/file/d/1wOB6vR1HqU4pm5g-ElsinmNZ0yMy9UG3/preview",
  "https://drive.google.com/file/d/1xBfKLvsphbhKskk9fJSjyhc-nzt6448z/preview",
  "https://drive.google.com/file/d/1UxPsOhpQsRW4ENdPaePD9zSreqO4XtuT/preview",
  "https://drive.google.com/file/d/1vVmfmVWHAFoAqP6Y1_izr-Py6oQaUnLt/preview",
  "https://drive.google.com/file/d/1i0scwSKdIwTKgwizRUIpSzdrtqgsvrM-/preview",
  "https://drive.google.com/file/d/1bxonv2OSJ7y4IwFA8hhCP2cxHbPVGngV/preview",
  "https://drive.google.com/file/d/1fmLZcML5ZSXDp26SZOCK5EMmPT15kVtr/preview",
  "https://drive.google.com/file/d/18vAbH7aDIZpWmK9_dsSSHIfQNm-OTd47/preview",
];

const LONG_FORM_CHIPS = [
  { id: "all", label: "All" },
  { id: "tech", label: "Tech" },
  { id: "animation", label: "Animation" },
  { id: "youtube", label: "YouTube" },
  { id: "history", label: "History" },
  { id: "true-crime", label: "True Crime" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "documentary", label: "Documentary" },
];

const TESTIMONIALS = [
  { initial: "B", name: "Borys", role: "Founder - BTG Media", quote: '"Naukhaiz does an outstanding job when it comes to editing, took videos to another level and whats most important for me, He <strong>works very fast</strong>. Been a pleasure to work with Him! 🎯"' },
  { initial: "A", name: "Aaron McCullough", role: "Founder - McCullough Marketing", quote: '"Naukhaiz has been a great editor for my agency who I\'ve worked with for around 6 months. He is always happy to make edits and tweaks until the video is perfect and I\'d definitely <strong>recommend</strong> him to anyone needing video editing."' },
  { initial: "L", name: "Luka Pecirep", role: "Upwork", quote: '"From something that was supposed to be a test video, I continued working with Naukhaiz for a long time on multiple projects. Most important: <strong>Reliability, fast turnaround, English proficiency</strong>, and that He can listen to instructions and feedback very well, and apply his <strong>creativity and editing knowledge</strong> to create good videos daily. I give my <strong>recommendations</strong> for Naukhaiz."' },
  { initial: "C", name: "Christian Fitzgerald", role: "Evolve Technik / Upwork", quote: '"Naukhaiz has been amazing to work with. He is very <strong>prompt at providing revisions</strong> and <strong>understood the brief almost immediately</strong>."' },
  { initial: "J", name: "Jaskeerat Singh", role: "Upwork", quote: '"Great person to work with. Completely <strong>understands the needs</strong> of the project and works toward fulfilling it. Has some <strong>cool animations and typography</strong> that he uses to give a great look to the videos."' },
  { initial: "K", name: "Kyle Hanson", role: "Upwork", quote: '"He does <strong>excellent work</strong>. He did a <strong>good job</strong> according to the contract and went the <strong>extra mile</strong> to ensure everything was completed."' },
];

export default function NewPortfolioLayout() {
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEmbedUrl, setModalEmbedUrl] = useState("");
  const [longFormData, setLongFormData] = useState(null);
  const [longFormLoading, setLongFormLoading] = useState(true);
  const [longFormError, setLongFormError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const t = setTimeout(() => setLoadingVisible(false), 3200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const link2 = document.createElement("link");
    link2.href = "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&display=swap";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);
    return () => {
      link.remove();
      link2.remove();
    };
  }, []);

  useEffect(() => {
    fetch("/api/drive-videos-all")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("Fetch failed"))))
      .then((data) => {
        setLongFormData(data);
        setLongFormError(false);
      })
      .catch(() => setLongFormError(true))
      .finally(() => setLongFormLoading(false));
  }, []);

  const openModal = useCallback((embedUrl) => {
    setModalEmbedUrl(embedUrl || "");
    setModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalEmbedUrl("");
  }, []);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [closeModal]);

  const displayedVideos = (() => {
    if (!longFormData) return [];
    if (activeFilter === "all") {
      return Object.values(longFormData).flat();
    }
    return longFormData[activeFilter] || [];
  })();

  return (
    <div className="new-portfolio-root">
      {loadingVisible && (
        <div id="loading-screen">
          <div className="loader">
            <div className="camera-icon">
              <i className="bx bxs-camera-movie" />
            </div>
            <div className="loading-text">Loading...</div>
            <div className="loading-bar">
              <div className="loading-progress" />
            </div>
          </div>
        </div>
      )}

      <header>
        <nav className="glass-nav">
          <div className="nav-container">
            <div className="logo-group">
              <a href="#" className="logo">
                <i className="bx bxs-camera-movie" /> NAUKHAIZ
              </a>
              <span className="tagline">Video Editor · Top Rated Plus</span>
            </div>
            <div className="menu-toggle" aria-label="Menu">
              <i className="bx bx-menu" />
            </div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonials">Reviews</a>
              <a href="#cta">Contact</a>
              <a href="#cta" className="btn btn-primary nav-cta">Let&apos;s Talk</a>
            </div>
          </div>
        </nav>

        {/* Background orbs */}
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />

        <div className="hero-container">
          {/* Profile visual block */}
          <div className="hero-profile-block">
            <div className="hero-ring" />
            <div className="hero-ring hero-ring--outer" />
            <img src="/images/5.png" alt="Naukhaiz Anjum" className="hero-avatar" loading="eager" />
            {/* Floating badges */}
            <div className="hero-badge hero-badge--trp">
              <img src="/images/top-rated-plus-badge.png" alt="" className="hero-badge-icon" />
              <span>Top Rated Plus</span>
            </div>
            <div className="hero-badge hero-badge--stars">
              <img src="/images/5-star.png" alt="" className="hero-badge-icon hero-badge-icon--stars" />
              <span>5.0 on Upwork</span>
            </div>
            <div className="hero-badge hero-badge--projects">
              <i className="bx bx-video" />
              <span>500+ Videos Edited</span>
            </div>
          </div>

          {/* Text block */}
          <div className="hero-text">
            <h1>
              <span className="hero-name-line">Naukhaiz</span>
              <span className="hero-name-line hero-name-accent">Anjum</span>
            </h1>
            <p className="hero-role">Video Editor &middot; Motion Designer &middot; Storyteller</p>
            <p className="hero-desc">
              From concept to final cut — I craft videos that captivate audiences, drive engagement, and elevate brands. Trusted by founders, agencies, and creators worldwide.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary btn-lg hero-cta-main">
                <i className="bx bx-conversation" /> Let&apos;s Talk
              </a>
              <a href="#portfolio" className="btn btn-secondary btn-lg hero-cta-secondary">
                <i className="bx bx-play-circle" /> Watch My Work
              </a>
            </div>
            <div className="hero-social">
              <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><i className="bx bxl-upwork" /></a>
              <a href="https://www.linkedin.com/in/naukhaiz-anjum-302218158/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin" /></a>
              <a href="https://wa.me/+923314411708" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bx bxl-whatsapp" /></a>
              <a href="mailto:naukhaizanjum252@gmail.com" aria-label="Email"><i className="bx bx-envelope" /></a>
            </div>
          </div>
        </div>

        {/* Scrolling marquee strip */}
        <div className="hero-marquee">
          <div className="hero-marquee-track">
            {[1, 2].map((n) => (
              <span key={n} className="hero-marquee-content" aria-hidden={n === 2}>
                VIDEO EDITING &nbsp;·&nbsp; MOTION GRAPHICS &nbsp;·&nbsp; COLOR GRADING &nbsp;·&nbsp; SOUND DESIGN &nbsp;·&nbsp; STORYTELLING &nbsp;·&nbsp; YOUTUBE &nbsp;·&nbsp; DOCUMENTARIES &nbsp;·&nbsp; ANIMATION &nbsp;·&nbsp; SHORT FORM &nbsp;·&nbsp; LONG FORM &nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="scroll-down-indicator"><span /></div>
      </header>

      <main>
        {/* ══════ ABOUT ══════ */}
        <section id="about" className="section-about">
          <div className="container-narrow">
            <span className="section-label">About</span>
            <h2 className="section-heading">The Editor Behind the Edit</h2>
            <div className="about-grid">
              <div className="about-copy">
                <p>I&apos;m Naukhaiz Anjum — a video editor who believes every frame tells a story. I help brands, creators, and businesses bring their visions to life through compelling visual narratives.</p>
                <p>Whether it&apos;s a brand commercial, YouTube series, or documentary project, I bring fresh creativity and technical precision to every edit. My clients value reliability, fast turnaround, and the ability to take feedback and deliver exactly what they need.</p>
              </div>
              <div className="about-stats">
                {[
                  { value: "500+", label: "Videos Edited", icon: "bx-video" },
                  { value: "50+", label: "Happy Clients", icon: "bx-group" },
                  { value: "5.0", label: "Upwork Rating", icon: "bxs-star" },
                  { value: "3+", label: "Years Experience", icon: "bx-time-five" },
                ].map((s) => (
                  <div key={s.label} className="about-stat-card">
                    <i className={`bx ${s.icon}`} />
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ SERVICES ══════ */}
        <section id="services" className="section-services">
          <div className="container-narrow">
            <span className="section-label">Services</span>
            <h2 className="section-heading">What I Do</h2>
            <p className="section-sub">Professional video services tailored to your needs</p>
            <div className="services-grid">
              {[
                { icon: "bx-video", title: "Video Editing", desc: "Professional editing with color grading, sound design, and seamless transitions for YouTube, social media, and more." },
                { icon: "bx-shape-triangle", title: "Motion Graphics", desc: "Eye-catching motion graphics, cool typography, and visual elements that give your videos a polished, professional look." },
                { icon: "bx-edit", title: "Scriptwriting", desc: "Compelling narratives that capture your message and keep viewers hooked from start to finish." },
                { icon: "bx-camera-movie", title: "Documentary & Long-Form", desc: "In-depth pieces with documentary-style editing, rhythm, and narrative pacing that keeps audiences engaged." },
                { icon: "bx-volume-full", title: "Sound Design", desc: "Clear audio mixing and sound design that supports your story. Professional quality that enhances every frame." },
                { icon: "bx-palette", title: "Brand & Social", desc: "Strategic video content for brands. TikTok-style edits, captions, and formats optimized for engagement and reach." },
              ].map((item) => (
                <div key={item.title} className="service-card">
                  <div className="service-card-icon">
                    <i className={`bx ${item.icon}`} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ PORTFOLIO ══════ */}
        <section id="portfolio" className="section-portfolio">
          <div className="container-narrow">
            <span className="section-label">Portfolio</span>
            <h2 className="section-heading">My Work</h2>
            <p className="section-sub">Click any video to watch — short-form and long-form</p>

            <div className="portfolio-block">
              <h3 className="portfolio-subtitle"><i className="bx bx-mobile-alt" /> Short Form</h3>
              <div className="portfolio-grid portfolio-grid--short">
                {SHORT_FORM_VIDEOS.map((src, i) => (
                  <div key={i} className="short-form-embed-card">
                    <iframe
                      src={src}
                      title={`Short-form video ${i + 1}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="portfolio-block">
              <h3 className="portfolio-subtitle"><i className="bx bx-film" /> Long Form</h3>
              <div className="long-form-chips" role="tablist" aria-label="Filter long-form videos by category">
                {LONG_FORM_CHIPS.map((chip) => (
                  <button key={chip.id} type="button" className={`long-form-chip ${activeFilter === chip.id ? "active" : ""}`} onClick={() => setActiveFilter(chip.id)} role="tab" aria-selected={activeFilter === chip.id}>{chip.label}</button>
                ))}
              </div>
              <div className="long-form-videos-container" aria-live="polite">
                <div className="long-form-loading" hidden={!longFormLoading} style={longFormLoading ? {} : { display: "none" }}>
                  <span className="long-form-loading-spinner" /><p>Loading…</p>
                </div>
                {!longFormLoading && longFormError && (
                  <div className="long-form-error">
                    <p>Could not load video data. Ensure GOOGLE_DRIVE_API_KEY is set and the API is configured.</p>
                  </div>
                )}
                {!longFormLoading && !longFormError && (
                  <div className="portfolio-grid long-form-videos-grid">
                    {displayedVideos.length === 0 ? (
                      <p className="long-form-empty">No videos in this category.</p>
                    ) : (
                      displayedVideos.map((video) => (
                        <button key={video.id} type="button" className="portfolio-video-card long-form-video-card" onClick={() => openModal(video.link)} aria-label={`Play ${video.name}`}>
                          <img src={video.thumbnail} alt={video.name} loading="lazy" />
                          <span className="portfolio-play"><i className="bx bx-play" /></span>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ TESTIMONIALS ══════ */}
        <section id="testimonials" className="section-testimonials">
          <div className="container-narrow">
            <span className="section-label">Reviews</span>
            <h2 className="section-heading">What Clients Say</h2>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="testimonial-card">
                  <div className="testimonial-quote-mark"><i className="bx bxs-quote-left" /></div>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((i) => <i key={i} className="bx bxs-star" />)}
                  </div>
                  <div className="testimonial-body" dangerouslySetInnerHTML={{ __html: t.quote }} />
                  <div className="client-info">
                    <div className="client-avatar"><span>{t.initial}</span></div>
                    <div>
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-cta-row">
              <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <i className="bx bxl-upwork" /> View All Reviews
              </a>
            </div>
          </div>
        </section>

        {/* ══════ SKILLS / TOOLS ══════ */}
        <section id="skills" className="section-skills">
          <div className="container-narrow">
            <span className="section-label">Tools</span>
            <h2 className="section-heading">Tech I Work With</h2>
            <div className="skills-tag-grid">
              {[
                { category: "Editing", items: ["Adobe Premiere Pro", "CapCut Pro", "DaVinci Resolve"] },
                { category: "Motion & VFX", items: ["After Effects", "Motion Graphics", "Keyframe Animation"] },
                { category: "Audio", items: ["Sound Design", "Audio Mixing", "AI Voice Overs", "ElevenLabs"] },
                { category: "Design", items: ["Thumbnail Design", "Color Grading", "Typography", "Brand Identity"] },
              ].map((group) => (
                <div key={group.category} className="skill-group">
                  <h3 className="skill-group-title">{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <section id="cta" className="section-cta">
          <div className="container-narrow cta-inner">
            <div className="cta-icon-wrap">
              <i className="bx bxs-camera-movie" />
            </div>
            <h2 className="section-heading">Ready to Start?</h2>
            <p className="cta-desc">Have a video project in mind? Let&apos;s bring your vision to life. Whether it&apos;s social media content, promotional videos, or something unique — I&apos;m here to help.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/+923314411708" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg cta-btn-main">
                <i className="bx bxl-whatsapp" /> WhatsApp Me
              </a>
              <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                <i className="bx bxl-upwork" /> Hire on Upwork
              </a>
              <a href="https://www.linkedin.com/in/naukhaiz-anjum-302218158/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                <i className="bx bxl-linkedin" /> LinkedIn
              </a>
              <a href="mailto:naukhaizanjum252@gmail.com" className="btn btn-secondary btn-lg">
                <i className="bx bx-envelope" /> Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <a href="#" className="footer-logo"><i className="bx bxs-camera-movie" /> NAUKHAIZ</a>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Reviews</a>
          </div>
          <div className="footer-social">
            <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><i className="bx bxl-upwork" /></a>
            <a href="https://www.linkedin.com/in/naukhaiz-anjum-302218158/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin" /></a>
            <a href="https://wa.me/+923314411708" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bx bxl-whatsapp" /></a>
            <a href="mailto:naukhaizanjum252@gmail.com" aria-label="Email"><i className="bx bx-envelope" /></a>
          </div>
          <p className="footer-copy">&copy; 2026 Naukhaiz Anjum &middot; Video Editor &middot; Top Rated Plus</p>
        </div>
      </footer>

      <div className={`video-modal ${modalOpen ? "video-modal-open" : ""}`} role="dialog" aria-modal="true" aria-label="Video player">
        <div className="video-modal-backdrop" aria-hidden="true" onClick={closeModal} />
        <div className="video-modal-content">
          <button type="button" className="video-modal-close" onClick={closeModal} aria-label="Close video">
            <i className="bx bx-x" />
          </button>
          <div className="video-modal-iframe-wrap">
            <iframe title="Video player" src={modalOpen ? modalEmbedUrl : ""} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
