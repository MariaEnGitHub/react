import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
  <>
      <NavBar/>
      <Button className="btn btn-primary">
        click me
      </Button>

      <ItemListContainer greeting= "Hola mundo Coder"/>


      </>

  );
}

export default App;
