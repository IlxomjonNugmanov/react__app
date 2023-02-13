
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HeroBotm from './components/HeroBotm/HeroBotm';
import Partners from './components/Partners/Partners';
import SVaccination from './components/SVaccination/SVaccination';
import ImportantSection from './components/ImportantSection/ImportantSection';
import VaccineForma from './components/VaccineForma/VaccineForma';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className='container'>
         <Header/>
         <Hero/>
         <HeroBotm/>
         <Partners first={"VACCINESIN"} secont={"AstraVac"} third={"HealthVaccine"} four={"SimpAcine"}/>
         <SVaccination/>
         <ImportantSection/>
         <VaccineForma/>
         <Contact/>
         <Footer/>
      </div>
      
    </div>
  );
}

export default App;
