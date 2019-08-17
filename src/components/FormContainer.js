import React, { useState } from "react";
import Input from "./Input";
import Counter from "./Counter";
import { increment, decrement } from "../actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const FormContainer = () => {
    const [ seoTitle, setSeoTitle ] = useState("");

    const count = useSelector(state => state.counterReducer.count);

    const dispatch = useDispatch();
    const incrementCallback = () => dispatch(increment());
    const decrementCallback = () => dispatch(decrement());

    return (
      <form id="article-form">
        <Input
          text="SEO title "
          label="seo_title"
          type="text"
          id="seo_title"
          value={seoTitle}
          handleChange={(e) => setSeoTitle(e.target.value)}
        />
        <Counter
            count={count}
            increment = {incrementCallback}
            decrement = {decrementCallback}
        />
      </form>
    );
}

export default FormContainer;
