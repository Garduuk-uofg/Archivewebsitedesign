import { Search, Menu, Archive } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onNavigate: (page: "home" | "browse") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <Archive className="h-8 w-8" />
            <div>
              <h1 className="text-xl">Virtual Voice Archive</h1>
              <p className="text-xs text-muted-foreground">Preserving Digital Voices for anyone to use</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <button 
              onClick={() => onNavigate("browse")}
              className="text-sm hover:underline"
            >
              Browse
            </button>
            <a href="#" className="text-sm hover:underline">Collections</a>
            <a href="#" className="text-sm hover:underline">About</a>
            <a href="#" className="text-sm hover:underline">Contribute</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
