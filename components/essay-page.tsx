'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Section = {
  number: string
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

const referenceList = [
  'Chainalysis. (2026). 2026 Crypto Crime Report. Retrieved from https://www.chainalysis.com/blog/2026-crypto-crime-report-introduction/',
  'Chainalysis. (2026). 2026 Crypto Crime Report: Scams. Retrieved from https://www.chainalysis.com/blog/crypto-scams-2026/',
  'Cambridge Centre for Alternative Finance. (2025). Cambridge Bitcoin Electricity Consumption Index (CBECI). University of Cambridge.',
  'IESE Insight. (2023). The ethical concerns of cryptocurrencies. Retrieved from https://www.iese.edu/insight/articles/cryptocurrencies-blockchain-crypto-assets-ethics/',
  'International Journal of Criminology and Sociology. (2025). Navigating Ethical Challenges in Cryptocurrency and Blockchain Technologies, 14, 19-36. https://doi.org/10.6000/1929-4409.2025.14.03',
  'United Nations University. (2023). The Hidden Environmental Costs of Cryptocurrency. Retrieved from https://collections.unu.edu/eserv/UNU:9528/UN-IWEH_BTC_Report.pdf',
  'U.S. Energy Information Administration. (2024). Tracking Electricity Consumption from U.S. Cryptocurrency Mining Operations. Retrieved from https://www.eia.gov/todayinenergy/detail.php?id=61364',
]

