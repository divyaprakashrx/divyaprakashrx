import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUp, stagger, cardReveal, VP } from '../../utils/motionVariants';
import {
  Cpu, Binary, Network, Lock, GitBranch,
  BarChart3, Eye, Globe
} from 'lucide-react';

/* ─── Looping CSS animations (not scroll-triggered) ─────── */
const bitFlip = keyframes`
  0%,80%,100% { content: '0'; }
  40%  { content: '1'; }
`;
const nodeGlow = keyframes`
  0%,100% { fill: rgba(251,191,36,0.4); }
  50%      { fill: rgba(251,191,36,0.9); }
`;

/* ─── Layout ─────────────────────────────────────────── */
const Wrapper = styled.section`
  min-height: 100vh;
  background: #080600;
  color: rgba(255,255,255,0.9);
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-start;
  position: relative; overflow: hidden;
  padding: 5rem 2rem 4rem;
  isolation: isolate;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 50% 0%,   rgba(217,119,6,0.1) 0%, transparent 55%),
      radial-gradient(ellipse 40% 35% at 0%  70%,  rgba(251,191,36,0.06) 0%, transparent 50%),
      radial-gradient(ellipse 40% 30% at 100% 30%, rgba(245,158,11,0.05) 0%, transparent 50%);
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
  color: rgba(251,191,36,0.9);
  background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.22);
  border-radius: 100px; padding: 0.28rem 1rem; margin-bottom: 1.2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 900; margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 40%, #f59e0b 70%, #fef3c7 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: clamp(0.88rem, 1.5vw, 1rem);
  color: rgba(255,255,255,0.38); max-width: 600px; line-height: 1.7;
  margin-bottom: 3rem;
`;

/* ─── Cards grid ─────────────────────────────────────── */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(245,158,11,${p => p.$accent ? '0.38' : '0.1'});
  border-radius: 16px; padding: 1.6rem;
  transition: border-color 0.3s, background 0.3s, transform 0.25s;
  position: relative; overflow: hidden; cursor: default;

  &::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(245,158,11,0.06), transparent 65%);
    opacity: 0; transition: opacity 0.3s;
  }
  &:hover::before { opacity: 1; }
  &:hover {
    border-color: rgba(245,158,11,0.35);
    background: rgba(245,158,11,0.04);
    transform: translateY(-3px);
  }
`;

const CardTop = styled.div`
  display: flex; align-items: flex-start; gap: 0.9rem; margin-bottom: 0.9rem;
`;

const IconWrap = styled.div`
  width: 42px; height: 42px; flex-shrink: 0;
  border-radius: 11px;
  background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.2);
  display: flex; align-items: center; justify-content: center;
  svg { width: 20px; height: 20px; color: rgba(251,191,36,0.9); }
`;

const CardMeta = styled.div``;

const CardTitle = styled.h3`
  font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.88);
  margin-bottom: 0.15rem;
`;

const CardRepo = styled.div`
  font-size: 0.68rem; color: rgba(245,158,11,0.6);
  font-family: monospace; letter-spacing: 0.04em;
`;

const CardDesc = styled.p`
  font-size: 0.8rem; color: rgba(255,255,255,0.42); line-height: 1.65;
  margin-bottom: 1rem;
`;

const TagRow = styled.div`
  display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.9rem;
`;

const Chip = styled.span`
  font-size: 0.68rem; padding: 0.18rem 0.6rem; border-radius: 100px;
  background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.16);
  color: rgba(251,191,36,0.75);
`;

const CardFooter = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  position: relative;
  z-index: 5;
`;

const Stars = styled.div`
  font-size: 0.75rem; color: rgba(255,255,255,0.35);
  display: flex; align-items: center; gap: 0.3rem;
  svg { width: 12px; height: 12px; color: rgba(251,191,36,0.6); }
`;

