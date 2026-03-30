import { useState } from "react";
import { VoiceCard } from "./VoiceCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const allVoices = [
  {
    title: "en_US-lessac-medium",
    speaker: "Piper TTS English (US)",
    description: "High-quality American English neural voice with clear pronunciation. Based on the LessAC dataset, optimized for general-purpose text-to-speech applications.",
    date: "Released: 2023",
    duration: "Sample: 0:45",
    location: "Piper v1.2.0",
    category: "English Voices",
    imageUrl: "",
  },
  {
    title: "en_US-libritts-high",
    speaker: "Piper TTS LibriTTS",
    description: "Premium quality American English voice trained on the LibriTTS dataset. Excellent for audiobook narration and long-form content.",
    date: "Released: 2023",
    duration: "Sample: 1:20",
    location: "Piper v1.2.0",
    category: "English Voices",
    imageUrl: "",
  },
  {
    title: "en_US-ryan-medium",
    speaker: "Piper TTS English (US)",
    description: "Male American English voice with warm, conversational tone. Well-suited for virtual assistants and navigation systems.",
    date: "Released: 2023",
    duration: "Sample: 0:52",
    location: "Piper v1.2.0",
    category: "English Voices",
    imageUrl: "",
  },
  {
    title: "en_US-amy-low",
    speaker: "Piper TTS English (US)",
    description: "Lightweight female American English voice optimized for embedded systems and edge computing with minimal resource requirements.",
    date: "Released: 2023",
    duration: "Sample: 0:38",
    location: "Piper v1.0.0",
    category: "English Voices",
    imageUrl: "",
  },
  {
    title: "en_GB-alan-medium",
    speaker: "Piper TTS English (UK)",
    description: "British English male voice with received pronunciation. Ideal for professional applications and accessibility tools.",
    date: "Released: 2023",
    duration: "Sample: 0:55",
    location: "Piper v1.2.0",
    category: "English Voices",
    imageUrl: "",
  },
  {
    title: "en_GB-southern_english_female-low",
    speaker: "Piper TTS English (UK)",
    description: "Southern English female voice offering authentic British pronunciation in a compact, efficient model.",
    date: "Released: 2022",
    duration: "Sample: 0:42",
    location: "Piper v1.0.0",
    category: "English Voices",
    imageUrl: "",
  },
  {
    title: "de_DE-thorsten-medium",
    speaker: "Piper TTS German",
    description: "High-quality German male voice trained on the Thorsten dataset. Clear articulation perfect for German language applications.",
    date: "Released: 2023",
    duration: "Sample: 1:05",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "fr_FR-siwis-medium",
    speaker: "Piper TTS French",
    description: "Natural-sounding French voice from the SIWIS dataset. Excellent pronunciation for educational and accessibility applications.",
    date: "Released: 2023",
    duration: "Sample: 0:58",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "es_ES-carlfm-x_low",
    speaker: "Piper TTS Spanish (Spain)",
    description: "Ultra-lightweight Spanish voice for Castilian Spanish. Optimized for IoT devices and minimal resource environments.",
    date: "Released: 2022",
    duration: "Sample: 0:35",
    location: "Piper v1.0.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "it_IT-riccardo_fasol-x_low",
    speaker: "Piper TTS Italian",
    description: "Italian male voice with authentic pronunciation. Compact model suitable for embedded applications and offline use.",
    date: "Released: 2023",
    duration: "Sample: 0:40",
    location: "Piper v1.1.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "nl_NL-mls-medium",
    speaker: "Piper TTS Dutch",
    description: "Dutch voice trained on the Multilingual LibriSpeech dataset. Natural intonation for Netherlands Dutch applications.",
    date: "Released: 2023",
    duration: "Sample: 0:50",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "pl_PL-darkman-medium",
    speaker: "Piper TTS Polish",
    description: "Polish male voice with clear articulation. Well-suited for accessibility tools and content narration in Polish.",
    date: "Released: 2023",
    duration: "Sample: 0:48",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "ru_RU-irina-medium",
    speaker: "Piper TTS Russian",
    description: "Russian female voice with natural prosody. Trained for high-quality Russian language synthesis applications.",
    date: "Released: 2023",
    duration: "Sample: 1:02",
    location: "Piper v1.2.0",
    category: "Slavic Voices",
    imageUrl: "",
  },
  {
    title: "uk_UA-ukrainian_tts-medium",
    speaker: "Piper TTS Ukrainian",
    description: "Ukrainian voice model supporting modern Ukrainian language synthesis with accurate pronunciation and stress patterns.",
    date: "Released: 2023",
    duration: "Sample: 0:55",
    location: "Piper v1.2.0",
    category: "Slavic Voices",
    imageUrl: "",
  },
  {
    title: "zh_CN-huayan-medium",
    speaker: "Piper TTS Mandarin Chinese",
    description: "Mandarin Chinese voice with proper tonal pronunciation. Optimized for simplified Chinese text synthesis.",
    date: "Released: 2023",
    duration: "Sample: 1:10",
    location: "Piper v1.2.0",
    category: "Asian Voices",
    imageUrl: "",
  },
  {
    title: "ja_JP-hikari-medium",
    speaker: "Piper TTS Japanese",
    description: "Japanese female voice with natural pitch accent. Supports both hiragana and kanji text input with accurate readings.",
    date: "Released: 2023",
    duration: "Sample: 1:05",
    location: "Piper v1.2.0",
    category: "Asian Voices",
    imageUrl: "",
  },
  {
    title: "ko_KR-kss-medium",
    speaker: "Piper TTS Korean",
    description: "Korean voice trained on the KSS dataset. Clear pronunciation for Korean language applications and accessibility.",
    date: "Released: 2023",
    duration: "Sample: 0:58",
    location: "Piper v1.2.0",
    category: "Asian Voices",
    imageUrl: "",
  },
  {
    title: "vi_VN-vivos-x_low",
    speaker: "Piper TTS Vietnamese",
    description: "Lightweight Vietnamese voice with proper tonal pronunciation. Efficient model for resource-constrained environments.",
    date: "Released: 2023",
    duration: "Sample: 0:42",
    location: "Piper v1.1.0",
    category: "Asian Voices",
    imageUrl: "",
  },
  {
    title: "ar_SA-arabic-medium",
    speaker: "Piper TTS Arabic",
    description: "Modern Standard Arabic voice with proper diacritical pronunciation. Supports right-to-left text synthesis.",
    date: "Released: 2023",
    duration: "Sample: 1:00",
    location: "Piper v1.2.0",
    category: "Middle Eastern Voices",
    imageUrl: "",
  },
  {
    title: "fa_IR-persian-medium",
    speaker: "Piper TTS Persian (Farsi)",
    description: "Persian voice model for Farsi language synthesis. Natural pronunciation for Iranian Persian applications.",
    date: "Released: 2023",
    duration: "Sample: 0:52",
    location: "Piper v1.2.0",
    category: "Middle Eastern Voices",
    imageUrl: "",
  },
  {
    title: "pt_BR-faber-medium",
    speaker: "Piper TTS Portuguese (Brazil)",
    description: "Brazilian Portuguese voice with authentic accent and intonation. Ideal for South American applications.",
    date: "Released: 2023",
    duration: "Sample: 0:56",
    location: "Piper v1.2.0",
    category: "Other Languages",
    imageUrl: "",
  },
  {
    title: "sv_SE-nst-medium",
    speaker: "Piper TTS Swedish",
    description: "Swedish voice trained on the NST dataset. Natural-sounding synthesis for Swedish language content.",
    date: "Released: 2023",
    duration: "Sample: 0:50",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "fi_FI-harri-medium",
    speaker: "Piper TTS Finnish",
    description: "Finnish male voice with proper vowel harmony and consonant gradation. Supports complex Finnish morphology.",
    date: "Released: 2023",
    duration: "Sample: 0:54",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
  {
    title: "ca_ES-catalan-medium",
    speaker: "Piper TTS Catalan",
    description: "Catalan voice model for Catalonia and Valencia. Authentic pronunciation for regional Catalan dialects.",
    date: "Released: 2023",
    duration: "Sample: 0:48",
    location: "Piper v1.2.0",
    category: "European Voices",
    imageUrl: "",
  },
];

