import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList,  Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather} from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    
    const {state, deleteblogs, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost();
    }, []);

    
    return(
        <View style={{ marginBottom: 60 }}>
            
                <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Show', { id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.Text}>
                                {item.title} - {item.id}
                            </Text>
                            
                            <View>
                            <TouchableOpacity onPress={()=> deleteblogs(item.id)}>
                            <Feather style={styles.icon} name="trash"/>
                            </TouchableOpacity>
                            </View>
                        
                        </View>
                        </TouchableOpacity>
                    );
                }}
                
                />
           
        </View>
    );
}


IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: 
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
        </TouchableOpacity>
    };
};

const styles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 20,
        boderColor: 'gray',
        borderBottomWidth: 1,
    
        
    
    },
    Text : {
        fontSize: 20
    },
    icon: {
        fontSize: 27
    }
};

export default IndexScreen;