const RepoLink = styled.a`
  font-size: 0.75rem; font-weight: 600;
  color: rgba(251,191,36,0.75); text-decoration: none;
  border-bottom: 1px solid rgba(251,191,36,0.2);
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
  position: relative;
  z-index: 10;
  pointer-events: auto;
  &:hover { color: rgba(253,230,138,1); border-color: rgba(253,230,138,0.5); }
`;

/* ─── ALU Visualizer ─────────────────────────────────── */
const ALUViz = styled.div`
  margin-top: 0.8rem;
  display: grid; grid-template-columns: repeat(8,1fr); gap: 3px;
`;

const BitCell = styled.div`
  height: 22px; border-radius: 4px;
  background: ${p => p.$on
    ? 'rgba(251,191,36,0.75)'
    : 'rgba(255,255,255,0.06)'};
  border: 1px solid ${p => p.$on
    ? 'rgba(251,191,36,0.5)'
    : 'rgba(255,255,255,0.06)'};
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; font-family: monospace;
  color: ${p => p.$on ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.2)'};
  transition: background 0.2s, border 0.2s;
`;

const OpsRow = styled.div`
  display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.5rem;
`;

const OpChip = styled.span`
  font-size: 0.65rem; padding: 0.15rem 0.5rem; border-radius: 5px;
  background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.2);
  color: rgba(251,191,36,0.8); font-family: monospace;
`;

/* ─── Neural viz ─────────────────────────────────────── */
const NeuralSVG = styled.svg`
  width: 100%; height: 70px; margin-top: 0.6rem;
  circle { animation: ${nodeGlow} 2s ease-in-out infinite; }
`;

/* ─── Data ─────────────────────────────────────────────*/
const projects = [
  {
    icon: <Cpu />,
    title: '32-Bit ALU in Logisim',
    repo: 'divyaprakashrx/32-Bit-ALU-Logisim',
    desc: 'Complete 32-bit Arithmetic Logic Unit designed in Logisim. Supports AND, OR, NOT, Negation, Addition, Subtraction, Multiplication and Division at gate level.',
    tags: ['Digital Logic','Logisim','32-bit','ALU','Hardware'],
    stars: 9,
    links: [{ url: 'https://github.com/divyaprakashrx/32-Bit-ALU-Logisim', label: 'View on GitHub ↗' }],
    accent: true,
    visual: 'alu',
  },
  {
    icon: <Binary />,
    title: '32-Bit FPU in Logisim',
    repo: 'divyaprakashrx/32-Bit-FPU-Logisim',
    desc: 'Full 32-bit Floating Point Unit with Add, Sub, Mul, Div operations. Includes overflow detection for all arithmetic ops and divide-by-zero indicator.',
    tags: ['FPU','Floating Point','Logisim','IEEE 754','Hardware'],
    stars: 8,
    links: [{ url: 'https://github.com/divyaprakashrx/32-Bit-FPU-Logisim', label: 'View on GitHub ↗' }],
    accent: false,
    visual: 'fpu',
  },
  {
    icon: <Eye />,
    title: 'MNIST CNN — 99.9% Accuracy',
    repo: 'divyaprakashrx/mnist-using-cnn',
    desc: 'Convolutional neural network trained on the MNIST handwritten digit dataset, achieving 99.9% accuracy. Explores optimisation techniques for deep learning classifiers.',
    tags: ['CNN','Deep Learning','MNIST','Python','Jupyter'],
    stars: 0,
    links: [{ url: 'https://github.com/divyaprakashrx/mnist-using-cnn', label: 'View on GitHub ↗' }],
    accent: false,
    visual: 'neural',
  },
  {
    icon: <Lock />,
    title: 'Masked Autoencoder with Neural Cryptography',
    repo: 'Research Paper · NIT Patna',
    desc: 'Developed a secure secret image-sharing technique integrating TPM, masked autoencoders, Shamir\'s scheme, and neural cryptography. Enhances resilience against noise-induced image loss for medical imaging and secure transfers. Reduces computational overhead while ensuring secure key generation over public channels.',
    tags: ['TPM','BERT','GPT','Neural Crypto','Shamir Scheme','Medical Imaging'],
    stars: null,
    links: [
      { url: 'https://docs.google.com/document/d/e/2PACX-1vSpmaUuaBccJfXk7JkfrjHW2Y0PwU7ICVRbPyJAOW2YVzP4gTPUyBnh6NqJlY9CpfYPKOyPdy5Gwa4i/pub', label: 'View Paper ↗' }
    ],
    accent: true,
    visual: 'crypto',
  },
  {
    icon: <GitBranch />,
    title: 'Railway Security System — SIH 2020 Finalist',
    repo: 'divyaprakashrx/SIH-railway',
    desc: 'Smart India Hackathon 2020 Grand Finale project for Indian Railways. Created a reusable seal system with real-time GPS tracking for logistics trains, replacing conventional paper seals. Features IoT-based unauthorized access alerting and cloud-based compartment status monitoring using Firebase, NRF2401, Arduino, and Mapbox.',
    tags: ['IoT','GPS','Arduino','Firebase','Cloud','Microcontrollers','SIH 2020'],
    stars: 0,
    links: [{ url: 'https://github.com/divyaprakashrx/SIH-railway', label: 'View on GitHub ↗' }],
    accent: false,
    visual: null,
  },
  {
    icon: <Globe />,
    title: 'NIT Patna Employee Management Portal',
    repo: 'nitpweb · NIT Patna',
    desc: 'Modernized university system serving 3,000+ students and 350+ employees daily. Eliminated manual processes with NextJS, GatsbyJS, SSO, and Google Drive integration. Built scalable SSR application with 0.5s load time, CI/CD pipeline, and secure end-to-end APIs. Replaced outdated technologies with modern platform achieving high performance and security.',
    tags: ['NextJS','GatsbyJS','SSO','CI/CD','Google Drive','SSR','Scale'],
    stars: 0,
    links: [
      { url: 'https://github.com/nitpweb/adminportal', label: 'Admin Portal ↗' },
      { url: 'https://github.com/nitpweb/nitp-web-front', label: 'Frontend ↗' },
      { url: 'https://www.nitp.ac.in', label: 'Live Site ↗' }
    ],
    accent: true,
    visual: null,
  },
];

