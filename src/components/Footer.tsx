const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Braca Service</p>
            <p className="text-sm text-primary-foreground/80">
              Professioneller Handwerksservice seit Jahren
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Braca Service. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
