import React, {useState, useEffect} from 'react'

function App(){
  const {data, setData} = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>(member)</p>
        ))
      )}
      <h1>
        Hello
      </h1>
    </div>
  )
}

export default App

/*
class Post extends React.Component {
  render() {
    return (
      <div class="post__preview">
            <input class="post__title" type="text"></input>
            <textarea class="post__body"></textarea>
        </div>
    );
      */