const Steps = ({ heading, steps }: { heading: string; steps: { title: string; text: string }[] }) => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-foreground">{heading}</h2>
        <ol className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-card border border-border/50 rounded-2xl p-6 shadow-brand-sm">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;
