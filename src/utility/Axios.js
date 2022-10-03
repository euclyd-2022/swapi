const endpoint = "https://swapi.dev/api/films";
useEffect(() => {
  let mounted = true;

  axios.get(endpoint).then((repos) => {
    console.log(repos.data);
    if (mounted) {
      setList(repos.data.results);
    }
  });
  return () => (mounted = false);
}, []);
