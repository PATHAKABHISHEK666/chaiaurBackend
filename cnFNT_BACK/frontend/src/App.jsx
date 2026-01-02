import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-10 text-white">
      {/* Header */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-cyan-400 to-purple-500
                     animate-pulse"
      >
        FUTURE JOKES
      </h1>

      <p className="text-slate-300 mb-10">
        Total jokes: <span className="text-cyan-400">{jokes.length}</span>
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jokes.map((joke, index) => (
          <div
            key={joke.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="relative group rounded-2xl p-[1px] 
                       bg-gradient-to-r from-cyan-400 to-purple-600
                       animate-fade-in"
          >
            {/* Card */}
            <div
              className="h-full rounded-2xl bg-[#0b0b1f]/90 backdrop-blur-xl p-6
                         hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]
                         transition-all duration-500"
            >
              {/* Neon line */}
              <div
                className="h-1 w-12 bg-cyan-400 rounded-full mb-4 
                              group-hover:w-20 transition-all duration-300"
              ></div>

              <h2 className="text-xl font-semibold text-white mb-3">
                {joke.name}
              </h2>

              <p className="text-slate-300 leading-relaxed">{joke.joke}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
