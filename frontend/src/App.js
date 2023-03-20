import { Routes , Route } from 'react-router-dom';
import FactureForm from './component/FactureForm';
import FactureList from './component/FactureList';

function App() {
  return (
    <>
        
          <Routes>
            <Route path='/facture_list' element={<FactureList />}/>
            <Route path='/facture_form' element={<FactureForm />}/>
          </Routes>
       
    </>
    
  );
}

export default App;
