import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUp, stagger, VP } from '../../utils/motionVariants';
import { siteConfig } from '../../config/site';

const gradAnim = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(3, 9, 18);
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 4rem 2rem;
  isolation: isolate;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
`;

const StarsCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Left = styled.div``;

const SectionTag = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(99,102,241,0.9);
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.22);
  border-radius: 100px;
  padding: 0.3rem 1rem;
  margin-bottom: 1.2rem;
`;

const HeroName = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.3rem;
  background: linear-gradient(135deg, #ffffff 0%, #c7d2fe 50%, #a5b4fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroRole = styled.p`
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);
  color: rgba(165,180,252,0.7);
  margin-bottom: 1.5rem;
`;

const Bio = styled.p`
  font-size: clamp(0.88rem, 1.4vw, 0.98rem);
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExpItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const ExpDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(99,102,241,0.7);
  flex-shrink: 0;
  margin-top: 0.45rem;
  box-shadow: 0 0 8px rgba(99,102,241,0.5);
`;

const ExpText = styled.div``;

const ExpTitle = styled.div`
  font-size: 0.88rem;
  font-weight: 700;
  color: rgba(255,255,255,0.8);
`;

const ExpSub = styled.div`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.35);
  margin-top: 0.15rem;
`;

const Right = styled.div``;

const SkillsTitle = styled.h3`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,0.3);
  margin-bottom: 1rem;
`;

const SkillGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillGroup = styled.div``;

const GroupLabel = styled.div`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(99,102,241,0.6);
  margin-bottom: 0.6rem;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Chip = styled.span`
  font-size: 0.78rem;
  padding: 0.28rem 0.75rem;
  border-radius: 100px;
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.2);
  color: rgba(255,255,255,0.65);
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: rgba(99,102,241,0.45);
    color: rgba(255,255,255,0.9);
  }
`;

const CertRow = styled.div`
  margin-top: 1.5rem;
`;

const CertTitle = styled.div`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.25);
  margin-bottom: 0.6rem;
`;

const CertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const CertItem = styled.div`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    color: rgba(99,102,241,0.6);
    font-size: 0.7rem;
  }
`;

const experiences = [
  { title: 'Founder · Arsynal', sub: 'Jan 2024 – Present · Native AI Platform' },
  { title: 'Founder · Unyx', sub: 'Apr 2024 – Present · Mac Productivity App' },
  { title: 'SDE II · Avalara', sub: 'Aug 2024 – Present · Licensing Platform' },
  { title: 'SDE · Ninjacart', sub: 'Jul 2023 – Aug 2024 · Microservices & Identity' },
  { title: 'GitHub Extern \'21', sub: 'First global cohort · <30 people worldwide' },
  { title: 'B.Tech CSE · NIT Patna', sub: 'CGPA 8.83 · 2019–2023' },
];

const skillGroups = [
  { label: 'Languages', chips: ['Java','Python','Swift','TypeScript','JavaScript'] },
  { label: 'Frontend / Mobile', chips: ['React.js','Next.js','SwiftUI','Angular','Tailwind'] },
  { label: 'Backend / Infra', chips: ['Spring Boot','Node.js','Docker','AWS','Microservices'] },
  { label: 'AI / ML', chips: ['LLMOps','Embedding Engines','Jinja','Task Queues','Local LLMs'] },
  { label: 'Practices', chips: ['System Design','Engineering Leadership','Distributed Systems'] },
];

const certs = [
  '30 Days of Google Cloud (Cloud & ML Track)',
  'GCP Big Data & ML Fundamentals',
  'AWS Fundamentals Specialization',
  'Python 3 Programming Specialization',
  'Front-End Web UI Frameworks & Tools',
];

