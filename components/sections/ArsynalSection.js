import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Shield, Cpu, Workflow, Layers, Store, Zap, Lock, EyeOff, Brain, GitBranch, Smartphone, Globe } from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger, cardReveal, VP } from '../../utils/motionVariants';

/* ─── Looping CSS animations (not scroll-triggered) ─────── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;
const pulseRing = keyframes`
  0%   { box-shadow: 0 0 0 0   rgba(139,92,246,0.4); }
  70%  { box-shadow: 0 0 0 14px rgba(139,92,246,0);   }
  100% { box-shadow: 0 0 0 0   rgba(139,92,246,0);   }
`;

/* ─── Layout ─────────────────────────────────────────────── */
const Wrapper = styled.section`
  min-height: 100vh;
  background: #07020f;
  color: rgba(255,255,255,0.9);
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-start;
  overflow: hidden; position: relative;
  padding: 5rem 2rem 4rem;
  isolation: isolate; /* Safari fix for stacking context */
  transform: translateZ(0); /* Force GPU acceleration in Safari */
  -webkit-transform: translateZ(0);

  &::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 90% 55% at 50% 0%,   rgba(109,40,217,0.14) 0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 90% 80%,  rgba(139,92,246,0.07) 0%, transparent 55%),
      radial-gradient(ellipse 40% 30% at 5%  60%,  rgba(99,102,241,0.06) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Canvas = styled.canvas`
  position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0;
`;

const Inner = styled.div`
  position: relative; z-index: 2;
  width: 100%; max-width: 1120px; margin: 0 auto;
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(167,139,250,0.9);
  background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25);
  border-radius: 100px; padding: 0.28rem 1rem; margin-bottom: 1.2rem;
`;

const HeroTitle = styled.h2`
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 900; line-height: 1.0;
  background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 30%, #8b5cf6 60%, #f0abfc 100%);
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  animation: ${shimmer} 4s linear infinite;
`;

const Tagline = styled.p`
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);
  color: rgba(255,255,255,0.42); font-style: italic;
  margin-bottom: 2rem; max-width: 600px;
`;

const PrivacyRow = styled.div`
  display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.8rem;
`;

const PrivacyBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.75rem; font-weight: 600; padding: 0.35rem 0.85rem;
  border-radius: 100px;
  background: ${p => p.$bg}; border: 1px solid ${p => p.$border}; color: ${p => p.$color};
  letter-spacing: 0.02em;
  svg { width: 13px; height: 13px; flex-shrink: 0; }
`;

const ContentGrid = styled.div`
  display: grid; grid-template-columns: 1fr 420px;
  gap: 2.5rem; align-items: start;
  @media (max-width: 1000px) { grid-template-columns: 1fr; }
`;

const PillarsGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const PillarCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(139,92,246, ${p => p.$hot ? '0.4' : '0.1'});
  border-radius: 14px; padding: 1.4rem;
  transition: border-color 0.3s, background 0.3s, transform 0.25s;
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 25% 25%, rgba(139,92,246,0.07), transparent 65%);
    opacity: 0; transition: opacity 0.3s;
  }
  &:hover::before { opacity: 1; }
  &:hover { border-color: rgba(139,92,246,0.38); transform: translateY(-3px); background: rgba(139,92,246,0.06); }
`;

const PillarIconWrap = styled.div`
  width: 38px; height: 38px; border-radius: 10px;
  background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.2);
  display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem;
  svg { width: 18px; height: 18px; color: rgba(167,139,250,0.9); }
`;

const PillarTitle = styled.h3`
  font-size: 0.92rem; font-weight: 700; color: rgba(255,255,255,0.88); margin-bottom: 0.4rem;
`;

const PillarText = styled.p`
  font-size: 0.8rem; color: rgba(255,255,255,0.42); line-height: 1.65;
`;

const RightCol = styled.div`
  display: flex; flex-direction: column; gap: 1.2rem;
`;

const AppCard = styled.div`
  background: rgba(139,92,246,0.08); border: 1px solid rgba(139,92,246,0.2);
  border-radius: 20px; padding: 2rem;
  display: flex; flex-direction: column; align-items: center; gap: 1rem;
