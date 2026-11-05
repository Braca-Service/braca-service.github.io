// A real sequence (call, come by, done), so numbered.
const Steps = ({ heading, steps }: { heading: string; steps: { title: string; text: string }[] }) => {
  return (
    <section className="bg-steel py-16 sm:py-24">
      <div className="wrap">
        <h2 className="heading-section max-w-[40rem]">{heading}</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-5">
              <span aria-hidden="true" className="block font-display text-[3.75rem] font-bold leading-none text-brand">
                {i + 1}
              </span>
              <h3 className="heading-sub mt-4">{step.title}</h3>
              <p className="mt-2 text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;
