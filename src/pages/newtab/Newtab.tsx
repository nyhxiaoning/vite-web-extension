/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2025-02-19 18:11:44
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2025-02-19 18:20:15
 * @FilePath: /vite-react-tailwindcss-chrome/src/pages/newtab/Newtab.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/newtab/Newtab.css';

export default function Newtab() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!1111
        </a>
      </header>
    </div>
  );
}
