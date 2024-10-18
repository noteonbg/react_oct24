import React, { useState } from 'react';

//Cross-Site Scripting (XSS)
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, input]);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: comment }} />
        ))}
      </div>
    </div>
  );
};

/*


import DOMPurify from 'dompurify';

...

<div>
  {comments.map((comment, index) => (
    <div key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment) }} />
  ))}
</div>


*/

export default CommentSection;
