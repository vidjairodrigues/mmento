import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-2xl font-serif font-bold text-foreground">Mmento</span>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="default" className="hidden sm:flex">
            Presenteie um Legado
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;