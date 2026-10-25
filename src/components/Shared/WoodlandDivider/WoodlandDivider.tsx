import Moon from "../Moon";
import { Divider, BranchIcon } from "./WoodlandDivider.styles";
function Branch({ flipped = false }: { flipped?: boolean }) {
  return <BranchIcon $flipped={flipped} width="67" height="20" viewBox="0 0 67 20" fill="none" aria-hidden="true">
    <path d="M0 10h64M33 10l-7-5m16 5-7 5m10-5-7-7m15 7-7 5m10-5-6-6m11 6-5 3" stroke="currentColor" strokeWidth=".9" />
    <path d="m59 7 5 3-5 3" stroke="currentColor" strokeWidth=".9" />
  </BranchIcon>;
}
export default function WoodlandDivider() {
  return <Divider aria-hidden="true"><Branch /><Moon size={25} /><Branch flipped /></Divider>;
}
