import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import ListHeader from '../components/ListHeader';
import useTask from '../hooks/usetask';


const screenheight = Dimensions.get("screen").height

const HomeScreen =()=>  {
   const {addTask,updateadd,editTask,deleteTask,task,tasks,addNew}= useTask()

  return (
    <SafeAreaView style={{marginHorizontal:20,}}>
     {
        addNew && (
        <><View>
                      <TextInput
                          onChangeText={editTask}
                          placeholder='Agregar nueva tarea'
                          style={styles.input}
                          value={task}
                      >
                      </TextInput>
                  </View><View style={{ marginVertical: 10, flexDirection: "row" }}>
                          <TouchableOpacity style={[styles.button, styles.acceptButton]}
                          onPress ={addTask}>
                        
                              <Text style={[styles.ButtonText]}>
                                  Agregar
                              </Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={[styles.button, styles.CanceltButton]}
                          onPress = {()=> updateadd(false)}>
                              <Text style={[styles.ButtonText]}>
                                  Cancelar
                              </Text>
                          </TouchableOpacity>
                      </View></>
         )
     }
     <View>
        <FlatList
        ItemSeparatorComponent={() => <View style= {{marginVertical:4,}}/>}
        ListHeaderComponent={()=> <ListHeader/> }
            data = {tasks}
            keyExtractor={(item) => item}
            renderItem={({item,index})=> <TaskItem task = { item } index ={ index } onPress={() => deleteTask(index)} />}/>
     
     </View>
      <StatusBar style="auto" />
       
       

        <View style={styles.addButtonlocation}>
        <TouchableOpacity style= {styles.addButton}
        onPress ={()=> updateadd(true)}
        >
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create( {
    addButton: {
        backgroundColor: "#264248",
        height: 60,
        width:60,
        borderRadius: 30 ,
        alignItems:"center",
        justifyContent:"center"

    },
    addButtonlocation:{
        position:"absolute",
        top:screenheight -120,
        right: 10
    },
    addButtonText: {
        fontSize:35,
        color: "white",
        fontWeight: "bold"
    },
    acceptButton:{
        backgroundColor: "green"

    },
    button:{
        alignSelf: "flex-start",
        borderRadius: 10,
        padding: 10
    },
    ButtonText:{
        fontSize:20,
        color: "white"
    },
    CanceltButton:{
        backgroundColor: "red",
        marginLeft:15,
    },
    input:{
       backgroundColor:"#dedede",
       borderRadius: 10,
       padding: 10, 
    }
    
    })
export default HomeScreen