export default function EnhancedVisionSection({ id }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const cosmicCloudsRef = useRef([]); // Changed from nebulaeRef
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  // Initialize cosmic-themed background
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset stars and cosmic clouds
      // initStars();
      initCosmicClouds(); // Changed from initNebulae
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Initialize stars - reduced count further to 70%
    function initStars() {
      const starCount = 98; // Reduced to 70% of original 140
      const stars = [];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2, // Smaller stars
          brightness: Math.random() * 0.4 + 0.5, 
          pulseSpeed: Math.random() * 0.008 + 0.002, // Slower pulse
          pulseAmount: Math.random() * 0.4 + 0.3, // Less dramatic pulse
          isGlowing: Math.random() > 0.8 // Fewer glowing stars
        });
      }
      
      starsRef.current = stars;
    }
    
    // Initialize cosmic clouds - replacing nebulae
    function initCosmicClouds() {
      const cloudCount = 4; // Slightly increased from nebulae
      const clouds = [];
      
      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          x: 20 + (Math.random() * 60),
          y: 20 + (Math.random() * 60),
          radiusX: 15 + Math.random() * 25, // Slightly smaller than nebulae
          radiusY: 15 + Math.random() * 25,
          color: i % 2 === 0 
            ? `hsla(${180 + Math.random() * 40}, 65%, 45%, 0.07)` // Teal/blue hues
            : `hsla(${120 + Math.random() * 30}, 60%, 50%, 0.06)`, // Green hues
          drift: {
            x: (Math.random() - 0.5) * 0.04, // Slightly faster than nebulae
            y: (Math.random() - 0.5) * 0.03
          },
          pulseSpeed: Math.random() * 0.004 + 0.001,
          rotation: Math.random() * Math.PI,
          complexity: Math.random() * 3 + 2 // New property for cloud complexity
        });
      }
      
      cosmicCloudsRef.current = clouds;
    }
    
    // Animation loop
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update time - slower for more subtle animation
      timeRef.current += 0.003;
      const time = timeRef.current;
      
      // Draw cleaner background gradient
      const gradient = context.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0,
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width * 0.8
      );
      
      // More refined color stops
      gradient.addColorStop(0, 'rgba(6, 14, 28, 1)');
      gradient.addColorStop(0.4, 'rgba(4, 10, 20, 1)');
      gradient.addColorStop(1, 'rgba(2, 5, 12, 1)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw cosmic clouds instead of nebulae
      context.globalCompositeOperation = 'screen';
      cosmicCloudsRef.current.forEach(cloud => {
        // Update position with slow drift
        cloud.x += cloud.drift.x;
        cloud.y += cloud.drift.y;
        
        // Wrap around edges
        if (cloud.x < -cloud.radiusX) cloud.x = 100 + cloud.radiusX;
        if (cloud.x > 100 + cloud.radiusX) cloud.x = -cloud.radiusX;
        if (cloud.y < -cloud.radiusY) cloud.y = 100 + cloud.radiusY;
        if (cloud.y > 100 + cloud.radiusY) cloud.y = -cloud.radiusY;
        
        // Calculate pulse factor - subtle
        const pulseFactor = 1 + Math.sin(time * cloud.pulseSpeed * Math.PI) * 0.1;
        
        // Convert percentage to canvas coordinates
        const x = (cloud.x / 100) * canvas.width;
        const y = (cloud.y / 100) * canvas.height;
        const radiusX = (cloud.radiusX / 100) * canvas.width * pulseFactor;
        const radiusY = (cloud.radiusY / 100) * canvas.height * pulseFactor;
        
        // Draw cosmic cloud with more complex shape
        context.save();
        context.translate(x, y);
        context.rotate(cloud.rotation + time * 0.015);
        
        const cloudGradient = context.createRadialGradient(
          0, 0, 0,
          0, 0, Math.max(radiusX, radiusY)
        );
        
        const baseColor = cloud.color;
        const coreColor = baseColor.replace(/[\d.]+\)$/, '0.16)'); // Slightly brighter core
        const midColor = baseColor.replace(/[\d.]+\)$/, '0.09)'); 
        const edgeColor = baseColor.replace(/[\d.]+\)$/, '0)');
        
        cloudGradient.addColorStop(0, coreColor);
        cloudGradient.addColorStop(0.4, midColor);
        cloudGradient.addColorStop(1, edgeColor);
        
        context.fillStyle = cloudGradient;
        
        // Draw a more complex shape for cosmic clouds
        context.beginPath();
        
        // Create a cloud-like shape using multiple overlapping ellipses
        context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        
        // Add smaller ellipses to create a more complex cloud shape
        for (let i = 0; i < cloud.complexity; i++) {
          const angle = (Math.PI * 2 * i) / cloud.complexity;
          const distance = radiusX * 0.6;
          const offsetX = Math.cos(angle + time * 0.05) * distance;
          const offsetY = Math.sin(angle + time * 0.05) * distance;
          const sizeX = radiusX * (0.3 + Math.sin(time * 0.02) * 0.1);
          const sizeY = radiusY * (0.3 + Math.cos(time * 0.02) * 0.1);
          
          context.ellipse(
            offsetX, 
            offsetY, 
            sizeX, 
            sizeY, 
            angle, 
            0, 
            Math.PI * 2
          );
        }
        
        context.fill();
        context.restore();
      });
      
      // Draw stars with more subtle glow effect
      starsRef.current.forEach(star => {
        // Calculate pulse for twinkling effect
        const pulse = Math.sin(time * star.pulseSpeed * Math.PI) * star.pulseAmount + 1;
        const radius = star.radius * pulse;
        const brightness = star.brightness * pulse;
        
        // Draw star with glow
        if (star.isGlowing) {
          const starGlow = context.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, radius * 4
          );
          
          starGlow.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.8})`);
          starGlow.addColorStop(0.5, `rgba(180, 220, 255, ${brightness * 0.3})`);
          starGlow.addColorStop(1, 'rgba(100, 150, 255, 0)');
          
          context.fillStyle = starGlow;
          context.beginPath();
          context.arc(star.x, star.y, radius * 4, 0, Math.PI * 2);
          context.fill();
        }
        
        // Draw star core
        context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        context.beginPath();
        context.arc(star.x, star.y, radius, 0, Math.PI * 2);
        context.fill();
      });
      
      // Reset composite operation
      context.globalCompositeOperation = 'source-over';
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <Section id={id}>
      <StarsCanvas ref={canvasRef} />
      <Inner>
        <Left>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}>
            <SectionTag>Founder · Architect · Engineer</SectionTag>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.08 }}>
            <HeroName>Divya Prakash</HeroName>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.15 }}>
            <HeroRole>Full-Stack &amp; AI Systems Engineer · Building Arsynal &amp; Unyx</HeroRole>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.22 }}>
            <Bio>
              I architect and build systems that scale — from optimizing licensing platforms
              serving thousands of users daily to designing native AI products from scratch.
              My obsession: speed, deep OS integration, and experiences that feel like magic.
            </Bio>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.3 }}>
            <ExpList>
              {experiences.map((e, i) => (
                <ExpItem key={i}>
                  <ExpDot />
                  <ExpText>
                    <ExpTitle>{e.title}</ExpTitle>
                    <ExpSub>{e.sub}</ExpSub>
                  </ExpText>
                </ExpItem>
              ))}
            </ExpList>
          </motion.div>
        </Left>

        <Right>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.35 }}>
            <SkillsTitle>Skills &amp; Stack</SkillsTitle>
          </motion.div>
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={VP}>
            <SkillGroups>
              {skillGroups.map((g, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <SkillGroup>
                    <GroupLabel>{g.label}</GroupLabel>
                    <ChipRow>
                      {g.chips.map(c => <Chip key={c}>{c}</Chip>)}
                    </ChipRow>
                  </SkillGroup>
                </motion.div>
              ))}
            </SkillGroups>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} transition={{ delay: 0.5 }}>
            <CertRow>
              <CertTitle>Certifications</CertTitle>
              <CertList>
                {certs.map((c, i) => <CertItem key={i}>{c}</CertItem>)}
              </CertList>
            </CertRow>
          </motion.div>
        </Right>
      </Inner>
    </Section>
  );
}
