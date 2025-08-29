import { GraduationCap, Award, Code, Database, Brain, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++", "R", "SQL"],
    "Web Technologies": ["React", "Node.js", "Express", "HTML/CSS", "MongoDB", "PostgreSQL"],
    "Data Science": ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Matplotlib", "Jupyter"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Linux", "VS Code", "Tableau"]
  };

  const experiences = [
    {
      title: "Data Science Intern",
      company: "Tech Solutions Inc.",
      period: "Summer 2023",
      description: "Developed machine learning models for customer segmentation and improved prediction accuracy by 25%.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      period: "2022 - 2023",
      description: "Conducted research on natural language processing and published findings in academic conferences.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Software Developer",
      company: "Campus Tech Team",
      period: "2021 - 2022",
      description: "Built and maintained web applications for student services, serving over 10,000 users.",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const achievements = [
    "Dean's List for Academic Excellence (3 consecutive semesters)",
    "Winner - University Hackathon 2023",
    "Published research paper on ML algorithms",
    "Google Code-in Finalist",
    "Volunteer coding instructor for underserved communities"
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a passionate computer science and data science student dedicated to creating 
            innovative solutions that make a meaningful impact on the world.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">My Journey</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing a Bachelor's degree in Computer Science with a focus on Data Science, 
                I am passionate about leveraging technology to solve complex real-world problems. My journey 
                began with curiosity about how algorithms could extract meaningful patterns from data.
              </p>
              <p>
                Throughout my academic career, I've maintained a strong GPA while actively participating 
                in research projects, hackathons, and open-source contributions. I believe in the power 
                of continuous learning and staying current with emerging technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new datasets, reading research papers, 
                or mentoring fellow students. I'm always excited to collaborate on projects that 
                challenge conventional thinking and push technological boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
            </div>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Achievements & Recognition</h2>
            </div>
            <div className="grid gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                <p className="text-primary font-medium">University Name</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: May 2024 | GPA: 3.8/4.0</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Machine Learning, 
                  Database Systems, Software Engineering, Statistical Analysis, Artificial Intelligence
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;