const sections: Section[] = [
  {
    number: '01',
    title: 'Introduction',
    image: '/images/blockchain-ledger.png',
    imageAlt: 'Abstract illustration of a distributed blockchain ledger network',
    paragraphs: [
      'Since Bitcoin\u2019s introduction in 2009, blockchain technology has expanded from a niche experiment into a global financial and technological force, with thousands of cryptocurrencies and trillions of dollars in market value changing hands each year. Advocates describe blockchain as a democratizing tool: a decentralized, transparent ledger that removes the need for banks, governments, or other intermediaries to verify transactions. Yet this same decentralization, transparency, and pseudonymity that make blockchain attractive also generate serious ethical problems.',
      'This essay identifies three central ethical challenges associated with cryptocurrency and blockchain technology \u2014 environmental harm from energy-intensive mining, financial crime and investor exploitation, and gaps in governance and accountability \u2014 and argues that each has a realistic, evidence-based solution. Rather than treating blockchain as inherently unethical, this essay contends that its problems stem from specific design and regulatory choices, which means they can be substantially mitigated without abandoning the technology altogether.',
    ],
  },
  {
    number: '02',
    title: 'The Environmental Cost of Proof-of-Work Mining',
    image: '/images/proof-of-work.png',
    imageAlt: 'Illustration of energy-intensive cryptocurrency mining hardware',
    paragraphs: [
      'The most widely discussed ethical problem in cryptocurrency is environmental damage caused by the Proof-of-Work (PoW) consensus mechanism that underlies Bitcoin and several other major coins. In PoW systems, miners compete to solve energy-intensive cryptographic puzzles in exchange for newly minted coins and transaction fees. This competition rewards raw computational power, which in turn incentivizes miners to consume as much electricity as economically possible.',
      'A 2023 United Nations University report on Bitcoin\u2019s hidden environmental costs found that mining draws heavily on electricity grids that are still substantially powered by fossil fuels, producing a carbon footprint comparable to that of some mid-sized countries. The Cambridge Bitcoin Electricity Consumption Index, widely regarded as the most authoritative tracker of network energy use, estimated in its 2025 data that roughly half of Bitcoin\u2019s electricity now comes from renewable or low-carbon sources \u2014 an improvement, but one that still leaves a substantial share dependent on coal and natural gas.',
      'The environmental problem extends beyond carbon emissions. Mining hardware, known as application-specific integrated circuits (ASICs), becomes obsolete within a few years as more efficient equipment is released, generating significant electronic waste. Large mining operations also strain local power grids and water resources used for cooling, sometimes driving up electricity costs for nearby residents. These impacts raise a genuine ethical tension: the pursuit of a decentralized financial system imposes environmental costs on communities and ecosystems that may receive none of the technology\u2019s benefits.',
    ],
  },
  {
    number: '03',
    title: 'Financial Crime, Fraud, and Investor Exploitation',
    image: '/images/crypto-risk.png',
    imageAlt: 'Illustration representing cryptocurrency transaction risk and fraud',
    paragraphs: [
      'A second major ethical problem concerns the way cryptocurrency markets have enabled fraud, speculation, and financial crime at a scale that harms both individual investors and the broader financial system. Because most tokens are unregulated or only loosely regulated compared to traditional securities, the crypto market has become fertile ground for rug pulls, pump-and-dump schemes, and fraudulent initial coin offerings (ICOs) that raise money from retail investors and then collapse or disappear entirely. High-profile failures, from the Terra/Luna collapse to the bankruptcy of the FTX exchange, wiped out billions of dollars in retail savings and exposed how little protection ordinary investors have in this market.',
      'Chainalysis\u2019s 2026 Crypto Crime Report illustrates the scale of the problem. According to the report, addresses linked to illicit activity received at least $154 billion in 2025, a 162 percent increase from the previous year, driven substantially by sanctions evasion and the use of stablecoins by state and criminal actors. The same report estimates that scams alone accounted for roughly $14 to $17 billion in losses in 2025, with artificial intelligence increasingly used to make fraudulent schemes more persuasive and to help scammers manage larger numbers of victims simultaneously. North Korean state-linked hackers were also reported to have stolen over $2 billion in cryptocurrency in 2025, including the single largest crypto heist on record. While illicit activity still represents a small fraction of total crypto transaction volume, the absolute dollar figures show that fraud and financial crime are not marginal problems but a persistent and growing feature of the ecosystem.',
      'The pseudonymity that blockchain offers compounds this problem. While transactions are recorded on a public ledger, the identities behind wallet addresses are not inherently linked to real-world identities, making it easier to launder money, evade sanctions, and pay ransomware demands than in traditional banking systems that require identity verification. This creates a genuine ethical dilemma: the same privacy features that protect legitimate users from surveillance and censorship also protect criminals from accountability.',
    ],
  },
  {
    number: '04',
    title: 'Governance, Accountability, and Inequality',
    image: '/images/blockchain-governance.png',
    imageAlt: 'Illustration of a decentralized blockchain governance network',
    paragraphs: [
      'A third ethical problem is structural: blockchain systems are designed to minimize centralized control, but this makes it unclear who is responsible when something goes wrong. When a decentralized autonomous organization (DAO) is exploited, when a smart contract contains a bug that drains user funds, or when a decentralized exchange is hacked, there is often no clear legal entity to hold accountable, and victims frequently have no path to recovery. This governance vacuum sits uneasily with blockchain\u2019s marketing as a trustworthy, transparent alternative to traditional finance.',
      'Cryptocurrency markets have also tended to concentrate wealth rather than distribute it evenly, despite decentralization rhetoric that promises broader financial inclusion. Early adopters, large mining operations, and well-capitalized investment funds have captured a disproportionate share of gains, while later retail investors frequently buy in near market peaks and absorb the losses during downturns. Energy-intensive mining further concentrates power among those who can afford industrial-scale hardware and cheap electricity, undermining the vision of a level playing field that decentralization was supposed to create.',
    ],
  },
  {
    number: '05',
    title: 'Toward Ethical Solutions',
    image: '/images/ethical-solutions.png',
    imageAlt: 'Illustration of renewable energy and ethical technology',
    paragraphs: [
      'These problems are serious, but they are not unsolvable, and meaningful progress has already been demonstrated in practice. The clearest example is Ethereum\u2019s 2022 transition from Proof-of-Work to Proof-of-Stake, a consensus mechanism that selects validators based on the cryptocurrency they hold and lock up as collateral rather than on computational competition. This single change reduced Ethereum\u2019s energy consumption by more than 99 percent, demonstrating that the environmental cost of blockchain is a consequence of specific design choices rather than an unavoidable feature of the technology itself. Wider adoption of Proof-of-Stake and other low-energy consensus mechanisms, combined with continued use of renewable energy sourcing and heat-recycling programs at mining facilities, could substantially reduce the industry\u2019s environmental footprint.',
      'Addressing financial crime and investor exploitation requires stronger regulation rather than the technology\u2019s abandonment. Mandatory Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements at exchanges, clearer legal classification of which tokens qualify as securities, and mandatory disclosure standards for ICOs and DeFi projects would give investors more protection while preserving blockchain\u2019s core technical benefits. Regulatory bodies such as the U.S. Securities and Exchange Commission have already begun requiring more detailed disclosures from crypto firms, and similar frameworks are developing in the European Union and parts of Asia. Financial literacy campaigns aimed at retail investors are also essential, since many losses stem not from technical failures but from a basic lack of understanding of the risks involved in speculative assets.',
      'Finally, governance gaps can be narrowed by developing clearer legal frameworks for decentralized organizations, so that DAOs and similar structures have defined points of accountability rather than operating in a legal gray zone. Smart contract auditing standards, bug bounty programs, and insurance mechanisms for DeFi users can also reduce the harm caused when things go wrong, even in a system without a central authority.',
    ],
  },
  {
    number: '06',
    title: 'Conclusion',
    image: '/images/responsible-future.png',
    imageAlt: 'Illustration of a responsible path forward for technology',
    paragraphs: [
      'Cryptocurrency and blockchain technology present real and well-documented ethical problems: environmental harm from energy-intensive mining, a persistent pattern of financial crime and investor exploitation, and structural gaps in governance and accountability. These are not reasons to dismiss the technology outright, however. Ethereum\u2019s successful transition to a far less energy-intensive consensus mechanism shows that the environmental problem is solvable through design choices already available today. Growing regulatory attention to disclosure, KYC/AML compliance, and investor protection shows a realistic path toward reducing financial crime. What blockchain needs most is not less innovation, but more responsibility \u2014 a combination of better engineering, stronger regulation, and greater public understanding that allows its genuine benefits to be realized without imposing avoidable costs on the environment, on vulnerable investors, and on society at large.',
    ],
  },
]

