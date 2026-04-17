import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUp, fadeUpSlow, stagger, cardReveal, VP } from '../../utils/motionVariants';
import {
  MousePointer2, Keyboard, Volume2, Monitor, Search,
  Smartphone, Palette, Star, Globe, Wifi, Shield,
  LayoutGrid, Sliders, Zap
} from 'lucide-react';

/* ─── Looping CSS animations (not scroll-triggered) ─────── */
const floatY = keyframes`
  0%,100% { transform: translateY(0) rotate(-2deg); }
  50%      { transform: translateY(-14px) rotate(2deg); }
`;
const glowPulse = keyframes`
  0%,100% { box-shadow: 0 0 30px rgba(6,182,212,0.18), 0 0 60px rgba(6,182,212,0.06); }
  50%      { box-shadow: 0 0 50px rgba(6,182,212,0.32), 0 0 90px rgba(6,182,212,0.1); }
`;
const scanLine = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
`;

/* ─── Layout ──────────────────────────────────────────── */
const Wrapper = styled.section`
  min-height: 100vh;
  background: #020c10;
  color: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  padding: 5rem 2rem 4rem;
  isolation: isolate;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 50% 100%, rgba(6,182,212,0.10) 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at 0%   40%, rgba(14,165,233,0.06) 0%, transparent 55%),
      radial-gradient(ellipse 40% 35% at 100% 10%, rgba(6,182,212,0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Canvas = styled.canvas`
  position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0;
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

/* ─── Header ──────────────────────────────────────────── */
const Tag = styled.span`
  display: inline-block;
  font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(103,232,249,0.9);
  background: rgba(6,182,212,0.08); border: 1px solid rgba(6,182,212,0.22);
  border-radius: 100px; padding: 0.28rem 1rem; margin-bottom: 1.2rem;
`;

const HeroTitle = styled.h2`
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 900; line-height: 1.0; margin-bottom: 0.3rem;
  background: linear-gradient(135deg, #67e8f9 0%, #22d3ee 40%, #38bdf8 70%, #bae6fd 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
`;

const Tagline = styled.p`
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);
  color: rgba(255,255,255,0.4); font-style: italic;
  margin-bottom: 2rem; max-width: 560px;
`;

/* ─── Ratings row ─────────────────────────────────────── */
const RatingRow = styled.div`
  display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.8rem;
`;

const Badge = styled.div`
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.75rem; font-weight: 600; padding: 0.32rem 0.8rem;
  border-radius: 100px;
  background: ${p => p.$bg || 'rgba(6,182,212,0.1)'};
  border: 1px solid ${p => p.$border || 'rgba(6,182,212,0.25)'};
  color: ${p => p.$color || 'rgba(103,232,249,0.9)'};
  svg { width: 12px; height: 12px; }
`;

/* ─── Two-column layout ───────────────────────────────── */
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 2.5rem; align-items: start;

  @media (max-width: 960px) { grid-template-columns: 1fr; }
`;

/* ─── Feature grid ────────────────────────────────────── */
const FeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
  margin-bottom: 1.5rem;

  @media (max-width: 540px) { grid-template-columns: repeat(2,1fr); }
`;

const FeatCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(6,182,212,${p => p.$hot ? '0.35' : '0.1'});
  border-radius: 12px; padding: 1.1rem 0.9rem;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
  display: flex; flex-direction: column; gap: 0.4rem;

  &:hover {
    border-color: rgba(6,182,212,0.38);
    background: rgba(6,182,212,0.06);
    transform: translateY(-3px);
  }
`;

const FeatIconWrap = styled.div`
  width: 34px; height: 34px; border-radius: 9px;
  background: rgba(6,182,212,0.12); border: 1px solid rgba(6,182,212,0.2);
  display: flex; align-items: center; justify-content: center;
  svg { width: 16px; height: 16px; color: rgba(103,232,249,0.9); }
`;

const FeatTitle = styled.div`
  font-size: 0.82rem; font-weight: 700; color: rgba(255,255,255,0.85);
`;

const FeatDesc = styled.div`
  font-size: 0.72rem; color: rgba(255,255,255,0.4); line-height: 1.5;
`;

/* ─── CTA ─────────────────────────────────────────────── */
const CTARow = styled.div`
  display: flex; gap: 0.8rem; flex-wrap: wrap;
`;

const Btn = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.68rem 1.4rem; border-radius: 100px;
  font-size: 0.84rem; font-weight: 700; text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  svg { width: 14px; height: 14px; }
  &:hover { transform: translateY(-2px); }
`;

const PrimaryBtn = styled(Btn)`
  background: linear-gradient(135deg, #0891b2, #0e7490);
  color: white; border: 1px solid rgba(6,182,212,0.3);
  box-shadow: 0 4px 15px rgba(8,145,178,0.25);
  &:hover { box-shadow: 0 8px 24px rgba(8,145,178,0.4); }
`;

const OutlineBtn = styled(Btn)`
  background: rgba(6,182,212,0.08); color: rgba(103,232,249,0.9);
  border: 1px solid rgba(6,182,212,0.22);
  &:hover { background: rgba(6,182,212,0.14); }
`;

/* ─── Phone mockup ────────────────────────────────────── */
const PhoneWrap = styled.div`
  display: flex; flex-direction: column; gap: 1.2rem; align-items: center;
  @media (max-width: 960px) { display: none; }
`;

const Phone = styled.div`
  width: 200px; height: 380px; border-radius: 32px;
  border: 2px solid rgba(6,182,212,0.28);
  background: linear-gradient(160deg, rgba(6,182,212,0.06) 0%, rgba(14,116,144,0.04) 100%);
  position: relative; overflow: hidden;
  animation: ${floatY} 5s ease-in-out infinite, ${glowPulse} 3.5s ease-in-out infinite;
  backdrop-filter: blur(4px);

  &::before {
    content: '';
    position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
    width: 55px; height: 5px; border-radius: 3px;
    background: rgba(6,182,212,0.22);
  }
`;

const ScanEffect = styled.div`
  position: absolute; inset: 0; overflow: hidden; pointer-events: none;
  &::after {
    content: '';
    position: absolute; left: 0; right: 0; height: 60px;
    background: linear-gradient(to bottom, transparent, rgba(6,182,212,0.08), transparent);
    animation: ${scanLine} 3s linear infinite;
  }
`;

const PhoneUI = styled.div`
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.6rem; padding: 2.5rem 1rem 1rem;
`;

const PhoneIcon = styled.div`
  font-size: 2.4rem;
  filter: drop-shadow(0 0 16px rgba(6,182,212,0.6));
  
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;

const PhoneLabel = styled.div`
  font-size: 0.9rem; font-weight: 800;
  color: rgba(255,255,255,0.9); letter-spacing: 0.03em;
`;

const PhoneSub = styled.div`
  font-size: 0.62rem; color: rgba(6,182,212,0.7); text-align: center; line-height: 1.4;
`;

const PhoneBar = styled.div`
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent);
  margin: 0.3rem 0;
`;

const MiniButtons = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 0.35rem; width: 100%;
  padding: 0 0.3rem;
`;

const MiniBtn = styled.div`
  background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.18);
  border-radius: 7px; padding: 0.4rem 0;
  display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  svg { width: 12px; height: 12px; color: rgba(103,232,249,0.7); }
  span { font-size: 0.5rem; color: rgba(255,255,255,0.4); }
`;

const StatsGrid = styled.div`
  display: grid; grid-template-columns: repeat(2,1fr); gap: 0.7rem; width: 100%;
`;

const StatCard = styled.div`
  background: rgba(6,182,212,0.07); border: 1px solid rgba(6,182,212,0.14);
  border-radius: 11px; padding: 0.8rem; text-align: center;
`;
const StatVal = styled.div`
  font-size: 1.2rem; font-weight: 800;
  background: linear-gradient(135deg, #67e8f9, #38bdf8);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
`;
const StatLbl = styled.div`
  font-size: 0.62rem; color: rgba(255,255,255,0.3);
  text-transform: uppercase; letter-spacing: 0.06em; margin-top: 0.15rem;
`;

/* ─── Data ────────────────────────────────────────────── */
const badges = [
  { icon: <Star size={12}/>, label: '5.0★ Rated',         bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)', color: 'rgba(253,230,138,0.9)' },
  { icon: <Shield size={12}/>, label: 'Zero Data Collected', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.22)', color: 'rgba(110,231,183,0.9)' },
  { icon: <Globe size={12}/>, label: '9 Languages',         bg: 'rgba(6,182,212,0.1)',  border: 'rgba(6,182,212,0.22)', color: 'rgba(103,232,249,0.9)' },
  { icon: <Smartphone size={12}/>, label: 'iPhone · iPad · Mac', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.22)', color: 'rgba(165,180,252,0.9)' },
];

const feats = [
  { icon: <MousePointer2/>, title: 'Trackpad Control',   desc: 'Smooth cursor movement, clicking and scrolling', hot: false },
  { icon: <Keyboard/>,      title: 'Full Keyboard',      desc: 'F1–F12, modifier keys, custom shortcuts',       hot: true  },
  { icon: <LayoutGrid/>,    title: 'Smart Shortcuts',    desc: 'App-specific — auto-detects your active Mac app', hot: true  },
  { icon: <Volume2/>,       title: 'Media Controls',     desc: 'Play, pause, volume, playback control',          hot: false },
  { icon: <Palette/>,       title: '50+ Themes',         desc: 'Pre-designed + fully custom colour themes',      hot: false },
  { icon: <Sliders/>,       title: 'QuickBoard Mode',    desc: 'Two-handed landscape layout for power users',    hot: true  },
  { icon: <Search/>,        title: 'Spotlight Search',   desc: 'Instant Mac Spotlight from your iPhone',         hot: false },
  { icon: <Zap/>,           title: 'Unlimited Shortcuts',desc: 'System-level & per-app custom shortcuts',        hot: false },
  { icon: <Wifi/>,           title: 'Fast Connect',      desc: 'Low-latency local network connection',           hot: false },
];

export default function UnyxSection({ id }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const dots = Array.from({ length: 50 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.1 + 0.3,
      dx: (Math.random() - 0.5) * 0.11, dy: (Math.random() - 0.5) * 0.11,
      a: Math.random() * 0.3 + 0.05,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.dx / canvas.width; d.y += d.dy / canvas.height;
        if (d.x < 0) d.x = 1; if (d.x > 1) d.x = 0;
        if (d.y < 0) d.y = 1; if (d.y > 1) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x * canvas.width, d.y * canvas.height, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${d.a})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animRef.current); };
  }, []);

  return (
    <Wrapper id={id}>
      <Canvas ref={canvasRef} />
      <Inner>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}>
          <Tag>Founder · Designer · Engineer</Tag>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.08 }}>
          <HeroTitle>Unyx</HeroTitle>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.16 }}>
          <Tagline>
            The Most Adaptive Productivity Companion for Mac —
            your iPhone as the ultimate remote controller.
          </Tagline>
        </motion.div>

        <motion.div variants={stagger(0.05)} initial="hidden" whileInView="show" viewport={VP}>
          <RatingRow>
            {badges.map((b, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Badge $bg={b.bg} $border={b.border} $color={b.color}>
                  {b.icon}{b.label}
                </Badge>
              </motion.div>
            ))}
          </RatingRow>
        </motion.div>

        <ContentGrid>
          <div>
            <motion.div variants={stagger(0.1, 0.07)} initial="hidden" whileInView="show" viewport={VP}>
              <FeatGrid>
                {feats.map((f, i) => (
                  <motion.div key={i} variants={cardReveal(0)}>
                    <FeatCard $hot={f.hot}>
                      <FeatIconWrap>{f.icon}</FeatIconWrap>
                      <FeatTitle>{f.title}</FeatTitle>
                      <FeatDesc>{f.desc}</FeatDesc>
                    </FeatCard>
                  </motion.div>
                ))}
              </FeatGrid>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.3 }}>
              <CTARow>
                <PrimaryBtn href="https://unyxapp.com" target="_blank" rel="noopener">
                  <Globe /> unyxapp.com
                </PrimaryBtn>
                <OutlineBtn href="https://apps.apple.com/us/app/unyx/id6748263146" target="_blank" rel="noopener">
                  <Smartphone /> App Store
                </OutlineBtn>
              </CTARow>
            </motion.div>
          </div>

          <motion.div variants={fadeUpSlow} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.25 }}>
            <PhoneWrap>
              <Phone>
                <ScanEffect />
                <PhoneUI>
                  <PhoneIcon>
                    <img src="/logos/unyx.png" alt="Unyx" />
                  </PhoneIcon>
                  <PhoneLabel>Unyx</PhoneLabel>
                  <PhoneSub>iPhone → Mac{'\n'}Remote Control</PhoneSub>
                  <PhoneBar />
                  <MiniButtons>
                    <MiniBtn><MousePointer2 /><span>Track</span></MiniBtn>
                    <MiniBtn><Keyboard /><span>Keys</span></MiniBtn>
                    <MiniBtn><Zap /><span>Quick</span></MiniBtn>
                  </MiniButtons>
                </PhoneUI>
              </Phone>

              <StatsGrid>
                <StatCard><StatVal>5.0★</StatVal><StatLbl>App Rating</StatLbl></StatCard>
                <StatCard><StatVal>50+</StatVal><StatLbl>App Shortcuts</StatLbl></StatCard>
                <StatCard><StatVal>9</StatVal><StatLbl>Languages</StatLbl></StatCard>
                <StatCard><StatVal>0</StatVal><StatLbl>Data Collected</StatLbl></StatCard>
              </StatsGrid>
            </PhoneWrap>
          </motion.div>
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
}
