import React from 'react';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <Contact />
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;