import {
  Banner,
  InnerContainer,
  InputContainer,
  Input,
  Icon,
  List,
  PageContainer,
  Title,
  Filters,
  Bottom,
  Add,
  Active,
  ActiveText,
  Select,
  Option,
  ListContainer,
  Item,
  Search,
  Overlay,
  ItemsLeft,
  ItemInput,
  ItemLogo,
  ItemText,
  ItemOptionContainer,
  Complete,
  Remove,
} from "@/components/styled";
import addObject from "@/firebase/functions/addObject";
import createItem from "@/firebase/functions/createItem";
import getItems from "@/firebase/functions/getItems";
import removeItem from "@/firebase/functions/removeItem";
import setComplete from "@/firebase/functions/setComplete";
import ListItem from "@/firebase/models/listItem";
import { useEffect, useRef, useState } from "react";

export async function getServerSideProps() {
  const items = await getItems();
  const set = new Set();

  items.forEach((item: ListItem) => {
    if (!item.location) return;
    set.add(item.location);
  });

  const locations = [...set];

  return {
    props: {
      items,
      locations,
    },
  };
}

export default function Home(props: any) {
  const [active, setActive] = useState("all");
  const [allItems, setAllItems] = useState(props.items);
  const [items, setItems] = useState(props.items);
  const inputRef: any = useRef<HTMLInputElement>(null);

  const addItem = async () => {
    if (!inputRef?.current?.value) return;

    const item = createItem(inputRef.current.value);
    const { result, error } = await addObject("items", item);

    if (error) {
      alert(error);
    } else {
      const newItems = await getItems();

      switch (active) {
        case "all":
          setItems(newItems);
          break;
        case "active":
          setItems(newItems.filter((item: ListItem) => item.status === 0));
          break;
        case "complete":
          setItems(newItems.filter((item: ListItem) => item.status === 1));
      }

      setAllItems(newItems);
      inputRef.current.value = null;
    }
  };

  const updateItems = (val: string) => {
    switch (active) {
      case "all":
        setItems(allItems.filter((item: ListItem) => item.input.includes(val)));
        break;
      case "active":
        setItems(
          allItems.filter(
            (item: ListItem) => item.status === 0 && item.input.includes(val)
          )
        );
        break;
      case "complete":
        setItems(
          allItems.filter(
            (item: ListItem) => item.status === 1 && item.input.includes(val)
          )
        );
    }
  };

  const setCompleteItem = async (item: ListItem) => {
    await setComplete(item);
    const newItems = await getItems();

    switch (active) {
      case "all":
        setItems(newItems);
        break;
      case "active":
        setItems(newItems.filter((item: ListItem) => item.status === 0));
        break;
      case "complete":
        setItems(newItems.filter((item: ListItem) => item.status === 1));
    }

    setAllItems(newItems);
  };

  const removeListItem = async (item: ListItem) => {
    await removeItem(item);

    const newItems = await getItems();

    switch (active) {
      case "all":
        setItems(newItems);
        break;
      case "active":
        setItems(newItems.filter((item: ListItem) => item.status === 0));
        break;
      case "complete":
        setItems(newItems.filter((item: ListItem) => item.status === 1));
    }

    setAllItems(newItems);
  };

  useEffect(() => {
    if (!active || !items) return;

    switch (active) {
      case "all":
        setItems(allItems);
        break;
      case "active":
        setItems(allItems.filter((item: ListItem) => item.status === 0));
        break;
      case "complete":
        setItems(allItems.filter((item: ListItem) => item.status === 1));
    }
  }, [active]);

  if (!items) return <></>;

  return (
    <>
      <Overlay />
      <Banner />
      <PageContainer>
        <InnerContainer>
          <Title>Adventure List</Title>
          <InputContainer>
            <Icon />
            <Input
              type="text"
              placeholder="Add New Item"
              ref={inputRef}
              onKeyUp={(e: any) => e.code === "Enter" && addItem()}
            />
            <Add onClick={addItem}>Add</Add>
          </InputContainer>
          <List>
            <Filters>
              <Active>
                <ActiveText
                  onClick={() => setActive("all")}
                  style={{ color: active === "all" ? "#2d2d2d" : "#aaabb9" }}
                >
                  All
                </ActiveText>
                <ActiveText
                  onClick={() => setActive("active")}
                  style={{ color: active === "active" ? "#2d2d2d" : "#aaabb9" }}
                >
                  Active
                </ActiveText>
                <ActiveText
                  onClick={() => setActive("complete")}
                  style={{
                    color: active === "complete" ? "#2d2d2d" : "#aaabb9",
                  }}
                >
                  Done
                </ActiveText>
              </Active>
              <Search
                type="text"
                placeholder="Search..."
                onChange={(e: any) => updateItems(e.target.value)}
              />
              {/* <Select>
                <Option value="">All Locations</Option>
                {props.locations.map((location: string, i: number) => (
                  <Option key={i} value={location}>
                    {location}
                  </Option>
                ))}
              </Select> */}
            </Filters>
            <ListContainer>
              {items.map((item: any, i: number) => (
                <Item key={i} status={item.status}>
                  <ItemInput>
                    <ItemLogo />
                    <ItemText>{item.input}</ItemText>
                  </ItemInput>
                  <ItemOptionContainer>
                    <Complete
                      status={item.status}
                      onClick={() => item.status === 0 && setCompleteItem(item)}
                    >
                      {item.status === 0 ? "Mark as Complete" : "Completed"}
                    </Complete>
                    <Remove onClick={() => removeListItem(item)}>Remove</Remove>
                  </ItemOptionContainer>
                </Item>
              ))}
            </ListContainer>
            <Bottom>
              <ItemsLeft>{items.length} items</ItemsLeft>
            </Bottom>
          </List>
        </InnerContainer>
      </PageContainer>
    </>
  );
}
