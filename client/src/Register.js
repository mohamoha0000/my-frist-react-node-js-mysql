import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      alert('تم التسجيل بنجاح!');
    } catch (err) {
      alert('حدث خطأ');
    }
  };

  return (
    <div>
      <h2>إنشاء حساب</h2>
      <input placeholder="البريد" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>تسجيل</button>
      <p>
        لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
      </p>
    </div>
  );
}

export default Register;
