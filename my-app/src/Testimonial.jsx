export default function Testimonial({ name, content, review, date }) {
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
        <h3>⭐Stars⭐: {review}</h3>
        <div>{content}</div>
      </div>
    );
  }
  