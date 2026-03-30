import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchResults } from "./components/SearchResults";
import { Categories } from "./components/Categories";
import { FeaturedVoices } from "./components/FeaturedVoices";
import { Footer } from "./components/Footer";
import { BrowsePage } from "./components/BrowsePage";
import { VoiceDetailPage, VoiceData } from "./components/VoiceDetailPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "browse" | "detail">("home");
  const [selectedVoice, setSelectedVoice] = useState<VoiceData | null>(null);

  const handleVoiceClick = (voice: VoiceData) => {
    setSelectedVoice(voice);
    setCurrentPage("detail");
  };

  const handleBackToBrowse = () => {
    setCurrentPage("browse");
    setSelectedVoice(null);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedVoice(null);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} />
      {currentPage === "home" ? (
        <>
          <Hero />
          <SearchResults onVoiceClick={handleVoiceClick} />
          <Categories />
          <FeaturedVoices onVoiceClick={handleVoiceClick} />
          <Footer />
        </>
      ) : currentPage === "browse" ? (
        <BrowsePage 
          onBackToHome={handleBackToHome} 
          onVoiceClick={handleVoiceClick}
        />
      ) : currentPage === "detail" && selectedVoice ? (
        <VoiceDetailPage 
          voice={selectedVoice}
          onBack={handleBackToBrowse}
          relatedVoices={[]}
        />
      ) : null}
    </div>
  );
}
