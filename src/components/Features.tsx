import { Brain, Shield, Activity, Database } from "lucide-react";

const features = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Ownership",
    description: "Take control of your health data with our secure infrastructure",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Insights",
    description: "Advanced predictions and personalized health recommendations",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "HIPAA Compliant",
    description: "Your privacy and security are our top priorities",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Wellness Integration",
    description: "Seamless connection with leading wellness programs",
  },
];

export const Features = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200 animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};