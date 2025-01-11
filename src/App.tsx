import { CustomizationPanel } from "./components/CustomizationPanel"
import { Map } from "./components/Map";
import { Description } from "./components/Description";
import './assets/scss/main.scss';

function App() {

  return (
   <div className="content__wrapper">
      <div className="row d-flex justify-content-between">
        <CustomizationPanel />
        <Map />
        <Description />
      </div>
   </div>
  )
}

export default App
