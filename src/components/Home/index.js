import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Users from "../Users/Users.js";
import Banner from "../Banners/Home";
import Products from "../Products/Products";
import { getProducts } from "../../redux/actions/products";
import { unsetErr } from "../../redux/actions/errors.js";
import { SET_ACTIVE_CATEGORY } from "../../redux/constants/index.js";

const Home = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [bidProducts, setBidProducts] = React.useState({});
  const activeCategory = useSelector((state) => state.app.activeCategory);

  React.useEffect(() => {
    let cat;
    if (activeCategory.name !== "All") {
      cat = { category: activeCategory?.slug };
    }
    dispatch(getProducts(cat));
    dispatch({
      type: SET_ACTIVE_CATEGORY,
      payload: { name: activeCategory?.name },
    });
    return () => {
      dispatch(unsetErr());
      window.scroll(0, 0);
    };
  }, []);
  React.useEffect(() => {
    setBidProducts(app);
  }, [dispatch, app]);

  const updateProducts = React.useCallback((query, type, refresh) => {
    dispatch(getProducts(query, type));
    if (refresh) {
      dispatch({
        type: SET_ACTIVE_CATEGORY,
        payload: { name: "All" },
      });
    }
  }, []);

  const updateActiveCategory = React.useCallback((name, slug) => {
    dispatch({
      type: SET_ACTIVE_CATEGORY,
      payload: { name, slug },
    });
  }, []);

  return (
    <>
      <Banner />

      <Products
        updateProducts={updateProducts}
        updateActiveCategory={updateActiveCategory}
        bidProducts={bidProducts}
      />
    </>
  );
};

export default Home;
