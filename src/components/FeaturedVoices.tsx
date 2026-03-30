import { VoiceCard } from "./VoiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const featuredVoices = [
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
    title: "zh_CN-huayan-medium",
    speaker: "Piper TTS Mandarin Chinese",
    description: "Mandarin Chinese voice with proper tonal pronunciation. Optimized for simplified Chinese text synthesis.",
    date: "Released: 2023",
    duration: "Sample: 1:10",
    location: "Piper v1.2.0",
    category: "Asian Voices",
    imageUrl: "",
  },
];

const recentlyAdded = [
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
    title: "ar_SA-arabic-medium",
    speaker: "Piper TTS Arabic",
    description: "Modern Standard Arabic voice with proper diacritical pronunciation. Supports right-to-left text synthesis.",
    date: "Released: 2023",
    duration: "Sample: 1:00",
    location: "Piper v1.2.0",
    category: "Middle Eastern Voices",
    imageUrl: "",
  },
];

interface FeaturedVoicesProps {
  onVoiceClick: (voice: any) => void;
}

export function FeaturedVoices({ onVoiceClick }: FeaturedVoicesProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="featured" className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl mb-2">Piper TTS Collection</h3>
              <p className="text-muted-foreground">
                Explore neural voice models across multiple languages and quality tiers
              </p>
            </div>
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVoices.map((voice, index) => (
                <VoiceCard key={index} {...voice} onClick={() => onVoiceClick(voice)} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentlyAdded.map((voice, index) => (
                <VoiceCard key={index} {...voice} onClick={() => onVoiceClick(voice)} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}