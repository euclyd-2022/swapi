const ListItem = ({ id, crawl, title }) => {
  // console.log(Object.keys(repos));

  return (
    <div>
      {!title ? (
        "Loading..."
      ) : (
        <article>
          <section className="animate">
            <h1 className="titlebar">
              Episode {id}
              <br />
              {title}
            </h1>
            {crawl}
          </section>
        </article>
      )}
    </div>
  );
};

export default ListItem;
