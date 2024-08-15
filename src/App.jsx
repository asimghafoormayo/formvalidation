import React, { useRef, useState } from 'react'

const App = () => {

  const [data, setData] = useState({
    name : '',
    email : '',
    message : '',
  })

  const name =  useRef();
  const email = useRef();
  const message = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setData({
      name : name.current.value,
      email : email.current.value,
      message : message.current.value,
    })
    name.current.value = ''
    email.current.value = ''
    message.current.value = ''
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            ref={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            ref={email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            ref={message}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 my-4">Submitted Data:</h3>
        <p className="text-gray-700 my-2"><strong>Name: </strong>{data.name}</p>
        <p className="text-gray-700 my-2"><strong>Email: </strong>{data.email}</p>
        <p className="text-gray-700 my-2"><strong>Message: </strong>{data.message}</p>
      </div>
    </div>
  </div>
  )
}

export default App