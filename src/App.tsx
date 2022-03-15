import React from 'react';
import logo from './logo.png';
import './App.css';
import { type Item, type Link, Card, linkBtn } from './components/Data';

const App: React.FC = () => {
  return (
    <div className="w-3/4 m-auto text-center">
      <header className='flex flex-wrap justify-between items-center my-4'>
        <div className='flex flex-nowrap justify-center items-center mb-4 mx-auto lg:m-0'>
          <img src={logo} className="h-12" alt="logo" />
          <h2 className='text-3xl font-bold ml-2'>tanukizzan</h2>
        </div>
        <nav className='flex flex-wrap justify-center items-center m-auto lg:m-0'>
          {
            linkBtn.map((link: Link) => (
              <a href={link.url} className='link-btn'>{link.title}</a>
            ))
          }
        </nav>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {
          Card.map((item: Item) => (
            <div key={item.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <a href={item.url}>
                <img src={item.image} alt={item.title} className='w-full' />
                <h2 className='font-bold text-xl px-6 py-4'>{item.title}</h2>
              </a>
            </div>
          ))
        }
      </div>
      <footer className='my-8'>
        <div>
        </div>
        <p>&copy; 2019-2022 Tanukizzan</p>
      </footer>
    </div>
  );
}

export default App;
