import React from "react";

const Post = (props) =>{
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200} height={150} alt="" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={()=>props.update(props.data)}>Update</button>
                <button className="remove" onClick={()=>props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;