import { VoiceCard } from "./VoiceCard";
import { Search } from "lucide-react";

interface SearchResultsProps {
  onVoiceClick: (voice: any) => void;
}

export function SearchResults({ onVoiceClick }: SearchResultsProps) {
  const searchQuery = "Piper TTS";
  
  const searchResults = [
    {
      title: "Piper TTS - English (US) Amy",
      speaker: "Piper Neural Voice System",
      description: "Fast, local neural text-to-speech voice. High-quality American English female voice optimized for offline use and edge computing applications.",
      date: "Released 2023",
      duration: "Sample: 0:45",
      location: "Open Source",
      category: "Neural Voice",
      imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&auto=format&fit=crop",
    },
    {
      title: "Piper TTS - English (GB) Jenny",
      speaker: "Piper Neural Voice System",
      description: "British English variant of Piper TTS with natural prosody and intonation. Designed for privacy-focused applications requiring local inference.",
      date: "Released 2023",
      duration: "Sample: 0:38",
      location: "Open Source",
      category: "Neural Voice",
      imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&auto=format&fit=crop",
    },
    {
      title: "Piper TTS - German Thorsten",
      speaker: "Piper Neural Voice System",
      description: "German language neural voice with low-latency processing. Part of the Piper multilingual collection supporting 40+ languages and accents.",
      date: "Released 2023",
      duration: "Sample: 0:52",
      location: "Open Source",
      category: "Neural Voice",
      imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Search className="h-4 w-4" />
            <span className="text-sm">Search Results</span>
          </div>
          <h2 className="text-3xl mb-2">Results for "{searchQuery}"</h2>
          <p className="text-muted-foreground">
            Found {searchResults.length} voices matching your search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((voice, index) => (
            <VoiceCard key={index} {...voice} onClick={() => onVoiceClick(voice)} />
          ))}
        </div>
      </div>
    </section>
  );
}
