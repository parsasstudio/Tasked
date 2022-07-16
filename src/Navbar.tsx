import React from 'react';
import JsonData from './MOCK_DATA.json'
import { useState } from 'react'

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <nav className="navbar sticky-top flex-md-nowrap p-0 font-face medium-purple-bg">
        <a className="navbar-brand flex light-purple-font" href="/">Home</a>
        <a className="navbar-brand flex light-purple-font" href="/Create-tasks">Upload Tasks</a>
        <a className="navbar-brand flex light-purple-font" href="/Tasks">Tasks</a>
        <a className="navbar-brand flex light-purple-font" href="/"></a>
        <a className="navbar-brand flex light-purple-font" href="/"></a>
        {/* <input className="form-control" type="text" placeholder="Search" onChange={event => { setSearchTerm(event.target.value) }} /> */}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link light-purple-font" href="/about">Tasked&copy;</a>
          </li>
        </ul>
      </nav>

      <div className="m-3 flex text-center">
        {
          JsonData.filter((data) => {
            if (searchTerm == "") {
              return ""
            } else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return data
            }
          }).map((data, key) => {
            return (
              <div className="user" key={key}>
                <p className="purple-hover font-face fw-light fs-5">{data.first_name}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}


