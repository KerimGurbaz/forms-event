
import './App.css';
import Form from './components/forms/Form';
import FormObject from './components/forms/FormObject';
import KeyboardClipboard from './components/keyboardClipboardEvent/KeyboardClipboard';
import MouseEvent from './components/mouseEvents/MouseEvent';

function App() {
  return (
    <div className="container mt-4 text-center ">
      <Form/>
      <FormObject/>
      <KeyboardClipboard/>
      <MouseEvent/>


    </div>
  );
}

export default App;
