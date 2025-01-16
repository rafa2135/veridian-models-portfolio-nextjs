const Contac = () => {
  return (
    <div className="py-4 bg-black  flex justify-center">
      <div className="w-full max-w-md px-4">
        <h1 className="text-4xl text-center text-white font-bold mb-8 md:text-5xl lg:text-6xl">
          Contactanos
        </h1>
        <form action="" className="bg-black text-white space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-bold">
              Apellido:
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Correo:
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold">
              Mensaje:
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-black bg-white rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contac;
