"use client";

import { useState, useEffect, useCallback } from "react";
import "@/styles/new-portfolio-layout.css";

const SHORT_FORM_VIDEOS = [
  { src: "https://drive.google.com/file/d/15eODuMf9Xgm12J4S3poXrhB1daNyCena/preview", thumb: "https://drive.google.com/thumbnail?id=1rUW-BbMRrue8wTQi1xKOerYWLD8FtfPb&sz=w400" },
  { src: "https://drive.google.com/file/d/1_S4s9eOYB_9Y3uJHxHn0c4-jlidSgJOg/preview", thumb: "https://drive.google.com/thumbnail?id=18K3t-MYQbpxoP4MBzeqXhyAVPeSat5Si&sz=w400" },
  { src: "https://drive.google.com/file/d/11yOSpU2lsBeeoI-U1-jx5jNOzMGLr7eF/preview", thumb: "https://drive.google.com/thumbnail?id=1maYQuNH2g6UZde6foYES9CRzT0rIaGEE&sz=w400" },
  { src: "https://drive.google.com/file/d/1PLnpYyCBxbfJsdxW6vPFv61Tw72MZmx8/preview", thumb: "https://drive.google.com/thumbnail?id=12P1HMW1d9hWKHcbt3SApekQJyK-l2VzT&sz=w400" },
  { src: "https://drive.google.com/file/d/1dvuLw3Yr4hKBwfTUYM2eHKMMSGj-AMfe/preview", thumb: "https://drive.google.com/thumbnail?id=1ysn669N6neEpq8HrzjguslrEVmMjRVjH&sz=w400" },
  { src: "https://drive.google.com/file/d/1xawA3DCigqyVS8Amhw3euE_6lMTkJmOg/preview", thumb: "https://drive.google.com/thumbnail?id=1bNdiHxnJKGA2OZDjGQM_CaUBMeVLTz7D&sz=w400" },
  { src: "https://drive.google.com/file/d/1qyyCP-J3xsjFhGY-GPm4m-yPSS7HfE20/preview", thumb: "https://drive.google.com/thumbnail?id=1JHcsOYIJqNgDqCI0tMIHdNaKSq5gCt_g&sz=w400" },
  { src: "https://drive.google.com/file/d/1wOB6vR1HqU4pm5g-ElsinmNZ0yMy9UG3/preview", thumb: "https://drive.google.com/thumbnail?id=13TsJzXn2RWzuV5MRkLdkl1mGBj95a2vm&sz=w400" },
  { src: "https://drive.google.com/file/d/1xBfKLvsphbhKskk9fJSjyhc-nzt6448z/preview", thumb: "https://drive.google.com/thumbnail?id=1yGwt978ThC2YYGKeGmmm3WovVxMBZYQZ&sz=w400" },
  { src: "https://drive.google.com/file/d/1UxPsOhpQsRW4ENdPaePD9zSreqO4XtuT/preview", thumb: "https://drive.google.com/thumbnail?id=1MO4eUU_Jnk5hUASt2Lb30U8aXEV9i_P4&sz=w400" },
  { src: "https://drive.google.com/file/d/1vVmfmVWHAFoAqP6Y1_izr-Py6oQaUnLt/preview", thumb: "https://drive.google.com/thumbnail?id=1oFvPF5_1o6JmOK7KTgLhyGJ_6MhFKgk6&sz=w400" },
  { src: "https://drive.google.com/file/d/1i0scwSKdIwTKgwizRUIpSzdrtqgsvrM-/preview", thumb: "https://drive.google.com/thumbnail?id=1Of2On5e77KIBYWlLZLMKmkDGpQXfVJld&sz=w400" },
  { src: "https://drive.google.com/file/d/1bxonv2OSJ7y4IwFA8hhCP2cxHbPVGngV/preview", thumb: "https://drive.google.com/thumbnail?id=1T8WZnkSepCGt2UD8G8d3Zld249TYdD_j&sz=w400" },
  { src: "https://drive.google.com/file/d/1fmLZcML5ZSXDp26SZOCK5EMmPT15kVtr/preview", thumb: "https://drive.google.com/thumbnail?id=1KR5P-ia5bgzKHDl3nkMZFB6i-osF5okU&sz=w400" },
  { src: "https://drive.google.com/file/d/18vAbH7aDIZpWmK9_dsSSHIfQNm-OTd47/preview", thumb: "https://drive.google.com/thumbnail?id=1dWcaoBpU2H8ZqGHONpGv2QNvFzX5gHfV&sz=w400" },
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

        <div className="hero-container">
          <div className="hero-text">
            <span className="intro-badge">👋 HEY THERE! I&apos;M</span>
            <h1>Naukhaiz Anjum</h1>
            <h2>Video Editor · Bringing Your Vision to Life, Frame by Frame</h2>
            <p>
              Creating high-quality video content that tells your story in the most compelling way possible. From concept to final cut, I handle every aspect of video editing with meticulous attention to detail, ensuring your content resonates with your audience and stands out from the crowd.
            </p>
            <div className="hero-buttons">
              <a href="#cta" className="btn btn-secondary btn-lg">Get In Touch</a>
              <a href="#portfolio" className="btn btn-primary btn-lg">View Portfolio</a>
            </div>
            <div className="hero-social">
              <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><i className="bx bxl-upwork" /></a>
              <a href="https://www.linkedin.com/in/naukhaiz-anjum-302218158/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin" /></a>
              <a href="https://wa.me/+923314411708" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bx bxl-whatsapp" /></a>
              <a href="mailto:naukhaizanjum252@gmail.com" aria-label="Email"><i className="bx bx-envelope" /></a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-bg-shape" />
            <img src="/images/5.png" alt="Naukhaiz Anjum - Video Editor" loading="eager" />
          </div>
        </div>
        <div className="scroll-down-indicator"><span /></div>
      </header>

      <main>
        <section id="about">
          <div className="container">
            <h2>About me</h2>
            <p className="subtitle">Top Rated Plus video editor with a passion for storytelling</p>
            <div className="divider" />
            <p>I&apos;m Naukhaiz Anjum, a video editor who believes every frame tells a story. I help brands, creators, and businesses bring their visions to life through compelling visual narratives—from short-form social content to long-form documentaries and everything in between.</p>
            <p>I specialize in creating content that not only looks great but drives engagement and delivers results. Whether it&apos;s a brand commercial, YouTube series, or documentary project, I bring fresh creativity and technical precision to every edit.</p>
            <p>My clients value reliability, fast turnaround, and the ability to take feedback and apply creativity to deliver exactly what they need. I&apos;d love to do the same for you.</p>
            <a href="#portfolio" className="btn-link">View My Work</a>
          </div>
        </section>

        <section id="services">
          <h2>What I do</h2>
          <p className="subtitle">Professional video services tailored to your needs</p>
          <div className="divider" />
          <div className="service-cards">
            {[
              { icon: "bx-video", title: "Video Editing", desc: "Professional editing with color grading, sound design, and seamless transitions. Short-form and long-form content for YouTube, social media, and more." },
              { icon: "bx-shape-triangle", title: "Motion Graphics", desc: "Eye-catching motion graphics and animations. Cool typography and visual elements that give your videos a polished, professional look." },
              { icon: "bx-edit", title: "Scriptwriting & Storytelling", desc: "Compelling narratives that capture your message and keep viewers hooked. From concept to final cut, I craft stories that resonate." },
              { icon: "bx-camera-movie", title: "Long-Form & Documentary", desc: "In-depth pieces that explore topics in depth. Documentary-style editing, YouTube long-form, and content that builds rhythm and keeps audiences engaged." },
              { icon: "bx-volume-full", title: "Audio & Sound Design", desc: "Clear audio, mixing, and sound design that supports your story. Professional quality that enhances every frame." },
              { icon: "bx-palette", title: "Brand & Social Content", desc: "Strategic video content for brands and creators. TikTok-style edits, captions, and formats optimized for engagement and reach." },
            ].map((item) => (
              <div key={item.title} className="card">
                <i className={`bx ${item.icon}`} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="#portfolio" className="btn-link">View Portfolio</a>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <p className="subtitle">Short-form and long-form videos — click any thumbnail to watch</p>
          <div className="divider" />
          <h3 className="portfolio-subtitle">Short Form</h3>
          <p className="portfolio-section-desc">The Ultimate Video Editing Experience — I specialize in creating visually stunning videos using the latest techniques and tools. With a passion for storytelling and a keen eye for detail, I transform raw footage into captivating narratives. Whether it&apos;s a corporate video, a cinematic project, or dynamic social media content, I bring your vision to life with precision and creativity.</p>
          <div className="portfolio-grid portfolio-grid--short">
            {SHORT_FORM_VIDEOS.map((v, i) => (
              <button key={i} type="button" className="portfolio-video-card" onClick={() => openModal(v.src)} aria-label={`Play short-form video ${i + 1}`}>
                <img src={v.thumb} alt={`Short-form video ${i + 1}`} loading="lazy" />
                <span className="portfolio-play"><i className="bx bx-play" /></span>
              </button>
            ))}
          </div>

          <h3 className="portfolio-subtitle">Long Form</h3>
          <p className="portfolio-section-desc long-form-intro">Comprehensive Creations — Discover an array of extended content pieces, each a testament to the art of storytelling through video. These in-depth long-form projects provide a detailed exploration of editing techniques, narrative structures, and the creative processes behind my most ambitious works. Choose a category below to load videos from that folder.</p>
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
        </section>

        <section id="testimonials">
          <h2>What Clients Say</h2>
          <p className="subtitle">Trusted by founders, agencies, and creators worldwide</p>
          <div className="divider" />
          <p className="section-intro">Discover the impact of working with me through the words of those who have experienced my dedication and commitment to excellence firsthand.</p>
          <div className="testimonials-container">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((i) => <i key={i} className="bx bxs-star" />)}
                </div>
                <p dangerouslySetInnerHTML={{ __html: t.quote }} />
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
          <div className="testimonials-cta">
            <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">View all reviews on Upwork</a>
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <p className="subtitle">Industry-leading software and creative techniques</p>
          <div className="divider" />
          <div className="skills-container">
            <div className="skills-text">
              <p>I&apos;ve mastered video production using cutting-edge software and techniques—from color grading and motion graphics to narrative pacing. I combine technical precision with creative vision and stay updated with industry trends to deliver the most effective solutions for your projects.</p>
              <a href="#cta" className="btn-link">Let&apos;s Collaborate</a>
            </div>
            <div className="skills-bars">
              {["CAPCUT PRO", "ADOBE PREMIERE PRO", "AFTER EFFECTS", "THUMBNAIL DESIGN", "AI VOICE OVERS", "MOTION GRAPHICS", "COLOR GRADING"].map((label, i) => (
                <div key={label} className="skill">
                  <p>{label}</p>
                  <div className="bar"><div className="progress" style={{ width: [88, 95, 90, 85, 90, 88, 90][i] + "%" }} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta">
          <div className="container">
            <div className="cta-container">
              <div className="cta-image">
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1887&auto=format&fit=crop" alt="Creative video production" loading="lazy" />
              </div>
              <div className="cta-text">
                <h2>Let&apos;s Connect</h2>
                <p>Have a video project in mind? Let&apos;s bring your vision to life. Whether it&apos;s social media content, promotional videos, or something unique, I&apos;m here to help. Reach out through the platforms below or contact me directly. Let&apos;s create something great together!</p>
                <div className="cta-buttons">
                  <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Upwork</a>
                  <a href="https://www.linkedin.com/in/naukhaiz-anjum-302218158/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">LinkedIn</a>
                  <a href="https://wa.me/+923314411708" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">WhatsApp</a>
                  <a href="mailto:naukhaizanjum252@gmail.com" className="btn btn-primary btn-lg">Email</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="#" className="logo"><i className="bx bxs-camera-movie" /> NAUKHAIZ ANJUM</a>
          </div>
          <div className="footer-copyright">
            <p>© 2026 Naukhaiz Anjum · Video Editor · Top Rated Plus</p>
          </div>
          <div className="footer-social">
            <a href="https://www.upwork.com/freelancers/naukhaiz" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><i className="bx bxl-upwork" /></a>
            <a href="https://www.linkedin.com/in/naukhaiz-anjum-302218158/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin" /></a>
            <a href="https://wa.me/+923314411708" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bx bxl-whatsapp" /></a>
            <a href="mailto:naukhaizanjum252@gmail.com" aria-label="Email"><i className="bx bx-envelope" /></a>
          </div>
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
