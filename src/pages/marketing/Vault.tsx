import { ComingSoonPage } from "./ComingSoonPage";

const Vault = () => (
  <ComingSoonPage
    code="SECTION 03 / THE VAULT"
    heading={<>Your oils.<br />Costed.<br /><span className="text-hazard">Tracked.</span></>}
    subtitle="A 4,444-oil cross-vendor catalog powers your Library and Vault: normalized $/lb pricing, manufacturer sub-brands, IFRA/SDS/allergen PDFs, live name-match search, and same-name-first discontinued-oil swaps."
    watermark="VAULT"
    cta="STOCK THE VAULT"
    to="/app/inventory"
  />
);
export default Vault;
