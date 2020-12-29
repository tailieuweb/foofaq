import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import React from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CategoriesInput({ listCategories, setTextCate, arr }) {
  
  return (
    <>
      <Autocomplete
        onChange={(event, value) => setTextCate(value)}
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
          <TextField
            {...params}
            variant="outlined"
            label="Checkboxes"
            placeholder="Favorites"
          />
        )}
      />
    </>
  );
}
export default CategoriesInput;