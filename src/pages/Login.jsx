// 로그인 하는 페이지 
import React, { useState } from 'react';
import '../App.css'

function Login( {handleLogin} ) {
    const [input, setInput] = useState({});
  
    function handleOnChange(e) {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      handleLogin(input);
    }
  
    return (
        <div className='container'>
          <form>
              <input type="text" name="id" onChange={handleOnChange} />
              <input type="password" name="password" onChange={handleOnChange} />
              <button type="submit" onClick={handleSubmit}>LOGIN</button>
          </form>
      </div>
    )
  }

  export default Login