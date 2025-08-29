import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Computer Science &
              <span className="block gradient-text bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                Data Science
              </span>
              Portfolio
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Welcome to my digital showcase of innovative projects, cutting-edge research, 
              and technological solutions that bridge the gap between data and discovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="group" asChild>
                <Link to="/projects" className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8">
              <Button size="sm" variant="ghost" className="text-white hover:text-accent-glow hover:bg-white/10" asChild>
                <a href="#" aria-label="GitHub Profile">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-accent-glow hover:bg-white/10" asChild>
                <a href="#" aria-label="LinkedIn Profile">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-accent-glow hover:bg-white/10" asChild>
                <a href="mailto:" aria-label="Email Contact">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Turning Ideas Into Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I specialize in building data-driven applications, machine learning models, 
              and web solutions that solve real-world problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Web Development</h3>
              <p className="text-muted-foreground">
                Full-stack applications using modern frameworks and best practices.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Data Science</h3>
              <p className="text-muted-foreground">
                Machine learning models and data analysis for actionable insights.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Creative solutions that push the boundaries of technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;