import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  techStack: string[];
  image?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  projectLink, 
  githubLink, 
  techStack, 
  image 
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl shadow-card hover:shadow-hover transition-smooth overflow-hidden h-full">
      {/* Project Image */}
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {projectLink && (
            <Button 
              size="sm" 
              variant="default"
              className="flex-1"
              asChild
            >
              <a 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            </Button>
          )}
          
          {githubLink && (
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1"
              asChild
            >
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-smooth pointer-events-none" />
    </div>
  );
};

export default ProjectCard;