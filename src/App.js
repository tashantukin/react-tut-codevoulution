import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter' 
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ImportBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
     
 {/* <Inline /> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <Message ></Message> */}
      {/* <Counter /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
        <button>Button</button>
      </Greet>
      <Welcome name ="Tash" heroName ="Codemafia">
        
    </Welcome> */}
        {/* <Greet name="Bruce" heroName="Batman">
        <button>Button</button>
      </Greet>
      <Welcome name ="Tash" heroName ="Codemafia">
        
        </Welcome> */}
      

      {/* <FunctionClick >

      </FunctionClick> */}

      {/* <ImportBind ></ImportBind> */}

      {/* <ParentComponent></ParentComponent> */}


      {/* <UserGreeting /> */}

      {/* <NameList /> */}

     
<Form />
    </div>
  );
}

export default App;
