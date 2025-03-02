import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', pizza_type: '', comment: '' });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/orders/');
    setOrders(response.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/orders/', formData);
    fetchOrders();
    setFormData({ name: '', phone: '', pizza_type: '', comment: '' });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Заказ пиццы</h1>
      <form className="mb-6" onSubmit={handleSubmit}>
        <input name="name" placeholder="Имя" value={formData.name} onChange={handleChange} className="border p-2 m-2" />
        <input name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} className="border p-2 m-2" />
        <input name="pizza_type" placeholder="Вид пиццы" value={formData.pizza_type} onChange={handleChange} className="border p-2 m-2" />
        <input name="comment" placeholder="Комментарий" value={formData.comment} onChange={handleChange} className="border p-2 m-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Заказать</button>
      </form>

      <h2 className="text-xl font-bold mb-4">Список заказов</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="border p-2 m-2">
            {order.name} - {order.pizza_type} ({order.phone})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