function ALUVisual() {
  const [bits, setBits] = useState(() => Array.from({length:16}, () => Math.random() > 0.5));
  useEffect(() => {
    const id = setInterval(() => {
      setBits(prev => prev.map((b,i) => i === Math.floor(Math.random()*16) ? !b : b));
    }, 300);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <ALUViz>
        {bits.map((b, i) => <BitCell key={i} $on={b}>{b ? '1' : '0'}</BitCell>)}
      </ALUViz>
      <OpsRow>
        {['AND','OR','NOT','ADD','SUB','MUL','DIV','NEG'].map(op => (
          <OpChip key={op}>{op}</OpChip>
        ))}
      </OpsRow>
    </>
  );
}

function NeuralVisual() {
  const layers = [3, 5, 4, 2];
  const maxN = Math.max(...layers);
  const W = 220, H = 70;
  const xStep = W / (layers.length + 1);
  const nodes = layers.map((n, li) => {
    const yStep = H / (n + 1);
    return Array.from({length: n}, (_, ni) => ({
      x: xStep * (li + 1),
      y: yStep * (ni + 1),
      delay: `${(li * n + ni) * 0.2}s`,
    }));
  });
  return (
    <NeuralSVG viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      {nodes.map((layer, li) =>
        layer.map((n, ni) =>
          li < nodes.length - 1 &&
          nodes[li+1].map((n2, ni2) => (
            <line key={`${li}-${ni}-${ni2}`}
              x1={n.x} y1={n.y} x2={n2.x} y2={n2.y}
              stroke="rgba(251,191,36,0.12)" strokeWidth="0.8" />
          ))
        )
      )}
      {nodes.map((layer, li) =>
        layer.map((n, ni) => (
          <circle key={`n-${li}-${ni}`}
            cx={n.x} cy={n.y} r="4"
            fill="rgba(251,191,36,0.4)"
            style={{ animationDelay: n.delay }}
          />
        ))
      )}
    </NeuralSVG>
  );
}

export default function ResearchSection({ id }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 45 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random()-0.5)*0.1, dy: (Math.random()-0.5)*0.1,
      a: Math.random()*0.28+0.04,
    }));
    let visible = false;
    const draw = () => {
      if (!visible) return;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pts.forEach(d => {
        d.x+=d.dx/canvas.width; d.y+=d.dy/canvas.height;
        if(d.x<0)d.x=1; if(d.x>1)d.x=0; if(d.y<0)d.y=1; if(d.y>1)d.y=0;
        ctx.beginPath(); ctx.arc(d.x*canvas.width, d.y*canvas.height, d.r, 0, Math.PI*2);
        ctx.fillStyle=`rgba(245,158,11,${d.a})`; ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) { cancelAnimationFrame(animRef.current); animRef.current = requestAnimationFrame(draw); }
      else cancelAnimationFrame(animRef.current);
    }, { threshold: 0.01 });
    observer.observe(canvas);
    return () => { window.removeEventListener('resize',resize); cancelAnimationFrame(animRef.current); observer.disconnect(); };
  },[]);

  return (
    <Wrapper id={id}>
      <Canvas ref={canvasRef} />
      <Inner>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}>
          <Tag>Research · Computer Science · Academic</Tag>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.08 }}>
          <SectionTitle>Research &amp; Systems</SectionTitle>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.16 }}>
          <Subtitle>
            From gate-level hardware design to neural cryptography — explorations
            at the intersection of systems, security, and machine intelligence.
          </Subtitle>
        </motion.div>

        <motion.div variants={stagger(0.1, 0.08)} initial="hidden" whileInView="show" viewport={VP}>
          <Grid>
            {projects.map((p, i) => (
              <motion.div key={i} variants={cardReveal(0)}>
                <Card $accent={p.accent}>
                  <CardTop>
                    <IconWrap>{p.icon}</IconWrap>
                    <CardMeta>
                      <CardTitle>{p.title}</CardTitle>
                      <CardRepo>{p.repo}</CardRepo>
                    </CardMeta>
                  </CardTop>
                  <CardDesc>{p.desc}</CardDesc>
                  <TagRow>{p.tags.map(t => <Chip key={t}>{t}</Chip>)}</TagRow>

                  {p.visual === 'alu' && <ALUVisual />}
                  {p.visual === 'fpu' && <ALUVisual />}
                  {p.visual === 'neural' && <NeuralVisual />}
                  {p.visual === 'crypto' && (
                    <div style={{display:'flex',gap:'0.4rem',flexWrap:'wrap',marginTop:'0.5rem'}}>
                      {['🔐 Key Exchange','🧠 Adversarial Training','🔒 Secret Sharing','⚡ No Key Transmission'].map(l=>(
                        <span key={l} style={{fontSize:'0.7rem',padding:'0.2rem 0.5rem',borderRadius:'6px',background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.18)',color:'rgba(251,191,36,0.75)'}}>{l}</span>
                      ))}
                    </div>
                  )}

                  <CardFooter style={{marginTop:'0.9rem',flexWrap:'wrap',gap:'0.5rem'}}>
                    {p.stars !== null ? (
                      <Stars><BarChart3 size={12} /> {p.stars} stars</Stars>
                    ) : <span style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.25)'}}>Academic</span>}
                    {p.links && p.links.length > 0 && (
                      <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
                        {p.links.map((link, idx) => (
                          <RepoLink key={idx} href={link.url} target="_blank" rel="noopener">{link.label}</RepoLink>
                        ))}
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Inner>
    </Wrapper>
  );
}
