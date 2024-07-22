// components/MenuItemSelector.tsx
import React from "react";
import Select from "react-select";
import styles from "./menuItemSelector.module.css"; // Ensure correct import path

interface MenuItem {
  value: string;
  category: string;
  subcategory: string;
  name: string;
}

interface MenuItemSelectorProps {
  index: number;
  menuItem: string;
  groupedMenuItems: { [key: string]: { [key: string]: MenuItem[] } };
  handleItemChange: (index: number, field: string, value: any) => void;
}

// const customSingleValue = ({ data }: any) => (
//     <div className={styles.singleValue}>{data.label}</div>
//   );
  
  const customOption = (props: any) => (
    <div
      {...props.innerProps}
      className={`${styles.customOption} ${
        props.data.type === "category"
          ? styles.categoryOption
          : props.data.type === "subcategory"
          ? styles.subcategoryOption
          : styles.itemOption
      }`}
    >
      {props.data.label}
    </div>
  );

const MenuItemSelector: React.FC<MenuItemSelectorProps> = ({
  index,
  menuItem,
  groupedMenuItems,
  handleItemChange,
}) => {
  const options = Object.keys(groupedMenuItems).flatMap((category) => [
    { label: category, value: category, type: "category" },
    ...Object.keys(groupedMenuItems[category]).flatMap((subcategory) => [
      {
        label: subcategory,
        value: `${category}-${subcategory}`,
        type: "subcategory",
        category,
      },
      ...groupedMenuItems[category][subcategory].map((item) => ({
        label: item.name,
        value: item.value,
        type: "item",
        category,
        subcategory,
      })),
    ]),
  ]);

  return (
    <Select
    value={options.find((option) => option.value === menuItem)}
    onChange={(selectedOption) =>
      handleItemChange(index, "menuItem", selectedOption?.value || "")
    }
    options={options}
    placeholder="Select menu item"
    isClearable
    className={styles.control}
    styles={{
      control: (base) => ({
        ...base,
        minHeight: "40px",
        height: "40px",
        border: "1px solid #ddd",
        boxShadow: "none",
        overflow: 'hidden',
        boxSizing: 'border-box',
      }),
      menu: (base) => ({
        ...base,
        zIndex: 100,
        overflow: 'auto',
        boxSizing: 'border-box',
      }),
      singleValue: (base) => ({
        ...base,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
      option: (base) => ({
        ...base,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
    }}
  />
  );
};

export default MenuItemSelector;
