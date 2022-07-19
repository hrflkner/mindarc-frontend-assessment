// Components
import DesktopBanner from './components/DesktopBanner';
import MobileBanner from './/components/MobileBanner';
import MainCardCollection from './components/MainCards';
import TabIndex from './components/TabIndex';
import Accordion from './components/Accordion';

// Custom Hooks
import { useWindowSize } from './hooks/useWindowSize';

function App() {
    const deviceWidth = useWindowSize()[1];

    return (
        <div className="App">
            {deviceWidth > 525 ? <DesktopBanner /> : <MobileBanner />}
            <MainCardCollection />
            {deviceWidth > 525 ? <TabIndex /> : <Accordion />}
        </div>
    );
}

export default App;
