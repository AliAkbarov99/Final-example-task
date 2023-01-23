import React from 'react'
import { useFormik } from 'formik';
import './Add.scss'
import axios from 'axios'

const Add = () => {
  // const [data,setdata] = useState([])
  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      city: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:8080/api/customers",{
        ...values
      })
    },
  });
  return (
    <div id='add__form'>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="desc">Description</label>
      <input
        name="desc"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.desc}
      />
      <label htmlFor="city">City</label>
      <input
        name="city"
        type="city"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
}

export default Add