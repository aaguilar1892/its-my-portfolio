import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample projects data - you can replace this with your actual projects
  const projects = [
    {
      title: "Machine Learning Price Predictor",
      description: "A comprehensive machine learning model that predicts house prices using advanced regression techniques and feature engineering. Built with Python, scikit-learn, and deployed with Flask.",
      projectLink: "https://github.com/username/price-predictor",
      githubLink: "https://github.com/username/price-predictor",
      techStack: ["Python", "scikit-learn", "Pandas", "Flask", "NumPy"],
      category: "Data Science"
    },
    {
      title: "React E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Features include product management, shopping cart, and order tracking.",
      projectLink: "https://github.com/username/ecommerce-app",
      githubLink: "https://github.com/username/ecommerce-app",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Web Development"
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "An intelligent chatbot using NLP techniques for customer service automation. Implements sentiment analysis and intent recognition with high accuracy.",
      projectLink: "https://github.com/username/nlp-chatbot",
      githubLink: "https://github.com/username/nlp-chatbot",
      techStack: ["Python", "TensorFlow", "NLTK", "spaCy", "FastAPI"],
      category: "Data Science"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with real-time data visualization. Features multiple chart types, filtering, and responsive design.",
      projectLink: "https://github.com/username/data-dashboard",
      githubLink: "https://github.com/username/data-dashboard",
      techStack: ["React", "D3.js", "TypeScript", "Python", "PostgreSQL"],
      category: "Data Science"
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform mobile application providing accurate weather forecasts with location-based services and beautiful UI animations.",
      projectLink: "https://github.com/username/weather-app",
      githubLink: "https://github.com/username/weather-app",
      techStack: ["React Native", "JavaScript", "Weather API", "Redux"],
      category: "Mobile Development"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology ensuring data integrity and anonymity for democratic processes.",
      projectLink: "https://github.com/username/blockchain-voting",
      githubLink: "https://github.com/username/blockchain-voting",
      techStack: ["Solidity", "Web3.js", "React", "Ethereum", "Truffle"],
      category: "Blockchain"
    }
  ];

  const categories = ["All", "Data Science", "Web Development", "Mobile Development", "Blockchain"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in computer science and data science, 
            showcasing innovative solutions and technical expertise.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-6 mb-12">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
                techStack={project.techStack}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-card rounded-lg shadow-card">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {[...new Set(projects.flatMap(p => p.techStack))].length}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;