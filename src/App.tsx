import logo from './logo.svg';
import './App.css';
import Header from './layouts/header';
import { Page } from './layouts/page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="w-full relative z-[2] sm:ml-16 bg-[#191d3e] flex flex-col md:flex-row sm:rounded-l-2xl overflow-hidden">
        <div className="w-full">
          <Header></Header>
          <Page></Page>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
