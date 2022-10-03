import "./styles.css";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
// import { axiosApi } from "./utility/Axios";
import axios from "axios";

export default function App() {
  const endpoint = "https://swapi.dev/api/films";

  // const [count, setCount] = useState(0);
  const [myList, setList] = useState(["Loading..."]);

  // const handleClick = () => {
  //   console.log(count);
  //   setCount(count + 1);
  // };

  // console.log("before useEffect"); logs 1st

  useEffect(() => {
    let mounted = true;

    //fetch(endpoint)
    // .then((res) => res.json())
    axios.get(endpoint).then((repos) => {
      console.log(repos.data);
      if (mounted) {
        // object error if do not specify .results
        setList(repos.data.results);
      }
    });
    return () => (mounted = false);
    // console.log("render"); asynchronus logs 3rd
  }, []);

  // console.log("after useEffect"); logs 2nd

  return (
    <div className="App">
      <main>
        {myList.map((item) => (
          <ListItem
            key={item.episode_id}
            title={item.title}
            crawl={item.opening_crawl}
            id={item.episode_id}
          />
        ))}
      </main>
    </div>
  );
}
