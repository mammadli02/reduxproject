import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGroup } from "../../store/slice/colorSlice";
import { useNavigate } from "react-router-dom";
import { FormGroup } from '@mui/material';
import Input from '@mui/material/Input';
import Container from 'react-bootstrap/Container';
const Create = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [color, setColor] = useState({
    colorName: "",
    colorCode: "",
  });
  const [groupName, setGroupName] = useState("");
  const [colorList, setColorList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor({ ...color, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { colorName, colorCode } = color;
    let newColor = {
      colorName,
      colorCode,
    };
    if (
      colorName === "" ||
      colorName.trim() === "" ||
      colorCode === "" ||
      colorCode.trim() === ""
    ) {
      return;
    }
    if (colorList.length === 6) {
      return;
    }
    let newColorList = colorList;
    newColorList = [...newColorList, newColor];
    setColorList(newColorList);
    color.colorName=""
    color.colorCode=""
  };
  const handleGroupChange = (e) => {
    setGroupName(e.target.value);
  };
  const handleAddGroup = () => {
    if (groupName === "") {
      return;
    }
    const group = {
      name: groupName,
      colorList,
    };

    dispatch(addGroup(group));
    setColorList([]);
    navigate("/")
  }; 

  return (
    <Container >
     <h1>Create page</h1>
      <form onSubmit={handleSubmit}>
        <div style={{width:"50%"}}>
   
      <FormGroup>
          <Input
            onChange={handleChange}
            name="colorName"
            value={color.colorName}
            type="text"
            placeholder="Color name"
          />
       
          <Input
            onChange={handleChange}
            name="colorCode"
            value={color.colorCode}
            type="text"
            placeholder="Color code"
          />
       
        <button   disabled={color.colorName===""||color.colorCode===""}> Add color</button>
        </FormGroup>



</div>




       <FormGroup>
       <div style={{display:"flex"}}>
        {colorList?.map((item, i) => {
          const { colorName, colorCode } = item;
          return (
            <div style={{ background: colorCode , width:"100px", height:"100px", padding:"10px", border:"1px solid black"}} key={i}>
              {colorName}
            </div>
          );
        })}
      </div>
<div style={{marginTop:"50px"}}>



      <input  
          onChange={handleGroupChange}
          value={groupName}
          name="groupName"
          type="text"
          placeholder="Group name"
        />
        <button   onClick={handleAddGroup} disabled={colorList.length < 6}>
          Save
        </button>
</div>
       </FormGroup>
      </form>
    </Container>
  );
};

export default Create;
