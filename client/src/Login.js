import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Auth.css'; // Import the new CSS file

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
    <div className="auth-container">
      <div className="auth-box">
        <h2>تسجيل الدخول</h2>
        <input placeholder="البريد" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>دخول</button>
        <p>
          ليس لديك حساب؟ <Link to="/">إنشاء حساب</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
