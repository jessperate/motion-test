'use client'

import { useEffect, useState } from 'react'
import { logos } from './logos'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Serrif VF';
          src: url('/SerrifVF.ttf') format('truetype');
          font-weight: 100 900;
          font-style: normal;
        }
        @font-face {
          font-family: 'Saans';
          src: url('/Saans-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Saans';
          src: url('/Saans-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'Saans';
          src: url('/Saans-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: 'Saans Mono';
          src: url('/SaansMono-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Saans', 'Helvetica Neue', sans-serif;
          background: #002910;
          color: #f8fffa;
          overflow-x: hidden;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .grid-line {
          position: absolute;
          background: #008c44;
        }

        .grid-line-h {
          width: 100%;
          height: 1px;
        }

        .grid-line-v {
          height: 100%;
          width: 1px;
        }

        .grid-line-pulse {
          animation: gridPulse 2s ease-in-out infinite;
        }

        @keyframes gridPulse {
          0%, 100% {
            background: #008c44;
            box-shadow: 0 0 0 rgba(0, 255, 100, 0);
          }
          50% {
            background: #00ff64;
            box-shadow: 0 0 8px rgba(0, 255, 100, 0.6);
          }
        }

        .nav-bar {
          position: relative;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 64px;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 48px;
          background: rgba(223, 234, 227, 0.95);
          border-radius: 100px;
          padding: 16px 40px;
        }

        .logo {
          font-family: 'Saans', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #002910;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a {
          color: #002910;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
        }

        .nav-right {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .btn-login {
          background: #ffffff;
          color: #002910;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
        }

        .btn-trial {
          background: #ffffff;
          color: #002910;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
        }

        .btn-demo {
          background: #00ff64;
          color: #002910;
          padding: 14px 32px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 64px 180px;
        }

        .colored-cell {
          position: absolute;
          z-index: 1;
        }

        .profile-photo {
          position: absolute;
          z-index: 3;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          background: #fff;
          border: 3px solid #00ff64;
        }

        .profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        .eyebrow {
          font-family: 'Saans Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #00ff64;
          border: 1px solid #00ff64;
          padding: 8px 16px;
          border-radius: 5px;
          margin-bottom: 32px;
          position: relative;
          z-index: 10;
        }

        .hero-title {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 1100px;
          margin-bottom: 40px;
        }

        .hero-title h1 {
          font-family: 'Serrif VF', Georgia, serif;
          font-size: 96px;
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.02em;
        }

        .hero-title .white {
          color: #f8fffa;
        }

        .hero-title .green {
          color: #00ff64;
        }

        .hero-body {
          position: relative;
          z-index: 10;
          max-width: 680px;
          text-align: center;
          font-size: 18px;
          line-height: 1.6;
          color: #dfeae3;
          margin-bottom: 48px;
        }

        .hero-ctas {
          position: relative;
          z-index: 10;
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .btn-cta {
          background: #00ff64;
          color: #002910;
          padding: 16px 32px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-secondary {
          background: transparent;
          color: #f8fffa;
          padding: 16px 32px;
          border: 1px solid #f8fffa;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
        }

        .integrations-bar {
          position: relative;
          z-index: 10;
          margin-top: 120px;
        }

        .integrations-label {
          font-family: 'Saans Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #008c44;
          text-align: center;
          margin-bottom: 24px;
        }

        .integrations-logos {
          background: rgba(248, 255, 250, 0.98);
          border-radius: 16px;
          padding: 32px 48px;
          display: flex;
          gap: 48px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .integration-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .integration-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .integration-name {
          font-family: 'Saans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #002910;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      {/* Grid Lines */}
      <div className="grid-bg">
        {/* Horizontal lines - every 120px */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className={`grid-line grid-line-h ${[2, 5, 8].includes(i) ? 'grid-line-pulse' : ''}`}
            style={{
              top: `${i * 120}px`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        {/* Vertical lines - every 120px */}
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className={`grid-line grid-line-v ${[3, 7, 11].includes(i) ? 'grid-line-pulse' : ''}`}
            style={{
              left: `${i * 120}px`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">airOps</div>
          <div className="nav-links">
            <a href="#">Platform</a>
            <a href="#">Solutions</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="btn-login">Log in</a>
          <a href="#" className="btn-trial">Start Free Trial</a>
          <a href="#" className="btn-demo">Book a Demo →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Colored Cells - aligned to 120px grid */}
        <div className="colored-cell" style={{ top: '120px', left: '0px', width: '120px', height: '120px', background: '#8b8b2d' }}></div>
        <div className="colored-cell" style={{ top: '240px', right: '0px', width: '120px', height: '120px', background: '#0000cc' }}></div>
        <div className="colored-cell" style={{ top: '480px', right: '0px', width: '120px', height: '120px', background: '#b3428b' }}></div>
        <div className="colored-cell" style={{ top: '600px', right: '0px', width: '120px', height: '120px', background: '#8b8b2d' }}></div>
        <div className="colored-cell" style={{ bottom: '720px', left: '0px', width: '120px', height: '120px', background: '#0000cc' }}></div>
        <div className="colored-cell" style={{ bottom: '600px', left: '240px', width: '120px', height: '120px', background: '#b3428b' }}></div>
        <div className="colored-cell" style={{ bottom: '840px', left: '0px', width: '120px', height: '120px', background: '#0000cc' }}></div>

        {/* Profile Photo - aligned to grid */}
        <div className="profile-photo" style={{ top: '600px', right: '60px' }}>
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #00ff64 0%, #008c44 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 700, color: '#002910' }}>
            A
          </div>
        </div>

        <div className="eyebrow">Enterprise Integrations</div>

        <div className="hero-title">
          <h1>
            <span className="white">Copy, Paste is</span><br />
            <span className="green">so ten years ago</span>
          </h1>
        </div>

        <div className="hero-body">
          Enterprise marketing teams spend more time moving content between tools than actually improving it. AirOps connects everything you already use, so your team can focus on the work that drives AI visibility and organic growth, not the logistics around it.
        </div>

        <div className="hero-ctas">
          <a href="#" className="btn-cta">Book a demo →</a>
          <a href="#" className="btn-secondary">Explore Integrations Marketplace</a>
        </div>

        {/* Integrations Bar */}
        <div className="integrations-bar">
          <div className="integrations-label">Connects with the tools your team already uses</div>
          <div className="integrations-logos">
            <div className="integration-item">
              <div className="integration-icon">{logos.webflow}</div>
              <div className="integration-name">Webflow</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.wordpress}</div>
              <div className="integration-name">WordPress</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.contentful}</div>
              <div className="integration-name">Contentful</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.sanity}</div>
              <div className="integration-name">Sanity</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.asana}</div>
              <div className="integration-name">Asana</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.clickup}</div>
              <div className="integration-name">ClickUp</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.monday}</div>
              <div className="integration-name">Monday</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">{logos.airtable}</div>
              <div className="integration-name">Airtable</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
