import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      alert(res.data.message);
    } catch (err) {
      alert('فشل في تسجيل الدخول');
    }
  };

  return (
    <div>
      <h2>تسجيل الدخول</h2>
      <input placeholder="البريد" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>دخول</button>
    </div>
  );
}

export default Login;
