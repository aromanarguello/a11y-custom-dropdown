import React from "react";
import Downshift from "downshift";
import styled from "styled-components";

const Menu = styled.ul`
  border: 1px solid black;
  width: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
`;

const Item = styled.li`
  display: inline;
  list-style: none;
  padding: 0;
  margin: 0;
`;

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
    <Downshift itemToString={item => (item ? item.value : "")}>
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        getToggleButtonProps,
        clearSelection,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          <h1>Auto Complete Example</h1>
          <input {...getInputProps()} />
          <button {...getToggleButtonProps()}>
            {isOpen ? "close" : "open"}
          </button>
          {selectedItem ? (
            <button onClick={clearSelection}>clear</button>
          ) : null}
          {isOpen ? (
            <Menu {...getMenuProps()}>
              {dropdownItems
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <Item
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          index === highlightedIndex ? "gray" : null
                      }
                    })}
                  >
                    {item.value}
                  </Item>
                ))}
            </Menu>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};
export { Dropdown };
