import { ComingSoonPage } from "./ComingSoonPage";

const Vault = () => (
  <ComingSoonPage
    code="SECTION 03 / THE VAULT"
    heading={<>Your oils.<br />Indexed.<br /><span className="text-hazard">Owned.</span></>}
    subtitle="Load CandleScience, Nature's Garden, Brambleberry, and indie-supplier oils once. CHANDLER reads them. The Mixer pulls from them. You stop re-typing."
    watermark="VAULT"
    cta="STOCK THE VAULT"
    to="/app/inventory"
  />
);
export default Vault;
