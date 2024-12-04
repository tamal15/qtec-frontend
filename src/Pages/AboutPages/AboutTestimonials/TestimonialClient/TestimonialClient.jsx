import { useEffect, useState } from "react";

const TestimonialClient = () => {
  const [activeClient, setActiveClient] = useState(null);

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/gettestimonialclient`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const toggleClient = (clientName) => {
    setActiveClient(activeClient === clientName ? null : clientName);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl font-bold mb-6">More Words of Appreciations from Clients</h2>
      <ul className="space-y-4">
        {data.map((client, index) => (
          <li
            key={index}
            className="border p-4 rounded-md shadow-md"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleClient(client.title)}
            >
              <h3 className="text-lg font-semibold">{client.title}</h3>
              <span className="text-xl">
                {activeClient === client.title ? "-" : "+"}
              </span>
            </div>
            {activeClient === client.title && (
              <div className="mt-4">
                {client.image && (
                  <img
                    src={client.image}
                    alt={`${client.title} Logo`}
                    className="w-32 h-32 mb-4"
                  />
                )}
                <p className="text-gray-700">{client.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialClient;
