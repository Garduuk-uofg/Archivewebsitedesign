import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Play, Clock, Calendar, MapPin } from "lucide-react";

interface VoiceCardProps {
  title: string;
  speaker: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  category: string;
  imageUrl: string;
  onClick?: () => void;
}

export function VoiceCard({
  title,
  speaker,
  description,
  date,
  duration,
  location,
  category,
  imageUrl,
  onClick,
}: VoiceCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge>{category}</Badge>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full h-8 w-8"
          >
            <Play className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{speaker}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}