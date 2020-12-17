// import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
// import TaskList from "../TaskList";
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
  const [task, setTask] = useState([]);
  // const [tasks, setTasks] = useState();

// const {
//   id,
//   text,
//   tags,
//   dateCreated,
//   isCompleted
// } = task;

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

  // const [checked, setChecked] = useState(false)
const [checked1, setChecked1] = useState(false)
const [checked2, setChecked2] = useState(false)
const [checked3, setChecked3] = useState(false)
const [checked4, setChecked4] = useState(false)
const [checked5, setChecked5] = useState(false)
const [checked6, setChecked6] = useState(false)
const [checked7, setChecked7] = useState(false)
const [checked8, setChecked8] = useState(false)
const [checked9, setChecked9] = useState(false)
const [checked10, setChecked10] = useState(false)
const [checked11, setChecked11] = useState(false)
const [checked12, setChecked12] = useState(false)
const [checked13, setChecked13] = useState(false)
const [checked14, setChecked14] = useState(false)
const [checked15, setChecked15] = useState(false)

  function handleChkBoxChange(event) {
    let value = (event.target) = event.target.value;

    // if (value )
    // setChecked(!checked)

    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
      
    // }

    if (!tagnamesToAdd.includes(value)) {
      tagnamesToAdd.push(value)
    } else {
      let toRemoveIndex = tagnamesToAdd.indexOf(value);
      tagnamesToAdd.splice(toRemoveIndex, 1);
    }
    console.log(tagnamesToAdd)
  }

//   const checkSet5 = (e) => {
//     setChecked5(e.target.checked);
//   }
// {/* <Checkbox value={check1}  /> */}

const clearForm = () => {
  setTask(emptyTask);
  setInputtedTasktext('');
  setTagnames([]);
  setChecked1(false);
  setChecked2(false);
  setChecked3(false);
  setChecked4(false);
  setChecked6(false);
  setChecked7(false);
  setChecked8(false);
  setChecked9(false);
  setChecked10(false);
  setChecked11(false);
  setChecked12(false);
  setChecked13(false);
  setChecked14(false);
  setChecked15(false);
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
          <legend>Which Life Components will this affect?</legend>  
          
          <label htmlFor="happinessInput">General Happiness:   </label>
          <input
            type="checkbox"
            id="happinessInput"
            value="General Happiness"
            onInput={handleChkBoxChange}
            checked={checked1}
            onChange={e => setChecked1(e.target.checked)}
            />
            
          <label htmlFor="Finances">Finances: </label> 
            <input 
            type="checkbox"
            id="Finances"
            value="Finances"
            onInput={handleChkBoxChange}
            // checked={checked}
            checked={checked2}
            onChange={e => setChecked2(e.target.checked)}
          />
          
          <label htmlFor="Career">Career: </label>
            <input 
            type="checkbox" 
            id="Career" 
            value="Career" 
            onInput={handleChkBoxChange}
            checked={checked3}
            onChange={e => setChecked3(e.target.checked)}
            />
            
          <label htmlFor="Love Life">Love Life: </label>          
          <input 
            type="checkbox" 
            id="loveLife" 
            value="Love Life"
            onInput={handleChkBoxChange}
            checked={checked4}
            onChange={e => setChecked4(e.target.checked)}
            />
              
          <label htmlFor="Family">Family: </label>        
          <input 
            type="checkbox"
            id="Family"
            value="Family"
            onInput={handleChkBoxChange}
            checked={checked5}
            onChange={e => setChecked5(e.target.checked)}
            />
              
          <label htmlFor="Friends">Friends: </label>        
          <input 
            type="checkbox" 
            id="Friends" 
            value="Friends" 
            checked={checked6}
            onInput={handleChkBoxChange}
            onChange={e => setChecked6(e.target.checked)}
            />
            
          <label htmlFor="Fun and Recreation">Fun and Recreation:  </label>        
          <input 
            type="checkbox" 
            id="funAndRecreation" 
            value="Fun and Recreation" 
            checked={checked7}
            onInput={handleChkBoxChange}
            onChange={e => setChecked7(e.target.checked)}

            />
          
          <label htmlFor="Physical Health">Physical Health: </label>         
          <input 
            type="checkbox" 
            id="physicalHealth" 
            value="Physical Health" 
            checked={checked8}
            onInput={handleChkBoxChange}
            onChange={e => setChecked8(e.target.checked)}

            />
          
          <label htmlFor="Mental Health">Mental Health: </label>        
          <input 
            type="checkbox" 
            id="mentalHealth" 
            value="Mental Health" 
            checked={checked9}
            onInput={handleChkBoxChange}
            onChange={e => setChecked9(e.target.checked)}

            />
          
          <label htmlFor="Contribution to Society">Contribution to Society: </label>        
          <input 
            type="checkbox" 
            id="contributionToSociety" 
            value="Contribution to Society" 
            checked={checked10}
            onInput={handleChkBoxChange}
            onChange={e => setChecked10(e.target.checked)}
            />
          
          <label htmlFor="Self Worth">Self Worth: </label>        
          <input 
            type="checkbox" 
            id="SelfWorth" 
            value="Self Worth" 
            checked={checked11}
            onInput={handleChkBoxChange}
            onChange={e => setChecked11(e.target.checked)}
            />
          
          <label htmlFor="Personal Development">Personal Development: </label>         
          <input 
            type="checkbox" 
            id="personalDevelopment" 
            value="Personal Development"
            checked={checked12}
            onInput={handleChkBoxChange}
            onChange={e => setChecked12(e.target.checked)}
          />
          
          <label htmlFor="Physical Environment">Physical Environment: </label>         
          <input 
            type="checkbox" 
            id="physicalEnvironment" 
            value="Physical Environment" 
            checked={checked13}
            onInput={handleChkBoxChange}
            onChange={e => setChecked13(e.target.checked)}
            />
          
          <label htmlFor="Purpose">Purpose: </label>        
          <input 
            type="checkbox" 
            id="Purpose" 
            value="Purpose" 
            checked={checked14}
            onInput={handleChkBoxChange}
            onChange={e => setChecked14(e.target.checked)}
          /> 
          
          <label htmlFor="Spirituality">Spirituality: </label> 
          <input 
            type="checkbox" 
            id="Spirituality" 
            value="Spirituality" 
            checked={checked15}
            onInput={handleChkBoxChange}
            onChange={e => setChecked15(e.target.checked)}
          />
          
        </fieldset>      
      <button type="submit" className={`${styles.submitButton}`}>Submit</button>
    </form>
    </>
  );

};

export default TaskInput;
