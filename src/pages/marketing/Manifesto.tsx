import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Manifesto as ManifestoSection } from "@/components/Manifesto";
import { CTAStrip } from "@/components/marketing/CTAStrip";

const Manifesto = () => (
  <MarketingLayout>
    <ManifestoSection />
    <div className="container py-8">
      <div className="perf-divide pt-6 max-w-3xl mx-auto text-center">
        <div className="scribble text-base">
          — Filed by the Unauthorized Extraction Unit, 2024.
        </div>
      </div>
    </div>
    <CTAStrip
      heading={<>Sign on.<br /><span className="text-hazard">Mix something.</span></>}
      ctaLabel="ENTER HQ"
    />
  </MarketingLayout>
);
export default Manifesto;
