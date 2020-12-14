import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import axios from "axios";

//components
import PageLayout from "../../common/PageLayout";

// import NavTag from "../../components/NavigationBar/NavTag";
// import SearchBar from "../../components/SearchBar";
import CategoriesGridView from "../../components/CategoriesGridView";

function CategoryList() {
  // const [categories, setCategories] = useState(null);
  // const [keyword, setKeyword] = useState("");
  // const [key, setKey] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get(
  //       `https://5fc48ee536bc790016343a0b.mockapi.io/categories?search=${key}&page=1&limit=4`
  //     );
  //     console.log(res.data);
  //     setCategories(res.data);
  //   })();
  // }, [key]);

  // const handleChangeSearch = (e) => {
  //   setKeyword(e.target.value);
  // };
  // const handleSearch = () => {
  //   setKey(keyword);
  // };

  return (
    <PageLayout /*outsideContainer={<NavTag />*/>
      <CategoriesGridView />
    </PageLayout>
  );
}

export default CategoryList;
