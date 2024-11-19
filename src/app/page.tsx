import ProgressIndicator from "../components/ProgressIndicator";
import StarRating from "../components/StarRating";
import ExperienceRating from "../components/ExperienceCard";
import Checklist from "../components/Checklist";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
     
      <header className="w-full flex justify-center items-center py-4">
        <h1 className="text-3xl font-bold text-white mt-10">Feedback UI</h1>
      </header>

     
      <main className="flex-grow flex justify-center">
        <div className="grid grid-cols-2 gap-8 p-8 mt-14">
          {/* First Column */}
          <div className="flex flex-col space-y-8">
            <ProgressIndicator />
            <ExperienceRating />
          </div>

          <div className="flex flex-col space-y-8">
            <StarRating />
            <Checklist />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
