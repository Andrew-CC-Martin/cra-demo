import './App.css';
import React from 'react';
import styled from 'styled-components'

const StyledArticle = styled.article`
  border: 1px solid black;
`

const blogPosts = [
  {
    id: 1,
    title: "Where is my mind?",
    body: "Waaay out in the water. See it swimming."
  },
  {
    id: 2,
    title: "How much wood could that wood chuck really chuck?",
    body: "The woodchuck could only chuck as much wood as it had a drive to chuck. Note that the early woodchuck could only chuck on average half of what it desired to chuck."
  },
  {
    id: 3,
    title: "Bee Movie",
    body: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway"
  },
  {
    id: 5,
    title: "",
    body: ""
  },
]

const BlogPost = ({ title, body }) => (
  <StyledArticle>
    <h3>{title}</h3>
    <p>{body}</p>
  </StyledArticle>
)

const App = () => (
  <>
    <h2>Blog posts:</h2>
    {blogPosts.map(({ title, body, id }) => <BlogPost key={id} title={title} body={body} /> )}
  </>
)

export default App;
