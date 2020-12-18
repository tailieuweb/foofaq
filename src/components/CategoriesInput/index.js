import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import axios from "axios";

// import { pagCategories,getQuestionForCate } from "../../helpers";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CategoriesInput({listCategories, setTextCate, arr}){

// const [cagtegories,setCategories]=useState([]);
// const [textCate,setTextCate] = useState([]);
// const [question,setQuestion] = useState([]);

// //get categories 
// useEffect(()=>{
//     (async () => {
//         const result = await pagCategories();
//         setCategories(result);
//       })();
// },[])

// //get question để lấy id cuối 
// useEffect(()=>{
//     (async () => {
//         const result = await getQuestionForCate();
//         setQuestion(result);
//       })();
// },[])

// //lấy id cuối
// const [idTest,setIdTest]=useState([]);
//   useEffect(()=>{
//     question.map((q)=>{
//         console.log(q.id);
//      setIdTest(q);
//     }) 
//   },[question])
//   const [id,setId]=useState(null);
// useEffect(()=>{
//     setId(parseInt(idTest.id)+1);
// // id +1 ;
// },[idTest])
// console.log(id);
// console.log(idTest);
// setIdR(Number(idTest) +1);
 //post categories với id +1 
 // post question rồi post cateogries
// const handleAuto =()=>{
//     textCate.map((tx)=>{
//         axios
//         .post(`https://5fc48ee536bc790016343a0b.mockapi.io/questions/${id}/categories`, {
//             questionId: id,
//             name: tx.name
//         })
//     })
// }

return (
    <>
    <Autocomplete
    onChange={(event,value) => setTextCate(value)}
    multiple
    // defaultValue = {[]}
    id="checkboxes-tags-demo"
    // options = mảng
    options={listCategories}
    disableCloseOnSelect
    getOptionLabel={(option) => option.name}
    renderOption={(option, { selected }) => (
      <React.Fragment>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
        />
        {option.name}
      </React.Fragment>
    )}
    style={{ width: 500 }}
    renderInput={(params) => (
      <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
    )}
  /> 
  </>
)
}
export default CategoriesInput;