import './App.css';
import EmployeeForm from './components/EmployeeForm';
import FullFeaturedCrudGrid from './components/EmployeesList'

// import EmployeesList from './components/EmployeesList';

function App() {
   return (
    <div className="App">
      <h1>Employees-Vortex</h1>

      <EmployeeForm/>
      <FullFeaturedCrudGrid/>
      {/* <EmployeesList/> */}
    </div>
  );
}

export default App;
