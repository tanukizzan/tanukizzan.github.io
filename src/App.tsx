import React from 'react';
import logo from './logo.png';
import './App.css';
import { type Item, type Link, Card, linkBtn } from './components/Data';

const App: React.FC = () => {
  return (
    <div className="w-5/6 m-auto text-center">
      <header className='flex flex-wrap justify-between items-center my-4'>
        <div className='flex flex-wrap justify-center items-center mb-4 mx-auto lg:m-0'>
          <img src="https://tanukizzan.com/images/profile.webp" className="h-12 rounded-full" alt="logo" />
          <h2 className='text-3xl font-bold ml-2'>Tanukizzan Apps</h2>
        </div>
        <nav className='flex flex-wrap justify-center items-center m-auto lg:m-0'>
          {
            linkBtn.map((link: Link) => (
              <a href={link.url} className='text-xl text-blue-700 font-semibold hover:underline m-2'>{link.title}</a>
            ))
          }
        </nav>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
        {
          Card.map((item: Item) => (
            <div key={item.id} className='max-w-sm mx-auto'>
              <a href={item.url}>
                <img src={item.image} alt={item.title} className='w-full rounded shadow-lg ' />
                <h2 className='font-bold text-xl pt-4'>{item.title}</h2>
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