function LinkPreview({ href }: { href: string }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ left: number; top: number; placeAbove: boolean }>({
    left: 0,
    top: 0,
    placeAbove: false,
  })
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const anchorRef = useRef<HTMLAnchorElement>(null)
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  let domain = href
  try {
    domain = new URL(href).hostname.replace(/^www\./, '')
  } catch {
    domain = href
  }

  const POP_WIDTH = 400
  const POP_HEIGHT = 300

  const compute = () => {
    const rect = anchorRef.current?.getBoundingClientRect()
    if (!rect) return
    const left = Math.min(
      Math.max(rect.left, 12),
      Math.max(window.innerWidth - POP_WIDTH - 12, 12),
    )
    const spaceBelow = window.innerHeight - rect.bottom
    const placeAbove = spaceBelow < POP_HEIGHT + 24 && rect.top > POP_HEIGHT + 24
    const top = placeAbove ? rect.top - POP_HEIGHT - 10 : rect.bottom + 10
    setPos({ left, top, placeAbove })
  }

  const show = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    showTimer.current = setTimeout(() => {
      compute()
      setStatus('loading')
      setOpen(true)
    }, 220)
  }

  const hide = () => {
    if (showTimer.current) clearTimeout(showTimer.current)
    hideTimer.current = setTimeout(() => setOpen(false), 140)
  }

  useEffect(() => {
    if (!open || status !== 'loading') return
    const t = setTimeout(() => {
      setStatus((s) => (s === 'loading' ? 'error' : s))
    }, 16000)
    return () => clearTimeout(t)
  }, [open, status])

  return (
    <span className="ref-link-wrap" onMouseEnter={show} onMouseLeave={hide}>
      <a
        ref={anchorRef}
        className="ref-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onFocus={() => {
          compute()
          setStatus('loading')
          setOpen(true)
        }}
        onBlur={hide}
      >
        {href}
      </a>
      {open && (
        <span
          className="link-preview-pop"
          role="tooltip"
          onMouseEnter={() => {
            if (hideTimer.current) clearTimeout(hideTimer.current)
          }}
          onMouseLeave={hide}
          style={{
            left: pos.left,
            top: pos.top,
            width: POP_WIDTH,
            height: POP_HEIGHT,
          }}
        >
          <span className="link-preview-head">
            <img
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
              alt=""
              width={16}
              height={16}
            />
            <span className="link-preview-domain">{domain}</span>
            <span className="link-preview-open">Open &#8599;</span>
          </span>
          <span className="link-preview-body">
            {status !== 'error' && (
              <img
                className="link-preview-shot"
                src={`https://api.microlink.io/?url=${encodeURIComponent(
                  href,
                )}&screenshot=true&meta=false&embed=screenshot.url`}
                alt={`Screenshot preview of ${domain}`}
                onLoad={() => setStatus('ready')}
                onError={() => setStatus('error')}
                style={{ opacity: status === 'ready' ? 1 : 0 }}
              />
            )}
            {status !== 'ready' && (
              <span className="link-preview-fallback">
                {status === 'error' ? (
                  <>
                    <span className="link-preview-fallback-domain">{domain}</span>
                    <span>Preview unavailable &mdash; click to open the source</span>
                  </>
                ) : (
                  'Loading preview\u2026'
                )}
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  )
}

function Reference({ reference }: { reference: string }) {
  const match = reference.match(/https?:\/\/\S+/)
  if (!match || match.index === undefined) {
    return <li>{reference}</li>
  }
  const url = match[0].replace(/[.,;]+$/, '')
  const before = reference.slice(0, match.index)
  return (
    <li>
      {before}
      <LinkPreview href={url} />
    </li>
  )
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: `${progress * 100}%`,
        background: 'var(--accent)',
        zIndex: 50,
        transition: 'width 0.1s linear',
      }}
    />
  )
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return (
    <section ref={ref} className="essay-section reveal">
      {children}
    </section>
  )
}

