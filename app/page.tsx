'use client'

import { useEffect, useState } from 'react'

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
          background-image:
            linear-gradient(#008c4444 1px, transparent 1px),
            linear-gradient(90deg, #008c4444 1px, transparent 1px);
          background-size: 130px 130px;
          z-index: 0;
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
          padding: 12px 32px;
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
          padding: 12px 32px;
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

        .integration-logo {
          position: absolute;
          z-index: 2;
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .pulse-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff64, transparent);
          z-index: 1;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .eyebrow {
          font-family: 'Saans Mono', monospace;
          font-size: 14px;
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
          background: rgba(248, 255, 250, 0.95);
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
          opacity: 0.9;
        }

        .integration-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .integration-name {
          font-family: 'Saans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #002910;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="grid-bg"></div>

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
        {/* Colored Cells */}
        <div className="colored-cell" style={{ top: '120px', left: '5%', width: '130px', height: '130px', background: '#8b8b2d' }}></div>
        <div className="colored-cell" style={{ top: '160px', right: '8%', width: '260px', height: '130px', background: '#0000cc' }}></div>
        <div className="colored-cell" style={{ top: '380px', right: '10%', width: '130px', height: '130px', background: '#b3428b' }}></div>
        <div className="colored-cell" style={{ bottom: '280px', left: '3%', width: '130px', height: '130px', background: '#0000cc' }}></div>
        <div className="colored-cell" style={{ bottom: '180px', left: '15%', width: '130px', height: '130px', background: '#b3428b' }}></div>
        <div className="colored-cell" style={{ bottom: '240px', right: '15%', width: '260px', height: '130px', background: '#8b8b2d' }}></div>

        {/* Integration Logos in Cells */}
        <div className="integration-logo" style={{ top: '140px', left: 'calc(5% + 25px)', background: 'rgba(248, 255, 250, 0.9)', animation: mounted ? 'float 3s ease-in-out infinite' : 'none' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="#002910"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24">W</text></svg>
        </div>
        <div className="integration-logo" style={{ top: '180px', right: 'calc(8% + 90px)', background: 'rgba(248, 255, 250, 0.9)', animationDelay: '0.5s', animation: mounted ? 'float 3s ease-in-out infinite 0.5s' : 'none' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="#002910"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24">C</text></svg>
        </div>
        <div className="integration-logo" style={{ top: '400px', right: 'calc(10% + 25px)', background: 'rgba(248, 255, 250, 0.9)', animationDelay: '1s', animation: mounted ? 'float 3s ease-in-out infinite 1s' : 'none' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="#002910"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24">A</text></svg>
        </div>
        <div className="integration-logo" style={{ bottom: '300px', left: 'calc(3% + 25px)', background: 'rgba(248, 255, 250, 0.9)', animationDelay: '1.5s', animation: mounted ? 'float 3s ease-in-out infinite 1.5s' : 'none' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="#002910"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24">M</text></svg>
        </div>

        {/* Animated Pulse Lines */}
        {mounted && (
          <>
            <div className="pulse-line" style={{ top: '170px', left: 'calc(5% + 105px)', width: '600px', transform: 'rotate(5deg)', animationDelay: '0s' }}></div>
            <div className="pulse-line" style={{ top: '320px', right: 'calc(10% + 55px)', width: '400px', transform: 'rotate(-45deg)', animationDelay: '1s' }}></div>
            <div className="pulse-line" style={{ bottom: '320px', left: 'calc(3% + 80px)', width: '350px', transform: 'rotate(20deg)', animationDelay: '0.5s' }}></div>
          </>
        )}

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
              <div className="integration-icon">🌊</div>
              <div className="integration-name">Webflow</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">📝</div>
              <div className="integration-name">WordPress</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">🎨</div>
              <div className="integration-name">Contentful</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">✅</div>
              <div className="integration-name">Sanity</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">📋</div>
              <div className="integration-name">Asana</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">📊</div>
              <div className="integration-name">ClickUp</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">📅</div>
              <div className="integration-name">Monday.com</div>
            </div>
            <div className="integration-item">
              <div className="integration-icon">🗂️</div>
              <div className="integration-name">Airtable</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
