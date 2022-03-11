
import './App.css';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="container">
      <Header />
      <SectionOne />
      <h1 className="OverView">Overview - Today</h1>
      <SectionTwo />

    </div>
  );
}

export default App;
