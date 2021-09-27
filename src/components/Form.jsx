import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formdata, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', {
        ...formdata,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserId:
          <input onChange={handleChange} min="1" name="userId" type="number" />
        </label>
        <br />
        <label>
          Title: <input onChange={handleChange} name="title" type="text" />
        </label>
        <br />
        <label>
          Body: <input onChange={handleChange} name="body" type="text" />
        </label>
        <br />
        <button>POST</button>
      </form>
    </div>
  );
};

export default Form;
