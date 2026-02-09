
import './App.css';
import Users from './components/NewUserContext/Users';
import NewUser from './components/NewUserContext/NewUser';
import { UserProvider } from './components/UsersContexts/UsersContext';



function App() {


  return (
    <UserProvider>
      <div>
       <NewUser />
        <Users />
    </div>
    </UserProvider>
    
  );
}

export default App;
