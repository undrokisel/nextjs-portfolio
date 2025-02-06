"use client";
import { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validUsers = ['dron', 'dima', 'zhenia'];
    
    if (login === password && validUsers.includes(login)) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userLogin', login);
      onLogin(login);
      showSuccessPopup(login);
    } else {
      showErrorPopup();
    }
  };

  const showSuccessPopup = (login) => {
    alert(`Вход успешно совершен как ${login}`);
    onClose();
  };

  const showErrorPopup = () => {
    alert('Данные для входа неверны');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#121212] p-8 rounded-lg border border-[#33353F] w-96">
        <h2 className="text-2xl text-white font-bold mb-6">Вход в систему</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full p-2 bg-[#18191E] border border-[#33353F] text-white rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-[#18191E] border border-[#33353F] text-white rounded"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Войти
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-[#ADB7BE] hover:text-white"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal; 