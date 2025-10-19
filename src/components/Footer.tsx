const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg sm:text-xl text-foreground mb-1">Braca Service</p>
            <p className="text-sm text-muted-foreground">
              Professioneller Handwerksservice seit Jahren
            </p>
          </div>
          
          <div className="text-center sm:text-right text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Braca Service. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
