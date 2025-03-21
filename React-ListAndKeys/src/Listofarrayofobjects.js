/* const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
]; */
// title  hr desc

function Listofarrayofobjects(props) {
    console.log("Postdata object:", props)
    /* 
    {postdata: Array(2)}: {id: 1, title: 'Hello World', content: 'Welcome to learning React!'}
    1: {id: 2, title: 'Installation', content: 'You can install React from npm.'}length: 2*/
    console.log("Inside props:", props.postdata)  // we get array of object
    const arrayOfPost = props.postdata;

    // 1st function to display title
    const PostTitle = (
        <ul>
            { arrayOfPost.map((post) => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )
    const PostDescription = (
        <ul>
            { arrayOfPost.map((post) => 
                <li key={post.id}> {post.content} </li>
            )}
        </ul>
    )
    return (
        <>
           <h3> {PostTitle} </h3>
           <hr></hr>
           <p> {PostDescription} </p>

        </>
    )
}

export default Listofarrayofobjects;