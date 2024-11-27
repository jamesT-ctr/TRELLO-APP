import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import './hi.css'

export const Hi = () => {
  const {state} = useLocation()
  console.log(state);

    return (
        <div className="hi">
            <h2>Hello, {state?.user.name}!</h2>
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
        </div>
    )
}