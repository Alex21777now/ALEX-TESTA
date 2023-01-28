import React, { Component } from "react";


const Create = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [author, setAuthor] = React.useState('mario');

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <br/>
      <br/>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <br/>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br/>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="chto-to krutoe">chto-to krutoe</option>
        </select>
        <br/>
        <br/>
        <button>Add Blog</button>
        <br/>
        <br/>
        <div>{title}</div>
        <div>{body}</div>
        <div>{author}</div>
      </form>
    </div>
  );
}

export default Create;
