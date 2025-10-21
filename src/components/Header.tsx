import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ISVICREATIVE
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#plans" className="text-foreground hover:text-accent transition-colors">
              Planos
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Fale Conosco
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a href="#" className="block text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#plans" className="block text-foreground hover:text-accent transition-colors">
              Planos
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors">
              Contato
            </a>
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Fale Conosco
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
