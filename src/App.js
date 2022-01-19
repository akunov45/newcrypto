import './App.css';
import Benefits from './components/benefits/benefits';
import Charts from './components/charts/chart';
import Header from './components/header';
import Implementation from './components/implementation';
import Network from './components/network/network';
import SectionEleven from './components/section-eleven/section-eleven';
import SectionFour from './components/section-four/section-four';
import SectionSeven from './components/section-seven/section-seven';
import SectionTen from './components/section-ten/section-ten';
import SectionTwo from './components/section-two/section-two';

function App() {
    return (
        <>
            <Header />
            <SectionTwo />
            <Benefits />
            <SectionFour />
            <Implementation />
            <Network />
            <SectionSeven />
            <Charts />
            <SectionTen />
            <SectionEleven />
        </>
    );
}

export default App;