export default function EssayPage() {
  return (
    <>
      <ReadingProgress />
      <main className="essay-shell">
        <header className="essay-nav">
          <a href="#top" className="wordmark">
            ETHICS / TECHNOLOGY
          </a>
          <span>RESEARCH ESSAY &middot; 2026</span>
          <a href="#essay">JUMP TO ESSAY &darr;</a>
        </header>

        <section id="top" className="hero-panel">
          <div className="eyebrow">CRYPTOCURRENCY &amp; BLOCKCHAIN</div>
          <h1>
            The ethics
            <br />
            of <em>blockchain.</em>
          </h1>
          <p className="hero-deck">
            A clear examination of environmental harm, financial crime, investor exploitation, and
            the path toward more responsible technology.
          </p>
          <div className="hero-meta">
            <span>Research essay</span>
            <span>6 sections</span>
            <span>August 2026</span>
          </div>
        </section>

        <section className="summary-panel">
          <div>
            <span className="summary-kicker">THE QUESTION</span>
            <h2>
              Can blockchain&apos;s benefits be realized without imposing avoidable costs on people
              and the planet?
            </h2>
          </div>
          <div className="summary-note">
            <span>KEY ARGUMENT</span>
            <p>
              Blockchain is not inherently unethical. Its problems come from specific design and
              regulatory choices which means they can be mitigated.
            </p>
          </div>
        </section>

        <div id="essay" className="essay-content">
          {sections.map((section) => (
            <Reveal key={section.number}>
              <div className="section-number">{section.number}</div>
              <div className="section-main">
                <div className="section-heading">
                  <span className="eyebrow">SECTION {section.number}</span>
                  <h2>{section.title}</h2>
                </div>
                <div className="section-body">
                  <figure className="section-figure">
                    <Image
                      className="section-image"
                      src={section.image || '/placeholder.svg'}
                      alt={section.imageAlt}
                      width={1200}
                      height={800}
                    />
                    <figcaption className="section-caption">{section.imageAlt}</figcaption>
                  </figure>
                  <div className="section-text">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <footer className="essay-footer">
          <div>
            <div className="footer-mark">
              ETHICS
              <br />
              <span>OF BLOCKCHAIN</span>
            </div>
            <p className="footer-caption">
              A research essay on cryptocurrency, responsibility, and the choices that shape emerging
              technology.
            </p>
          </div>
          <div className="references">
            <span>REFERENCES</span>
            <ol>
              {referenceList.map((reference) => (
                <Reference key={reference} reference={reference} />
              ))}
            </ol>
          </div>
        </footer>
      </main>
    </>
  )
}

export { EssayPage }
