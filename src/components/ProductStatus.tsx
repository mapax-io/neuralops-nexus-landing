import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Code2, Users, Database, MessageSquare, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Architecture Designed",
    description: "System architecture validated and ready for scale",
  },
  {
    icon: Users,
    title: "Human + AI Collaboration",
    description: "Shared workspace for seamless human-AI interaction",
  },
  {
    icon: Layers,
    title: "Multi-Agent System",
    description: "Multiple agents working together within projects",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    description: "Basic knowledge integration for context awareness",
  },
  {
    icon: MessageSquare,
    title: "Model-Agnostic",
    description: "Connect any AI model via LiteLLM integration",
  },
];

export function ProductStatus() {
  return (
    <section id="product-status" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Development
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Product Status
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MVP in development — foundation already defined
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            We are building the core today — and scaling into a full platform
          </p>
        </div>

        {/* Status Banner */}
        <div className="mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Current Status</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Architecture</span> designed and validated
                </div>
                <div>
                  <span className="font-medium text-foreground">Core system</span> under active development
                </div>
                <div>
                  <span className="font-medium text-foreground">Open-source</span> community contributing
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MVP Capabilities Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">
            MVP Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <capability.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{capability.title}</h4>
                      <p className="text-sm text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Focus Statement */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">Focus:</span> Delivering a functional MVP with human + AI collaboration, multi-agent interaction, knowledge base integration, and model-agnostic connectivity.
          </p>
        </div>
      </div>
    </section>
  );
}
