import React from "react";
// import { faker } from '@faker-js/faker';
class Comments extends React.Component {
constructor(props) {
 super();

 this.state = {
  items: [],
  DataisLoaded: false
 };
}
  
componentDidMount() {
 fetch (
  "https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((json) => {
   this.setState({
    items: json,
    DataisLoaded: true 
   });
  })
}

 
//  componentDidMount2() {
//   fetch (
//     "https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((json) => {
//       this.setState({
//         items:json,
//         DataisLoaded: true

//       });
//     })
  
//  }
 render() {
  const {DataisLoaded, items} = this.state;
  if(!DataisLoaded) return <div>
   <h1> Please wait...</h1> </div>;
  
  return (
   <div className = "Comments"> 
    <h1>Comments</h1> {
    items.map((item) => (
    
    // selectId(),
       <ol key = {item.id}>
        
    
      {item.email} <br />
      {item.body}<br />
     
    

     </ol>
    ))
 }
   </div>
  );

 }
}
export default Comments;