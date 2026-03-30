import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Preserving Synthetic Voices
          </h2>
          <p className="text-lg text-muted-foreground">
            A digital archive dedicated to conserving TTS models, voices, and virtual assistants 
            before they're updated, deprecated, or lost forever. Every synthetic voice is a piece of digital history.
          </p>
          <div className="flex gap-3 pt-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search voices, languages, or models..." 
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </section>
  );
}