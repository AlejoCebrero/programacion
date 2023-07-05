import React from 'react';
import './App.css';
import TodoList from './components/ToDoList';
import ButtonGroup from './components/widgets/ButtonGroup';
import CheckBox from './components/widgets/CheckBox';
import Dropdown from './components/widgets/DropDown';
import InputDate from './components/widgets/InputDate';
import Slider from './components/widgets/InputSlider';
import TextInput from './components/widgets/InputText';
import TextArea from './components/widgets/InputTextArea';
import RadioButton from './components/widgets/RadioButton';
import SwitchButton from './components/widgets/SwitchButton';
import Autos from './components/clases/clases';
import Escuela from './components/clases/class_escuela';
import CuentaBancaria from './components/clases/class_banco';
import Usuario from './components/clases/ejercicio3.2';
import LoginForm from './components/clases/ejercicio3.3';
import Clock from './components/clases/ejercicio3.4';
import Gallery from './components/clases/ejercicio3.5';
import Saludo from './components/clases/ejercicio3.1';
function App() {  
  //dropdown
  const options = [
    { value: 'option1', label: 'Opcion 1' },
    { value: 'option2', label: 'Opcion 2' },
    { value: 'option3', label: 'Opcion 3' },
  ];
  const handleOptionSelect = (selectedValue: string) => {
    console.log(':', selectedValue);
  };
  //input date
  const handleDateSelect = (selectedDate: string) => {
    console.log('Selected date:', selectedDate);
  };
  //input text
  const handleInputChange = (inputValue: string) => {
    console.log('Input value:', inputValue);
  };
  //input text area
  const handleTextAreaChange = (text: string) => {
    console.log('Text value:', text);
  };
  //radio button
  const handleOptionSelectArea = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };
  //switch button
  const handleToggle = (checked: boolean) => {
    console.log('Switch state:', checked);
  };

  const alumnos = [
    { nombre: 'Alumno 1' },
    { nombre: 'Alumno 2' },
    { nombre: 'Alumno 3' },
  ];
  return (
    <div className="App">
      <TodoList />

      <h1>ButtonGroup</h1>
      <ButtonGroup
        options={['Opcion 1', 'Opcion 2', 'Opcion 3']}
        selectedOption="Opcion 1"
        onOptionChange={() => {}}
      />

      <h1>CheckBox</h1>
      <CheckBox label='Checkbox1'/>
      <CheckBox label='Checkbox2'/>

      <h1>Dropdown</h1>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      
      <h1>InputDate</h1>
      <InputDate onDateSelect={handleDateSelect} />
      
      <h1>InputSlider</h1>
      <Slider min={0} max={100} />
      
      <h1>Input Text</h1>
      <TextInput onInputChange={handleInputChange} />
      
      <h1>Input Text Area</h1>
      <TextArea onTextAreaChange={handleTextAreaChange} />

      <h1>Radio Button</h1>
      <RadioButton options={['Opcion 1', 'Opcion 2', 'Opcion 3']} onOptionSelect={handleOptionSelectArea} />

      <h1>Switch Button</h1>
      <SwitchButton onToggle={handleToggle} />
      
    <Autos />
    <Escuela alumnos={alumnos}/>
    <CuentaBancaria/>
    <Saludo nombre="Alejo"/>
    <Usuario nombre="brian" edad="25" telefono="123123" email="asdf@gmail" />
    <LoginForm/>
    <Clock/>
    <Gallery/>
    </div>
  );
}

export default App;
