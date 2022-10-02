export default function createPost({name, country, photo, text}) {
    const styling = {
      border: "1px solid black",
      margin: "10px 10vw",
      padding: "10px 0",
    };
    return (
      <div style={styling}>
        <h2>
          {name}: {date}
        </h2>
        <h3>Post: {post}</h3>
        <div>{content}</div>
      </div>
    );
}