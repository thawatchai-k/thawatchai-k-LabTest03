import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Item {
  id: number;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  music: boolean;
  birthday: string;
  infoUrl: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id) {
    throw new Response("Missing item ID", { status: 400 });
  }

  const response = await fetch(`http://localhost:5000/api/jav/${params.id}`);

  if (!response.ok) {
    throw new Response("Item Not Found", { status: 404 });
  }

  const item: Item = await response.json();
  return json({ item });
};

export default function WebJavDetail() {
  const { item } = useLoaderData<{ item: Item }>();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">{item.name}</h1>
      <p className="text-lg text-center text-gray-600">{item.category}</p>
      <img src={item.imageUrl} alt={item.name} className="mx-auto rounded-lg w-64 h-64 object-cover" />
      <p className="mt-4 text-center">{item.description}</p>
      <p className="text-center mt-2">Music: {item.music}</p>
      <p className="text-center mt-2">Birthday: {new Date(item.birthday).toLocaleDateString()}</p>
      <div className="mt-6 text-center">
        <a href={item.infoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          More Info
        </a>
        <a href="/jav" className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Back
        </a>
      </div>
    </div>
  );
}