const categories = [
  "All Categories",
  "English Voices",
  "European Voices",
  "Slavic Voices",
  "Asian Voices",
  "Middle Eastern Voices",
  "Other Languages",
];

interface BrowsePageProps {
  onBackToHome: () => void;
  onVoiceClick: (voice: any) => void;
}

export function BrowsePage({ onBackToHome, onVoiceClick }: BrowsePageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredVoices = allVoices
    .filter((voice) => {
      const matchesCategory =
        selectedCategory === "All Categories" || voice.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        voice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        voice.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        voice.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return b.date.localeCompare(a.date);
      } else if (sortBy === "oldest") {
        return a.date.localeCompare(b.date);
      } else if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onBackToHome}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </button>
          </div>
          <h1 className="text-4xl mb-3">Browse Archive</h1>
          <p className="text-muted-foreground max-w-3xl">
            Explore the complete Piper TTS voice collection. Browse 24 neural voice models across 
            English, European, Asian, Slavic, Middle Eastern, and other languages.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search voices, speakers, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 items-center">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-slate-100 transition-colors px-3 py-1"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredVoices.length} {filteredVoices.length === 1 ? "voice" : "voices"}
              {selectedCategory !== "All Categories" && (
                <span> in {selectedCategory}</span>
              )}
            </p>
          </div>

          {filteredVoices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVoices.map((voice, index) => (
                <VoiceCard key={index} {...voice} onClick={() => onVoiceClick(voice)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-2">No voices found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}