import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import FormComponent from '../components/FormComponent';

const CreateScreen = ({ navigation }) => {
       
        const { addBlogs } = useContext(Context);
        return (
            <FormComponent 
            onSubmit={(title, content) => {
                addBlogs(title, content, () => navigation.navigate('Index'));
            }}
            />
        );
}

export default CreateScreen;