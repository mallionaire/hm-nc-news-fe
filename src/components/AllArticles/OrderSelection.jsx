import React from "react";

const OrderSelection = (props) => {
  const { selectSort, sort_by } = props;

  return (
    <form>
      <p>Sort articles by: </p>
      <input
        type="radio"
        name="sort_by"
        value="created_at"
        checked={sort_by === "created_at"}
        // onClick={(event) => selectSort(event.target.value)}
        onChange={(event) => selectSort(event.target.value)}
      />
      Date
      <input
        type="radio"
        name="sort_by"
        value="comment_count"
        checked={sort_by === "comment_count"}
        // onClick={(event) => selectSort(event.target.value)}
        onChange={(event) => selectSort(event.target.value)}
      />
      Comment Count
      <input
        type="radio"
        name="sort_by"
        value="votes"
        checked={sort_by === "votes"}
        // onClick={(event) => selectSort(event.target.value)}
        onChange={(event) => selectSort(event.target.value)}
      />
      Votes
    </form>
  );
};

export default OrderSelection;

// make this a form and invoke the function to update parent state on handleSubmit()

// works with onClick but throws a weird react error becuase there;s no defaultChecked box...?
