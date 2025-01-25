import { CustomizationPanel } from "./components/CustomizationPanel/CustomizationPanel";
import { Map } from "./components/Map/Map";
import { Description } from "./components/Description";
import './assets/scss/main.scss';
import { MapContainer } from "./components/Map/MapContainer";

function App() {

  return (
   <div className="content__wrapper">
      <div className="row d-flex justify-content-center gx-5">
        <CustomizationPanel />
        <MapContainer />
        {/* <Description /> */}
      </div>
   </div>
  )
}

export default App
