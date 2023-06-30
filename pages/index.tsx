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
} from "@/components/styled";
import addObject from "@/firebase/functions/addObject";
import createItem from "@/firebase/functions/createItem";
import getItems from "@/firebase/functions/getItems";
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
  const inputRef: any = useRef(null);

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
      <Banner />
      <PageContainer>
        <InnerContainer>
          <Title>Adventure List</Title>
          <InputContainer>
            <Icon />
            <Input type="text" placeholder="Enter text" ref={inputRef} />
            <Add onClick={addItem}>Add</Add>
          </InputContainer>
          <List>
            <Filters>
              <Active>
                <ActiveText
                  onClick={() => setActive("all")}
                  style={{ color: active === "all" ? "blue" : "#aaabb9" }}
                >
                  All
                </ActiveText>
                <ActiveText
                  onClick={() => setActive("active")}
                  style={{ color: active === "active" ? "blue" : "#aaabb9" }}
                >
                  Active
                </ActiveText>
                <ActiveText
                  onClick={() => setActive("complete")}
                  style={{ color: active === "complete" ? "blue" : "#aaabb9" }}
                >
                  Done
                </ActiveText>
              </Active>
              <Select>
                <Option value="">All Locations</Option>
                {props.locations.map((location: string, i: number) => (
                  <Option key={i} value={location}>
                    {location}
                  </Option>
                ))}
              </Select>
            </Filters>
            <ListContainer>
              {items.map((item: any, i: number) => (
                <Item key={i} status={item.status}>
                  {item.input}
                </Item>
              ))}
            </ListContainer>
            <Bottom>
              <div>Hello</div>
            </Bottom>
          </List>
        </InnerContainer>
      </PageContainer>
    </>
  );
}
