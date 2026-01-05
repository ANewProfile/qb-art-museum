import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

// Renaissance
import Renaissance from './pages/Renaissance';
import MonaLisa from './pages/MonaLisa';
import LastSupper from './pages/LastSupper';

// Baroque
// import Baroque from './pages/Baroque';

// Rococo / Neoclassicism
// import Rococo from './pages/Rococo';

// Romanticism / Realism
// import Romanticism from './pages/Romanticism';

// Impressionism / Post-Impressionism
// import Impressionism from './pages/Impressionism';

// Modern
// import Modern from './pages/Modern';

function App() {
  return (
    <div>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/renaissance" element={<Renaissance />} />
                <Route path="/renaissance/mona-lisa" element={<MonaLisa />} />
                <Route path="/renaissance/last-supper" element={<LastSupper />} />
                <Route path="/renaissance/vitruvian-man" element={<Renaissance />} />
                <Route path="/renaissance/school-of-athens" element={<Renaissance />} />
                <Route path="/renaissance/creation-of-adam" element={<Renaissance />} />
                <Route path="/renaissance/david" element={<Renaissance />} />
                <Route path="/renaissance/birth-of-venus" element={<Renaissance />} />
                <Route path="/renaissance/primavera" element={<Renaissance />} />
            </Routes>
        </main>

    </div>
  )
}



export default App

