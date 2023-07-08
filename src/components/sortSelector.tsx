import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const sortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metaCritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton marginTop={4} as={Button} rightIcon={<BsChevronDown />}>
          Order by : {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {/* <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Platforms
              <MenuList>
                {data.map((platform) => (
                  <MenuItem
                    key={platform.id}
                    onClick={() => onSelectedPlatform(platform)}
                  >
                    {platform.name}
                  </MenuItem>
                ))}
              </MenuList>
            </MenuButton>
          </Menu> */}
    </>
  );
};

export default sortSelector;
