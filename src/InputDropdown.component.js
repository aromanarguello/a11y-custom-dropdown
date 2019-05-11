import React from "react";
import Downshift from "downshift";

const dropdownItems = [
  { value: "Alex" },
  { value: "Rob" },
  { value: "Tom" },
  { value: "Alba" },
  { value: "Lux" },
  { value: "Maria" }
];

const Dropdown = () => {
  return (
    <Downshift
      onChange={selection => alert(`You selected ${selection.value}`)}
      itemToString={item => (item ? item.value : "")}
    >
      {({ getInputProps, getMenuProps, getItemProps, isOpen }) => (
        <div>
          <input {...getInputProps()} />
          {isOpen ? (
            <ul {...getMenuProps()}>
              {dropdownItems.map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.value,
                    index,
                    item
                  })}
                >
                  {item.value}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};
export { Dropdown };
