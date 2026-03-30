import { AudioPlayer } from "./AudioPlayer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Calendar, MapPin, Clock, Download, Share2, BookOpen, Cpu } from "lucide-react";
import { VoiceCard } from "./VoiceCard";

export interface VoiceData {
  title: string;
  speaker: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  category: string;
  imageUrl: string;
}

interface VoiceDetailPageProps {
  voice: VoiceData;
  onBack: () => void;
  relatedVoices: VoiceData[];
}

export function VoiceDetailPage({ voice, onBack, relatedVoices }: VoiceDetailPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb / Back Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Browse
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            {/* Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-3">{voice.category}</Badge>
                <h1 className="text-4xl mb-3">{voice.title}</h1>
                <p className="text-xl text-muted-foreground">{voice.speaker}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{voice.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{voice.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{voice.location}</span>
                </div>
              </div>

              <Separator />

              <p className="text-muted-foreground leading-relaxed">
                {voice.description}
              </p>

              <div className="flex gap-3 pt-2">
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download Sample
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl mb-4">Voice Sample</h2>
            <AudioPlayer
              title={voice.title}
              speaker={voice.speaker}
              duration={voice.duration.replace("Sample: ", "")}
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl mb-6">Technical Specifications</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Cpu className="h-5 w-5 text-blue-600 mt-1" />
                  <h3>Engine Details</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd>{voice.category}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <dt className="text-muted-foreground">Platform</dt>
                    <dd>{voice.location}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd>WAV, 44.1kHz</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <dt className="text-muted-foreground">Bit Depth</dt>
                    <dd>16-bit</dd>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5" />
              <h2 className="text-2xl">Historical Context</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Piper TTS represents an important milestone in open-source neural text-to-speech technology.
                    Developed as a fast, local, and privacy-focused alternative to cloud-based TTS services, 
                    Piper brings high-quality neural voice synthesis to edge devices and offline applications.
                  </p>
                  <p>
                    Each Piper voice model is trained on carefully curated datasets, supporting over 40 languages
                    with varying quality levels optimized for different use cases—from resource-constrained IoT devices
                    to high-fidelity audiobook narration. The project emphasizes accessibility, enabling developers
                    to integrate natural-sounding speech synthesis without relying on proprietary cloud services.
                  </p>
                  <p>
                    Preserving these voice models ensures continued access to open-source TTS technology and
                    documents the evolution of community-driven neural voice synthesis systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Notes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl mb-6">Usage & Compatibility</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2">Original Platform</h3>
                    <p className="text-sm text-muted-foreground">
                      This voice was originally designed for {voice.location}. The archived sample 
                      has been preserved in its original format for historical accuracy.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-2">Modern Usage</h3>
                    <p className="text-sm text-muted-foreground">
                      These samples are provided for educational, research, and preservation purposes. 
                      For modern projects requiring similar voice characteristics, consider using contemporary 
                      TTS engines with appropriate licensing.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-2">Attribution</h3>
                    <p className="text-sm text-muted-foreground">
                      When using these archived samples, please credit the Virtual Voice Archive and 
                      reference the original {voice.speaker}.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Voices */}
      {relatedVoices.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl mb-6">Related Voices</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedVoices.map((relatedVoice, index) => (
                <VoiceCard key={index} {...relatedVoice} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}