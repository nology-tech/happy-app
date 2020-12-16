import React, { useState } from "react";
import TaskList from "../TaskList";
import styles from "./TaskInput.module.scss";
// import lifeComponents from "../../data/lifeComponents";

const emptyTask = {
  id: "",
  text: "",
  dateCreated: "",
  tags: [],
  duedate: "",
  isCompleted: false
};

let tagnamesToAdd = [];


const TaskInput = ({addTaskToDatabase}) => {

const [inputtedTasktext, setInputtedTasktext] = useState("");
const [idCount, setIdCount] = useState(1);
const [tagnames, setTagnames] = useState([]);


// const [allChecked, setAllChecked] = useState(false);
// const [isChecked, setIsChecked] = useState();
  const [task, setTask] = useState([emptyTask]);
  // const [tasks, setTasks] = useState();

const {
  id,
  text,
  tags,
  dateCreated,
  isCompleted
} = task;

  const handleChange = (e) => {
    const name = e.target.name;
    setTagnames(tagnamesToAdd)
    setInputtedTasktext(e.target.value);
    setTask({
      ...task,
      id: idCount,
      dateCreated: new Date().toUTCString(),
      [name]: e.target.value,
      tags: tagnames,
      isCompleted: false
});
};

const handleSubmit = (e) => {
  e.preventDefault();
  setTagnames(tagnamesToAdd)
  setIdCount(idCount + 1);
  setTask({
    id: idCount,
    dateCreated: new Date().toUTCString(),
    text: inputtedTasktext,
    tags: tagnames,
    isCompleted: false
  });
  console.log(task);
  addTaskToDatabase(task);
  clearForm();
};

  const [checked, setChecked] = useState(false)


  function handleChkBoxChange(event) {
    let value = (event.target) = event.target.value;

    // if (value )
    // setChecked(!checked)

    if (!tagnamesToAdd.includes(value)) {
      tagnamesToAdd.push(value)
    } else {
      let toRemoveIndex = tagnamesToAdd.indexOf(value);
      tagnamesToAdd.splice(toRemoveIndex, 1);
    }
    console.log(tagnamesToAdd)
  }


const clearForm = () => {
  setTask(emptyTask);
  setInputtedTasktext('')
  setTagnames([])
  setChecked(false)
};

  return (
    <>
      <form className={styles.taskInput} onSubmit={handleSubmit} action="">
      
        <input 
        className={styles.input} 
        type="text" 
        name="text" 
        onChange={handleChange}
        placeholder="Set task here..." 
        id="textInput"
        value={inputtedTasktext}
        required
        />
        <fieldset className={styles.tagFieldset}>      
          <legend>Which Life Components will this Task cover?</legend>  
          
          <label htmlFor="happinessInput">General Happiness:   </label>
          <input
            type="checkbox"
            id="happinessInput"
            value="General Happiness"
            onInput={handleChkBoxChange}
            defaultChecked={checked}
            />
            
          <label htmlFor="Finances">Finances: </label> 
            <input 
            type="checkbox"
            id="Finances"
            value="Finances"
            onInput={handleChkBoxChange}
            defaultChecked={checked}
          />
          
          <label htmlFor="Career">Career: </label>
            <input 
            type="checkbox" 
            id="Career" 
            value="Career" 
            onInput={handleChkBoxChange}
            defaultChecked={checked}
            />
            
          <label htmlFor="Love Life">Love Life: </label>          
          <input 
            type="checkbox" 
            id="loveLife" 
            value="Love Life"
            onInput={handleChkBoxChange}
            />
              
          <label htmlFor="Family">Family: </label>        
          <input 
            type="checkbox" 
            id="Family" 
            value="Family" 
            onInput={handleChkBoxChange}
            />
              
          <label htmlFor="Friends">Friends: </label>        
          <input 
            type="checkbox" 
            id="Friends" 
            value="Friends" 
            onInput={handleChkBoxChange}
            />
            
          <label htmlFor="Fun and Recreation">Fun and Recreation:  </label>        
          <input 
            type="checkbox" 
            id="funAndRecreation" 
            value="Fun and Recreation" 
            onInput={handleChkBoxChange}
            />
          
          <label htmlFor="Physical Health">Physical Health: </label>         
          <input 
            type="checkbox" 
            id="physicalHealth" 
            value="Physical Health" 
            onInput={handleChkBoxChange}
            />
          
          <label htmlFor="Mental Health">Mental Health: </label>        
          <input 
            type="checkbox" 
            id="mentalHealth" 
            value="Mental Health" 
            onInput={handleChkBoxChange}
            />
          
          <label htmlFor="Contribution to Society">Contribution to Society: </label>        
          <input 
            type="checkbox" 
            id="contributionToSociety" 
            value="Contribution to Society" 
            onInput={handleChkBoxChange}
            />
          
          <label htmlFor="Self Worth">Self Worth: </label>        
          <input 
            type="checkbox" 
            id="SelfWorth" 
            value="Self Worth" 
            onInput={handleChkBoxChange}
            />
          
          <label htmlFor="Personal Development">Personal Development: </label>         
          <input 
            type="checkbox" 
            id="personalDevelopment" 
            value="Personal Development" 
            onInput={handleChkBoxChange}
          />
          
          <label htmlFor="Physical Environment">Physical Environment: </label>         
          <input 
            type="checkbox" 
            id="physicalEnvironment" 
            value="Physical Environment" 
            onInput={handleChkBoxChange}
            />
          
          <label htmlFor="Purpose">Purpose: </label>        
          <input 
            type="checkbox" 
            id="Purpose" 
            value="Purpose" 
            onInput={handleChkBoxChange}
          /> 
          
          <label htmlFor="Spirituality">Spirituality: </label> 
          <input 
            type="checkbox" 
            id="Spirituality" 
            value="Spirituality" 
            onInput={handleChkBoxChange}
          />
          
        </fieldset>      
      <button type="submit" className={`${styles.submitButton}`}>Submit</button>
    </form>
    </>
  );

};

export default TaskInput;
