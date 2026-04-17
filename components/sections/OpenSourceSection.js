import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUp, stagger, cardReveal, VP } from '../../utils/motionVariants';

const tickerScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Wrapper = styled.section`
  min-height: 100vh;
  background: #030a04;
  color: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  isolation: isolate;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,197,94,0.09) 0%, transparent 55%),
      radial-gradient(ellipse 40% 40% at 90% 80%, rgba(74,222,128,0.06) 0%, transparent 55%);
    pointer-events: none;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(34,197,94,0.9);
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.22);
  border-radius: 100px;
  padding: 0.3rem 1rem;
  margin-bottom: 1.2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #86efac 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: rgba(255,255,255,0.45);
  max-width: 640px;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(10, 24, 12, 0.7);
  border: 1px solid rgba(34,197,94,0.14);
  border-radius: 18px;
  padding: 2rem;
  transition: border-color 0.3s, transform 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent);
  }

  &:hover {
    border-color: rgba(34,197,94,0.35);
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
`;

const CardSubtitle = styled.div`
  font-size: 0.75rem;
  color: rgba(34,197,94,0.7);
  margin-top: 0.1rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.65;
  margin-bottom: 1.2rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.4rem;
`;

const Chip = styled.span`
  font-size: 0.72rem;
  padding: 0.2rem 0.65rem;
  border-radius: 100px;
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.18);
  color: rgba(34,197,94,0.8);
`;

const MetaRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const MetaValue = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
`;

const MetaLabel = styled.div`
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: rgba(255,255,255,0.3);
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(34,197,94,0.85);
  text-decoration: none;
  border-bottom: 1px solid rgba(34,197,94,0.2);
  transition: color 0.2s, border-color 0.2s;
  margin-top: 1rem;

  &:hover {
    color: rgba(74,222,128,1);
    border-color: rgba(74,222,128,0.5);
  }
`;

const TickerTrack = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 1rem;
`;

const TickerInner = styled.div`
  display: flex;
  gap: 1.2rem;
  width: max-content;
  animation: ${tickerScroll} 22s linear infinite;
`;

const TickerItem = styled.span`
  font-size: 0.78rem;
  color: rgba(34,197,94,0.6);
  padding: 0.3rem 0.9rem;
  border: 1px solid rgba(34,197,94,0.12);
  border-radius: 100px;
  white-space: nowrap;
  background: rgba(34,197,94,0.04);
`;

const skills = [
  'Java','Python','Swift','React.js','Next.js','Spring Boot','AWS','Docker',
  'Jinja','System Design','Embedding Engines','Task Queues','LLMOps',
  'Microservices','Node.js','TypeScript','SwiftUI','Kotlin','PostgreSQL','Redis',
];

export default function OpenSourceSection({ id }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.1 + 0.3,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
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
        ctx.fillStyle = `rgba(34,197,94,${d.a})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animRef.current); };
  }, []);

  const doubled = [...skills, ...skills];

  return (
    <Wrapper id={id}>
      <Canvas ref={canvasRef} />
      <Inner>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}>
          <Tag>Open Source · npm · GitHub</Tag>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.08 }}>
          <SectionTitle>Building in Public</SectionTitle>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.16 }}>
          <Subtitle>
            From lightweight libraries to full-scale platforms — everything I build is with the
            community in mind. Open, shareable, and production-ready.
          </Subtitle>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VP}>
          <CardsRow>
            <motion.div variants={cardReveal(0)}>
              <Card>
                <CardHeader>
                  <CardIcon>📦</CardIcon>
                  <div>
                    <CardTitle>xlslite</CardTitle>
                    <CardSubtitle>npm · MIT License</CardSubtitle>
                  </div>
                </CardHeader>
                <CardDescription>
                  The most lightweight, pipe-based XLSX export library. Multi-sheet, CSV→XLSX,
                  auto row-split, strict column guard, tree-shakeable. Only 3.1 kB gzipped — 
                  works in browsers and Node.js with zero DOM dependencies for parsing.
                </CardDescription>
                <TagRow>
                  {['xlsx','excel','csv','pipe-based','tree-shakeable','3.1kB'].map(t => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </TagRow>
                <MetaRow>
                  <MetaItem><MetaValue>656</MetaValue><MetaLabel>Weekly Downloads</MetaLabel></MetaItem>
                  <MetaItem><MetaValue>v1.1.1</MetaValue><MetaLabel>Latest</MetaLabel></MetaItem>
                  <MetaItem><MetaValue>38.1 KB</MetaValue><MetaLabel>Unpacked</MetaLabel></MetaItem>
                </MetaRow>
                <CardLink href="https://www.npmjs.com/package/xlslite" target="_blank" rel="noopener">View on npm ↗</CardLink>
              </Card>
            </motion.div>

            <motion.div variants={cardReveal(0.1)}>
              <Card>
                <CardHeader>
                  <CardIcon>🐙</CardIcon>
                  <div>
                    <CardTitle>GitHub</CardTitle>
                    <CardSubtitle>divyaprakashrx</CardSubtitle>
                  </div>
                </CardHeader>
                <CardDescription>
                  26 public repositories spanning native Swift apps, full-stack systems, 
                  open-source tooling, and university-era org projects. GitHub Extern &apos;21 — 
                  selected in the first global cohort of less than 30 people.
                </CardDescription>
                <TagRow>
                  {['Swift','React','Java','Python','Next.js','Open Source'].map(t => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </TagRow>
                <MetaRow>
                  <MetaItem><MetaValue>26</MetaValue><MetaLabel>Repositories</MetaLabel></MetaItem>
                  <MetaItem><MetaValue>33</MetaValue><MetaLabel>Stars</MetaLabel></MetaItem>
                  <MetaItem><MetaValue>2021</MetaValue><MetaLabel>GitHub Extern</MetaLabel></MetaItem>
                </MetaRow>
                <CardLink href="https://github.com/divyaprakashrx" target="_blank" rel="noopener">View Profile ↗</CardLink>
              </Card>
            </motion.div>
          </CardsRow>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.2 }}>
          <TickerTrack>
            <TickerInner>
              {doubled.map((s, i) => <TickerItem key={i}>{s}</TickerItem>)}
            </TickerInner>
          </TickerTrack>
        </motion.div>
      </Inner>
    </Wrapper>
  );
}
