import './App.css'
import ApiCallTest from './components/apiTesting'
import Counter from './components/counter'
import HelloWorld from './components/helloworld'


function App() {

  return (
    <>
      <div>
        <div>
          <h1>React Unit Testing Using Jest</h1><br />
          <h3>Step1: Create Test: jest in package.json</h3><br />
          <h3>Step2: Create a File .babelrc</h3><br />
          <h3>Step3: Create a file jest.config.cjs</h3><br />
          <h3>Step4: Paste this in package.json jest: testEnvironment: jsdom</h3><br />
          <h3>Step5: Run npm run test</h3><br />
        </div>
        <div>
          <h1>Testing Hello World Text test</h1>
          <HelloWorld/>
          <h1>Testing Click event test</h1>
          <Counter/>
          <h1>API CALL event test</h1>
          <ApiCallTest />
        </div>
      </div>
    </>
  )
}

export default App
