export default function TextileConsultantWebsite() {
  const backgroundHighlights = [
    "40+ years of textile engineering and manufacturing experience",
    "Expertise across yarn, fabric, processing, quality, production, and operations",
    "Hands-on leadership in factory performance improvement and process optimization",
    "Practical guidance for mills, manufacturers, sourcing teams, and growing textile businesses",
  ];

  const expertiseAreas = [
    {
      title: "Process Improvement",
      description:
        "Improve production flow, reduce waste, strengthen process control, and increase line efficiency.",
    },
    {
      title: "Quality & Troubleshooting",
      description:
        "Diagnose recurring fabric, yarn, dyeing, finishing, or production quality issues and identify actionable fixes.",
    },
    {
      title: "Factory & Operations Advisory",
      description:
        "Support plant setup, expansion, production systems, vendor evaluation, and operational decision-making.",
    },
    {
      title: "Training & Technical Mentorship",
      description:
        "Help technical teams, managers, and business owners build stronger textile knowledge and execution capability.",
    },
  ];

  const consultingOptions = [
    "One-on-one technical consultation",
    "Factory audit and improvement planning",
    "Problem-solving for production or quality challenges",
    "Advisory support for new textile businesses or expansion projects",
    "Training sessions for teams and managers",
    "Ongoing consultancy for strategic and technical guidance",
  ];

  const industries = [
    "Spinning",
    "Weaving / Knitting",
    "Dyeing & Finishing",
    "Garment / Apparel",
    "Home Textiles",
    "Technical Textiles",
  ];

  const navItems = [
    { id: "background", label: "Background" },
    { id: "consultancy", label: "Consultancy" },
    { id: "expertise", label: "Expertise" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">Mr. Chandrakant Upadhyay</div>
            <div className="text-sm text-slate-500">Textile Engineer • 40+ Years of Experience</div>
          </div>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
          >
            Book a Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-amber-50" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-900">
                Trusted Textile Engineering Guidance
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Decades of textile engineering expertise, focused on practical results.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                With more than 40 years of experience in the textile industry, Mr. Chandrakant
                provides practical, experience-driven consultancy for manufacturers, mills,
                sourcing teams, and entrepreneurs seeking technical clarity and operational
                improvement.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#background"
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
                >
                  View Background
                </a>
                <a
                  href="#consultancy"
                  className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                >
                  Explore Consultancy
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Core Strengths
              </div>
              <div className="mt-5 space-y-4">
                {backgroundHighlights.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="background" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Background
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A career built on technical depth, leadership, and industry knowledge.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mr. Chandrakant is a seasoned textile engineer with over four decades of
              experience across textile manufacturing, production processes, technical problem
              solving, quality improvement, and operational leadership. His work has been guided
              by one principle: combine strong engineering fundamentals with practical execution
              that helps businesses improve quality, efficiency, and long-term performance.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 lg:col-span-2">
              <h3 className="text-xl font-semibold">Professional Journey</h3>
              <div className="mt-5 space-y-4 text-slate-700 leading-7">
                <p>
                  Over the years, he has worked closely with textile operations involving production,
                  product quality, machinery understanding, process analysis, and technical advisory.
                  His experience enables him to assess challenges not just from a theoretical point of
                  view, but from the perspective of real factory conditions, business constraints, and
                  customer expectations.
                </p>
                <p>
                  This blend of engineering expertise and practical wisdom makes him a valuable advisor
                  for textile businesses looking to solve persistent problems, improve output quality,
                  optimize processes, or strengthen technical decision-making.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Typical Value Delivered</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>• Reduced recurring production and quality issues</li>
                <li>• Better process discipline and operational consistency</li>
                <li>• More confident technical decisions for management teams</li>
                <li>• Practical guidance grounded in long industry experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="consultancy" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Consultancy
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Need guidance for a textile project, technical issue, or factory challenge?
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Consultancy support is available for textile businesses, entrepreneurs, production
                  teams, and organizations seeking experienced advice in technical, quality, and
                  operations-related matters.
                </p>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Industries Served
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {industries.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {consultingOptions.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <div className="text-base font-medium leading-7">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Expertise
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Areas where experience turns into clear, actionable advice.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Why Work With Him
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Not generic advice. Grounded, technical, and practical support.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  Many textile problems require someone who understands both engineering detail and
                  real-world production. This website is built to present that value clearly: trusted
                  experience, practical problem-solving, and meaningful consultancy for businesses that
                  need results.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
              >
                Contact for Consultancy
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Contact
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s discuss your textile consultancy needs.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whether you need help with a technical issue, a manufacturing challenge, process
                  improvement, or team guidance, reach out with a short overview of your requirement.
                </p>
                <div className="mt-8 space-y-4 text-slate-700">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <div>[your-email@example.com]</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Phone / WhatsApp</div>
                    <div>[your-contact-number]</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Location</div>
                    <div>[City, Country]</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                    <input
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-900"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Company</span>
                    <input
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-900"
                      placeholder="Company name"
                    />
                  </label>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                    <input
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-900"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
                    <input
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-900"
                      placeholder="Contact number"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">How can we help?</span>
                  <textarea
                    rows={6}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                    placeholder="Briefly describe your textile challenge, requirement, or project."
                  />
                </label>
                <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">
                  Send Inquiry
                </button>
                <p className="mt-4 text-xs leading-6 text-slate-500">
                  This is a front-end contact form layout. It can be connected to email, Formspree,
                  Web3Forms, Netlify Forms, or a custom backend.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Mr. Chandrakant Upadhyay Textile Consultancy</div>
          <div>Built to showcase experience, trust, and practical textile expertise.</div>
        </div>
      </footer>
    </div>
  );
}
