import createDataContext from './createDataContext';
import Jsonserver from '../api/Jsonserver';



const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts': 
        return action.payload;
        case 'edit_blog': 
        return state.map(blogPost => {
            return blogPost.id === action.payload.id ? action.payload : blogPost;
        });
        case 'delete_blog':
        return state.filter((blogPost) => blogPost.id !== action.payload);


        case 'add_blogpost':
         return [...state, 
            {   
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }
            ];
        default:
         return state;

    }
};

const addBlogs = dispatch => {
       
    return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: {title: title, content: content }});
    callback();
    };
};


const deleteblogs = dispatch => {
    return id => {
        dispatch({ type: 'delete_blog' , payload: id});
    };
};

const editBlogs = dispatch => {
    return (title, content, id, callback) => {
        dispatch({ type: 'edit_blog' , payload: {title, content, id }
    }
    );
    callback();
    };
};

const getBlogPost = dispatch => {
    return async () => {
        const response = await Jsonserver.get('./blogposts');
        dispatch({ type: 'get_blogposts', payload: response.data});
    };
};

export const {Context, Provider} = createDataContext(blogReducer, { addBlogs, deleteblogs, editBlogs, getBlogPost}, 
    []);