import React, { PureComponent } from "react";
import AsyncSelect from "react-select/async";
// import axios from "axios";

class CategoriesInput extends PureComponent {
  state = { selectedUser: [] };
  onChange = (selectedUser) => {
    this.setState({
      selectedUser: selectedUser || [],
    });
    console.log(this.state.selectedUser);
  };

  loadOptions = async (inputText, callback) => {
    const res = await fetch(
      `https://5fc48ee536bc790016343a0b.mockapi.io/categories?name=${inputText}`
    );
    const json = await res.json();
    callback(json.map((i) => ({ label: i.name, value: i.id })));
  };

  render() {
    return (
      <div>
        <AsyncSelect
          isMulti
          value={this.state.selectedUser}
          onChange={this.onChange}
          placeholder={"Input..."}
          loadOptions={this.loadOptions}
        />
      </div>
    );
  }
}

export default CategoriesInput;
