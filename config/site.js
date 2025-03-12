export const siteConfig = {
  name: "Divya Prakash",
  description: "A sneek peek into the world of Divya Prakash",
  url: "https://divyaprakash.co.in",
  
  // Configuration for animations
  animations: {
    cardScrollInterval: 5000, // ms between card transitions
    transitionSpeed: 0.8,     // transition speed in seconds
  },
  
  // Comprehensive color theme system
  theme: {
    // Primary colors
    primary: {
      main: "rgba(0, 153, 255, 0.3)",
      light: "rgba(0, 153, 255, 0.15)",
      dark: "rgba(0, 153, 255, 0.5)",
      hover: "rgba(0, 153, 255, 0.25)",
      accent: "rgba(0, 153, 255, 0.8)"
    },
    
    // Background colors
    background: {
      main: "rgba(0, 0, 0, 0.95)",
      grey: "rgba(20, 20, 20, 0.95)",
      card: "rgba(0, 0, 0, 0.3)",
      overlay: "rgba(20, 70, 120, 0.9)",
      blur: "rgba(0, 0, 0, 0.5)"
    },
    
    // Text colors
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.7)",
      muted: "rgba(255, 255, 255, 0.5)"
    },
    
    // Border colors
    border: {
      light: "rgba(255, 255, 255, 0.05)",
      medium: "rgba(255, 255, 255, 0.1)",
      highlight: "rgba(0, 153, 255, 0.2)"
    },
    
    // Shadow effects
    shadow: {
      subtle: "0 0 10px rgba(0, 153, 255, 0.15)",
      medium: "0 0 15px rgba(0, 153, 255, 0.3)",
      strong: "0 5px 20px rgba(0, 153, 255, 0.25)"
    },
    
    // Neon light colors (for glow effects)
    neon: {
      red: 66,
      green: 133,
      blue: 244,
      alpha: 0.8
    }
  }
};
