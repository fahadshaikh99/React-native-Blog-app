import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const FormComponent = ({ onSubmit, initialValues }) => {

    const [title, setTitle ] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return(
        <View style={{ marginHorizontal: 5}}>

            <Text style={styles.TextLabel}>
               Enter Title
            </Text>
            <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            style={styles.InputText}
            />
           
            <Text style={styles.TextLabel}>
               Enter Content
            </Text>

           <TextInput
           value={content}
           onChangeText={text => setContent(text)}
           style={styles.InputText}
           />

           <Button
           title="Save Blog post"
           onPress={() => onSubmit(title, content)}
           />
        </View>
    );
}

FormComponent.defaultProps ={
    initialValues: {
        title: '',
        content: ''
    }
};

const styles= {
    InputText: {
        fontSize: 25,
        borderColor: 'black',
        borderWidth: 1
    },
    TextLabel: {
        fontSize: 30,
        fontWeight: 'bold'
    }

};

export default FormComponent;