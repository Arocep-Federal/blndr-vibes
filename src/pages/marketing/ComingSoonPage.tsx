import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { CTAStrip } from "@/components/marketing/CTAStrip";

interface Props {
  code: string;
  heading: React.ReactNode;
  subtitle: string;
  watermark: string;
  cta: string;
  to?: string;
}

export const ComingSoonPage = ({
  code,
  heading,
  subtitle,
  watermark,
  cta,
  to = "/app",
}: Props) => {
  return (
    <MarketingLayout>
      <PageHero
        sectionCode={code}
        heading={heading}
        subtitle={subtitle}
        watermark={watermark}
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="paper-card p-10 md:p-16 text-center max-w-2xl mx-auto">
            <span className="redact-hazard label-mono inline-block rotate-[-3deg]">
              DOSSIER PENDING
            </span>
            <h2 className="display text-4xl md:text-5xl mt-5">
              This page<br />is being<br />declassified.
            </h2>
            <p className="typewriter text-ink-soft mt-5">
              The full dossier ships in the next transmission. Until then, the
              app is open for business.
            </p>
          </div>
        </div>
      </section>
      <CTAStrip
        heading={
          <>
            Skip the wait.<br />
            <span className="text-hazard">Enter HQ.</span>
          </>
        }
        ctaLabel={cta}
        to={to}
      />
    </MarketingLayout>
  );
};
