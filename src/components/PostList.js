import React, { Component } from 'react';
import Post from './Post';


class PostList extends Component {
 state={
   posts: [
     {
       id: 1,
       author: {
         name: 'NodeJS',
         avatar: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
       },
       date:'04 Jun 2019',
       content: 'Pessoal alguém conhece alguém para utilizar minhas APIS ?',
       comments: [
         {
           id: 1,
           author: {
             name: 'ReactJS',
             avatar: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
           },
           content:'Opa estou disponível!'
         }
       ]
     },
     {
      id: 2,
      author: {
        name: 'ReactJS',
        avatar: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      date:'04 Jun 2019',
      content: 'Estou precisando de um parceiro para criar um app mobile. Alguém ?',
      comments: [
        {
          id: 2,
          author: {
            name: 'React Native',
            avatar: 'http://ninjadolinux.com.br/wp-content/uploads/2019/07/react-native-workshop-1024x538.jpg',
          },
          content:'Vem de inbox! Tenho a experiência necessária para isso.'
        }
      ]
    },

    {
      id: 3,
      author: {
        name: 'VsCode',
        avatar: 'https://code.visualstudio.com/assets/updates/1_35/logo-stable.png',
      },
      date:'04 Jun 2019',
      content: 'Estou afim de criar um grupo de devs, quem quer participar ?',
      comments: [
        {
          id: 3,
          author: {
            name: 'React Native',
            avatar: 'http://ninjadolinux.com.br/wp-content/uploads/2019/07/react-native-workshop-1024x538.jpg',
          },
          content:'Eu!'
        },
        {
          id: 3,
          author: {
            name: 'ReactJS',
            avatar: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          },
          content:'Dentro.'
        },
        {
          id: 3,
          author: {
            name: 'NodeJS',
            avatar: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
          },
          content:'Tenho interesse.'
        },
        
      ]
    }
   ]
 };


  render(){
    const { posts } = this.state;
    return(
     
     <div className="postlist">
      
       {posts.map(post => (
         <Post key={post.id} {...post}/>
       ))}
     </div> 
    
    );
  }
}

export default PostList;