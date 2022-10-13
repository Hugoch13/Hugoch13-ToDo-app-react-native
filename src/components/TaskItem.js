import React from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";

const TaskItem =({task, onPress}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity style ={styles.button}
            onPress ={onPress}/>
            <Text style = {styles.text}>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
button: {
    backgroundColor:"white",
    height:30,
    width:30,
    borderRadius:15,
},
container: {
    alignItems:"center",
    backgroundColor: "#212121",
    flexDirection:"row",
    padding: 10,
    borderRadius: 10,
  
},
text:{
    color:"white",
    marginLeft:13
}

})

export default TaskItem