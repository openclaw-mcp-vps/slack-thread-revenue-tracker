export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Sales Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Revenue Mention in Slack
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Slack Revenue Tracker listens to your channels, uses AI to extract deal signals, and surfaces a live dashboard — so your team closes faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Real-time Slack webhooks', 'AI deal extraction', 'Revenue dashboards', 'Keyword alerts', 'CSV export', 'Team sharing'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to track revenue in Slack</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Slack channels monitored',
              'AI-powered deal categorization',
              'Live revenue dashboard',
              'Keyword & amount alerts',
              'Weekly digest emails',
              'CSV & JSON export',
              'Up to 5 team members',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started — $29/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to Slack?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">You install our Slack app with one click. It uses Slack's Events API and webhooks to listen to the channels you choose — no manual setup or bots to manage.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">What counts as a revenue mention?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Our AI detects deal sizes, ARR/MRR figures, contract values, close dates, and custom keywords you define. It categorizes each mention by stage, amount, and owner automatically.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Yes — cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Revenue Tracker. All rights reserved.
      </footer>
    </main>
  )
}
