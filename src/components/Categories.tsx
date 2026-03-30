import { Mic, Globe, BookOpen, Bot, Cpu, Radio, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    icon: Globe,
    title: "English Voices",
    count: "6",
    color: "text-blue-600",
  },
  {
    icon: Cpu,
    title: "European Voices",
    count: "9",
    color: "text-emerald-600",
  },
  {
    icon: Smartphone,
    title: "Asian Voices",
    count: "4",
    color: "text-amber-600",
  },
  {
    icon: Mic,
    title: "Slavic Voices",
    count: "2",
    color: "text-purple-600",
  },
  {
    icon: Bot,
    title: "Middle Eastern Voices",
    count: "2",
    color: "text-pink-600",
  },
  {
    icon: Radio,
    title: "Other Languages",
    count: "1",
    color: "text-red-600",
  },
  {
    icon: Zap,
    title: "Neural Models",
    count: "24",
    color: "text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Open Source",
    count: "24",
    color: "text-rose-600",
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl mb-3">Browse by Collection</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections of synthetic voices, TTS systems, and voice models
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="hover:shadow-md transition-shadow cursor-pointer group"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{category.title}</h4>
                    <p className="text-sm text-muted-foreground">{category.count} voices</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}