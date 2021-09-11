/* eslint-disable no-unused-vars */
import UserAgentBlock from './UserAgentBlock';
import OtherBlock from './OtherBlock';
import NavigatorBlock from './NavigatorBlock';
import ScreenBlock from './ScreenBlock';
import FingerprintBlock from './FingerprintBlock';
import LocationBlock from './LocationBlock';
import HardwareBlock from './HardwareBlock';
import SoftwareBlock from './SoftwareBlock';
import ConnectionBlock from './ConnectionBlock';
import FiltersBlock from './FiltersBlock';
// import FontsBlock from './FontsBlock';

const ScanBlocks = () => (
  <>
    <UserAgentBlock />
    <OtherBlock />
    <ScreenBlock />
    <NavigatorBlock />
    <LocationBlock />
    <ConnectionBlock />
    {/* <FingerprintBlock />
    <LocationBlock />
    <ConnectionBlock />
    <FiltersBlock />
    <SoftwareBlock />
    <HardwareBlock /> */}
    {/* <FontsBlock /> */}
  </>
);

export default ScanBlocks;