`;

const AppIcon = styled.div`
  width: 80px; height: 80px; border-radius: 22px;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  display: flex; align-items: center; justify-content: center;
  font-size: 2.2rem; box-shadow: 0 8px 32px rgba(124,58,237,0.4);
  animation: ${pulseRing} 2.5s ease-out infinite;
  overflow: hidden;
  
  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

const AppName = styled.div`
  font-size: 1.4rem; font-weight: 800;
  background: linear-gradient(90deg, #c4b5fd, #a78bfa);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
`;

const AppDesc = styled.p`
  font-size: 0.8rem; color: rgba(255,255,255,0.4); text-align: center; line-height: 1.55;
`;

const AppStatGrid = styled.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.7rem; width: 100%;
`;

const AppStat = styled.div`
  background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.15);
  border-radius: 10px; padding: 0.7rem; text-align: center;
`;

const AppStatVal = styled.div`
  font-size: 1.1rem; font-weight: 800;
  background: linear-gradient(135deg, #c4b5fd, #a78bfa);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
`;

const AppStatLbl = styled.div`
  font-size: 0.62rem; color: rgba(255,255,255,0.3);
  text-transform: uppercase; letter-spacing: 0.07em; margin-top: 0.15rem;
`;

const FeatureStrip = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.7rem;
`;

const FeatureChip = styled.div`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(139,92,246,0.14);
  border-radius: 10px; padding: 0.8rem 0.6rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
  text-align: center; transition: border-color 0.2s, background 0.2s;
  svg { width: 18px; height: 18px; color: rgba(167,139,250,0.8); }
  &:hover { border-color: rgba(139,92,246,0.35); background: rgba(139,92,246,0.07); }
`;

const FeatureLabel = styled.div`
  font-size: 0.7rem; color: rgba(255,255,255,0.5); line-height: 1.3;
`;

const CTARow = styled.div`
  display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1.8rem;
`;

const CTABtn = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.7rem 1.5rem; border-radius: 100px;
  font-size: 0.85rem; font-weight: 700; text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  svg { width: 15px; height: 15px; }
  &:hover { transform: translateY(-2px); }
`;

const PrimaryBtn = styled(CTABtn)`
  background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white;
  border: 1px solid rgba(139,92,246,0.4); box-shadow: 0 4px 15px rgba(124,58,237,0.25);
  &:hover { box-shadow: 0 8px 24px rgba(124,58,237,0.4); }
`;

const OutlineBtn = styled(CTABtn)`
  background: rgba(139,92,246,0.08); color: rgba(167,139,250,0.9);
  border: 1px solid rgba(139,92,246,0.25);
  &:hover { background: rgba(139,92,246,0.14); }
`;

/* ─── Data ─────────────────────────────────────────────── */
const pillars = [
  { icon: <Cpu />,       title: '0→1 Native Architecture',   text: 'Ground-up native macOS/iOS. No web wrappers. Absolute priority on speed and deep OS-level integration.' },
  { icon: <Workflow />,  title: 'Workflow Orchestration',     text: 'Scheduler for simple and complex process workflows. Powers mini-apps as a backend engine, supports n8n format.' },
  { icon: <Smartphone />,title: 'Mini-Apps Platform',         text: 'Build & run actual mobile mini-apps with deep cross-app communication and native API hooks.' },
  { icon: <Brain />,     title: 'Swift LLM Engine',           text: 'On-device LLM execution with semantic memory via local embeddings. Custom Swift Jinja parser + parallel model executor from scratch.' },
  { icon: <Store />,     title: 'Workflow Marketplace',       text: 'Full backend for users to share, discover and install automation scripts across the platform.' },
  { icon: <Layers />,    title: 'Smart Clipboard',            text: 'Dynamically surfaces the exact OS tools needed based on current clipboard context.' },
];

const features = [
  { icon: <EyeOff />, label: 'On-Device\nOnly' },
  { icon: <GitBranch />, label: 'Visual\nWorkflows' },
  { icon: <Brain />, label: 'Local\nLLMs' },
  { icon: <Layers />, label: 'Mini-App\nPlatform' },
  { icon: <Globe />, label: 'n8n\nCompat.' },
  { icon: <Zap />, label: 'Parallel\nExec.' },
];

const privacyBadges = [
  { icon: <Lock />,   label: '100% On-Device',      bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)',  color: 'rgba(196,181,253,0.9)' },
  { icon: <EyeOff />, label: 'Zero Cloud',           bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)', color: 'rgba(110,231,183,0.9)' },
  { icon: <Shield />, label: 'Privacy by Design',    bg: 'rgba(239,68,68,0.08)',  border: 'rgba(239,68,68,0.22)', color: 'rgba(252,165,165,0.9)' },
  { icon: <Cpu />,    label: 'Native Swift',          bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)', color: 'rgba(165,180,252,0.9)' },
  { icon: <Zap />,    label: 'No Subscription Data', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.22)', color: 'rgba(253,230,138,0.9)' },
];

/* ─── Component ─────────────────────────────────────────── */
export default function ArsynalSection({ id }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.3,
      dx: (Math.random() - 0.5) * 0.14, dy: (Math.random() - 0.5) * 0.14,
      a: Math.random() * 0.35 + 0.05,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;  if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.a})`; ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 95) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${0.06*(1-d/95)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
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
          <Tag>Founder · Architect · Engineer</Tag>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.08 }}>
          <HeroTitle>Arsynal</HeroTitle>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.16 }}>
          <Tagline>
            The most private, native AI platform for macOS &amp; iOS —
            built entirely on-device from a blank canvas.
          </Tagline>
        </motion.div>

        <motion.div variants={stagger(0.05)} initial="hidden" whileInView="show" viewport={VP}>
          <PrivacyRow>
            {privacyBadges.map((b, i) => (
              <motion.div key={i} variants={fadeUp}>
                <PrivacyBadge $bg={b.bg} $border={b.border} $color={b.color}>
                  {b.icon}{b.label}
                </PrivacyBadge>
              </motion.div>
            ))}
          </PrivacyRow>
        </motion.div>

        <ContentGrid>
          <div>
            <motion.div variants={stagger(0.1, 0.08)} initial="hidden" whileInView="show" viewport={VP}>
              <PillarsGrid>
                {pillars.map((p, i) => (
                  <motion.div key={i} variants={cardReveal(0)}>
                    <PillarCard $hot={i === 3}>
                      <PillarIconWrap>{p.icon}</PillarIconWrap>
                      <PillarTitle>{p.title}</PillarTitle>
                      <PillarText>{p.text}</PillarText>
                    </PillarCard>
                  </motion.div>
                ))}
              </PillarsGrid>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.3 }}>
              <CTARow>
                <PrimaryBtn href="https://arsynal.netlify.app" target="_blank" rel="noopener">
                  <Globe /> Visit Arsynal
                </PrimaryBtn>
                <OutlineBtn href="https://testflight.apple.com/join/Jnhg4q3W" target="_blank" rel="noopener">
                  <Zap /> Join Beta
                </OutlineBtn>
              </CTARow>
            </motion.div>
          </div>

          <RightCol>
            <motion.div variants={fadeUpSlow} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.2 }}>
              <AppCard>
                <AppIcon>
                  <img src="/logos/arsynal.svg" alt="Arsynal" />
                </AppIcon>
                <AppName>Arsynal</AppName>
                <AppDesc>Personal AI Assistant · Visual Workflow Builder · Mini-Apps Platform · Full Multi-Agent System</AppDesc>
                <AppStatGrid>
                  <AppStat><AppStatVal>100%</AppStatVal><AppStatLbl>On-Device</AppStatLbl></AppStat>
                  <AppStat><AppStatVal>5</AppStatVal><AppStatLbl>Core Systems</AppStatLbl></AppStat>
                  <AppStat><AppStatVal>iOS + macOS</AppStatVal><AppStatLbl>Native Platforms</AppStatLbl></AppStat>
                  <AppStat><AppStatVal>2+ yrs</AppStatVal><AppStatLbl>In Development</AppStatLbl></AppStat>
                </AppStatGrid>
              </AppCard>
            </motion.div>

            <motion.div variants={stagger(0.15, 0.06)} initial="hidden" whileInView="show" viewport={VP}>
              <FeatureStrip>
                {features.map((f, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <FeatureChip>
                      {f.icon}
                      <FeatureLabel>{f.label}</FeatureLabel>
                    </FeatureChip>
                  </motion.div>
                ))}
              </FeatureStrip>
            </motion.div>
          </RightCol>
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
}
