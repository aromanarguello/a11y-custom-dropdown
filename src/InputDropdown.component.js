import React from "react";
import Downshift from "downshift";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 400px;
`;

const Menu = styled.ul`
  border: 1px solid #d3d3d3;
  width: 118px;
  display: flex;
  padding: 0;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  bottom: 16px;
`;

const Item = styled.li`
  display: inline;
  list-style: none;
  margin: 3px 0;
  width: 100%;
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
        getRootProps,
        clearSelection,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <Container {...getRootProps()}>
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
        </Container>
      )}
    </Downshift>
  );
};
export { Dropdown };
