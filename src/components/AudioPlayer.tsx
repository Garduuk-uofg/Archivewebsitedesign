import { Play, Pause, Volume2, Download, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { useState } from "react";

interface AudioPlayerProps {
  title: string;
  speaker: string;
  duration: string;
}

export function AudioPlayer({ title, speaker, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([33]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">{speaker}</p>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Slider 
          value={progress} 
          onValueChange={setProgress}
          max={100} 
          step={1}
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>1:24</span>
          <span>{duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button 
          variant="default" 
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Play
            </>
          )}
        </Button>
        
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider 
            defaultValue={[70]} 
            max={100} 
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}
