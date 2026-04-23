:root {
  --bg: #0f172a;
  --card: #111827;
  --light: #f8fafc;
  --muted: #cbd5e1;
  --accent: #38bdf8;
  --accent-dark: #0ea5e9;
  --border: rgba(255, 255, 255, 0.08);
  --white: #ffffff;
  --section-light: #f8fafc;
  --text-dark: #0f172a;
  --muted-dark: #475569;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background: var(--white);
  color: var(--text-dark);
}

.container {
  width: min(1100px, 90%);
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}

.logo {
  color: var(--white);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--light);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent);
}

.menu-toggle {
  display: none;
  background: transparent;
  color: var(--white);
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
}

.hero {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: var(--white);
  padding: 90px 0 80px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: center;
}

.tag {
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 14px;
  letter-spacing: 0.4px;
}

.hero h1 {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 18px;
}

.hero-description {
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 650px;
  margin-bottom: 28px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--accent);
  color: var(--text-dark);
}

.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.hero-card h3 {
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.hero-card ul {
  list-style: none;
}

.hero-card li {
  margin-bottom: 12px;
  color: var(--light);
}

.section {
  padding: 80px 0;
}

.alt-bg {
  background: var(--section-light);
}

.section-header {
  margin-bottom: 36px;
}

.section-label {
  color: var(--accent-dark);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-size: 0.85rem;
}

.section-header h2 {
  font-size: 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;
}

.about-text p {
  margin-bottom: 16px;
  color: var(--muted-dark);
}

.about-box,
.project-card,
.skill-box,
.contact-box {
  background: var(--white);
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
}

.project-grid,
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card h3,
.skill-box h3,
.about-box h3 {
  margin-bottom: 10px;
}

.project-subtitle {
  color: var(--accent-dark);
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.project-card p,
.skill-box p,
.about-box p,
.contact-box p {
  color: var(--muted-dark);
}

.tags {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tags span {
  background: #e0f2fe;
  color: #075985;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
}

.footer {
  background: var(--bg);
  color: var(--muted);
  padding: 22px 0;
  text-align: center;
}

@media (max-width: 900px) {
  .hero-content,
  .about-grid,
  .project-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 5%;
    top: 70px;
    background: #111827;
    width: 220px;
    flex-direction: column;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid var(--border);
    display: none;
  }

  .nav-links.show {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}