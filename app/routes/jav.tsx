import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Item {
  id: number;
  category: string;
  name: string;
  infoUrl: string;
  birthday: string;
  age: boolean;
  music: boolean;
  imageUrl: string;
  description: string;
}

export const loader: LoaderFunction = async () => {
  const response = await fetch("http://localhost:5000/api/jav");

  if (!response.ok) {
    throw new Response("Failed to fetch items", { status: 500 });
  }

  const items: Item[] = await response.json();
  return json({ items });
};

export default function JavList() {
  const { items } = useLoaderData<{ items: Item[] }>();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">🔥 JAV Artist List 🔥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-lg bg-yellow-300 hover:shadow-2xl transition-all">
            <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold mt-4 text-black">{item.name}</h3>
            <p className="text-gray-700">{item.category}</p>
            <p className="text-gray-700">Birthday: {new Date(item.birthday).toLocaleDateString()}</p>
            <p className="text-gray-700">Age: {item.age}</p>
            <p className="text-gray-700">Music: {item.music}</p>
            <div className="mt-4">
              <a href={`/webjav/${item.id}`} className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
