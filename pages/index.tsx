import type { NextPage } from "next";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { SAMPLE_CARDS } from "../constants";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">ALX Listing App</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_CARDS.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <Button label="Load More Listings" onClick={() => alert("Loading more...")} />
      </footer>
    </div>
  );
};

export default Home;
