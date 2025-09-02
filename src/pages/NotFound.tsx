import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-serif font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-serif font-semibold text-foreground">Página Não Encontrada</h2>
          <p className="text-lg text-muted-foreground">
            Ops! A página que você está procurando não existe.
          </p>
        </div>
        
        <Button asChild variant="hero" size="lg" className="group">
          <a href="/">
            <Home className="w-5 h-5" />
            Voltar ao Início
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
