import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certified AI Professional",
    description: "Advanced certifications in machine learning and AI from leading tech companies"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led cross-functional teams in delivering enterprise-scale AI solutions"
  },
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Proven track record of aligning AI initiatives with business objectives"
  },
  {
    icon: Rocket,
    title: "Innovation Driver",
    description: "Pioneered AI implementations that delivered measurable ROI and growth"
  }
];

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About AIR in CA
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in California, I'm Harpreet Singh, an AI expert passionate about leveraging 
              artificial intelligence to solve complex business challenges. With years of experience 
              in machine learning, data science, and AI system architecture, I help organizations 
              navigate the rapidly evolving AI landscape.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My expertise spans across various industries, from healthcare and finance to 
              retail and manufacturing. I believe in making AI accessible and practical, 
              ensuring that every solution is not just technologically advanced but also 
              delivers tangible business value.
            </p>
            <Button variant="hero" size="lg">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow-accent group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;