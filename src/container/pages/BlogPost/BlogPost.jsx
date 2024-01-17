import React, { Component, Fragment } from "react";
import "./BlogPost.css"
import Post from "../../../component/Post/post";
import axios from "axios";

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost:{
            id :1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = ()=>{
        axios.get('http://localhost:3007/posts')
        .then((result)=> {
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data)=>{
        console.log(data)
        axios.delete(`http://localhost:3007/posts/${data}`).then((res)=>{
            this.getPostAPI();
        })
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json =>{
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostAPI();
    }

    handleFromChange = (event) =>{
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, ()=> {
            console.log('value obj formBlogPost:', this.state.formBlogPost)
        })
        // console.log('form change',event.target.value)
    }

    postDataAPI = ()=>{
        axios.post('http://localhost:3007/posts',this.state.formBlogPost).then((res)=>{
            console.log(res);
            this.setState({
                formBlogPost:{
                    id :1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        }, (err)=>{
            console.log("error : ",err);
        })
    }

    putDataToAPI = () =>{
        axios.put(`http://localhost:3007/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res)=>{
            console.log(res)
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost:{
                    id :1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
    }

    handleSubmit = () =>{
       if(this.state.isUpdate){
        this.putDataToAPI();
       }else{
        this.postDataAPI();
       }
    }
    
    handleUpdate = (data) =>{
        console.log(data);
       this.setState({
            formBlogPost: data,
            isUpdate: true
       })
    }

    render(){
        return(
            <Fragment>
                <p>Blog Post</p>
                    <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Titel</label>
                    <input type="text" name="title" onChange={this.handleFromChange} value={this.state.formBlogPost.title} />
                    <label htmlFor="body">Blog content</label>
                    <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFromChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post=>{
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;