import React, {useContext, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import { Context } from '../context/BlogContext';
import FormComponent from '../components/FormComponent';

const EditScreen = ({ navigation }) => {
    const { state, editBlogs } = useContext(Context);

    const id = navigation.getParam('id');

    const blogPost = state.find(
        blogPost =>  blogPost.id === id
    );
    
  
    return (
        <View>
            <FormComponent 
            initialValues = {{ title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                editBlogs(title, content, id, () => navigation.pop());
            }}
            />
            </View>
    );
}

export default EditScreen;