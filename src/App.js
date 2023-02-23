import logo from "./logo.svg";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetLimitedDataQuery,
  useDeleteDataByIdMutation,
  useAddNewPostMutation,
  useUpdatePostMutation,
} from "./services/post";

import "./App.css";

function App() {
  // const [ updatePost, myData ] = useUpdatePostMutation();
  // console.log(updatePost, "qqq");
  // console.log(myData, "qqq");
  // const [ deleteDataById, deleteRes] = useDeleteDataByIdMutation();
  // const [ addNewPost, myData ] = useAddNewPostMutation();
  // console.log(addNewPost, "xxxxxxxxxxxxxxx")
  // console.log(myData, "AAAAAAAAAAAAAAAAxxxxxxxxx")
  // console.log(deleteRes);
  // const limitedResponse = useGetLimitedDataQuery(2);
  // const myResponse = useGetAllPostQuery();
  // const myResponseById = useGetPostByIdQuery(99);
  // console.log(deleteRes, "aaaaaaaaaaaaa");

  // console.log("response object", myData);
  // console.log("Data", myData.data);
  // console.log("success", myData.isSuccess);
  // console.log(myResponse, "hurreeyyyyssssssssss")


  // if (myResponse.isLoading) return <h1> L O D D I N G . . . </h1>;
  // if (myResponse.isError) return <h2>Error : {myResponse.error.error}</h2>;

  // const thisPost = {
  //   id: 1,
  //   title: "Thisn is Updated post",
  //   body: "created for Updated PPPPPPPPPPP purpose only",
  //   userId: 1,
  // }

  return (
    <div className="App">

       {/* Update */}

      {/* <>
      <h1> Updating a post by RTK query </h1>
      <button onClick={() => {updatePost(thisPost)}}>Update</button>
      </> */}


      {/* CREATE */}

      {/* <>
      <h1> Adding new post RTK Query</h1>
      <button onClick={() => {addNewPost(thisPost)}}>Add Post</button>
      </> */}


      {/* DELETE  */}

      {/* <>
        <h1>bdcjkhb</h1>
        <button onClick= {()=>{deleteDataById(2)}}>Delete</button>
      </> */}


      {/* READ data by id  */}

      {/* <div>
        <h1>{myResponseById.data.id}</h1>
        <h1> Title: {myResponseById.data.title}</h1>
        <p> body: {myResponseById.data.body}</p>
      </div> */}


      {/* READ data by limit  */}

      {/* {
        limitedResponse.data.map(( limited, i ) => (
          <div key={i}>
            <h1>{limited.id}</h1>
            <h3>{limited.title}</h3>
            <p>{limited.body}</p>
            </div>
        ))
      } */}

      
    </div>
  );
}

export default App;
