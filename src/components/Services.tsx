import { Card } from "@/components/ui/card";
import { Brain, Database, Cog, TrendingUp, Shield, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models and algorithms tailored to your business needs, from predictive analytics to recommendation systems."
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, visualization, and data engineering solutions."
  },
  {
    icon: Cog,
    title: "AI System Integration",
    description: "Seamlessly integrate AI capabilities into existing systems and workflows for enhanced productivity and efficiency."
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Strategic AI consulting to identify opportunities, optimize processes, and drive growth through intelligent automation."
  },
  {
    icon: Shield,
    title: "AI Ethics & Security",
    description: "Ensure responsible AI implementation with robust security measures, bias detection, and ethical AI practices."
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Stay ahead of the curve with cutting-edge AI research, emerging technology adoption, and strategic planning."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            AI Expertise & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business 
            and unlock new possibilities in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;