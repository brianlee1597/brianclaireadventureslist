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
} from "@/components/Container";

export default function Home() {
  return (
    <>
      <Banner />
      <PageContainer>
        <InnerContainer>
          <Title>Adventure List</Title>
          <InputContainer>
            <Icon />
            <Input type="text" placeholder="Enter text" />
            <Add>Add</Add>
          </InputContainer>
          <List>
            <Filters>
              <Active>
                <ActiveText>All</ActiveText>
                <ActiveText>Active</ActiveText>
                <ActiveText>Completed</ActiveText>
              </Active>
              <Select>
                <Option value="">All Locations</Option>
              </Select>
            </Filters>
            <div style={{ height: "300px" }}></div>
            <Bottom>
              <div>Hello</div>
            </Bottom>
          </List>
        </InnerContainer>
      </PageContainer>
    </>
  );
}
