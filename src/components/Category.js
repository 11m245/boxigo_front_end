function Category({ category }) {
  return (
    <>
      <div className="category-wrapper">
        <h6 className="category-head row-title">{category.displayName}</h6>
        <div className="items-wrapper d-flex flex-column gap-1">
          {category.items.map((itemObj) => (
            <Item key={itemObj.id} itemObj={itemObj} />
          ))}
        </div>
      </div>
    </>
  );
}

function Item({ itemObj }) {
  return (
    <>
      <div className="item-wrapper d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column gap-0">
          <p className="m-0">{itemObj.displayName}</p>
          <p style={{ fontSize: "14px" }} className="m-0 fw-bold">
            &nbsp;
            {itemObj.meta.selectType === "none"
              ? null
              : itemObj.meta.selectType}
          </p>
          {/* <p>{itemObj.meta.selectType}</p> */}
        </div>
        <p className="m-0 fw-bold">{itemObj.qty}</p>
      </div>
    </>
  );
}

export { Category };
