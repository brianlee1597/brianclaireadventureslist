import ListItem from "@/firebase/models/listItem";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 16em;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1;
`;

const Banner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 16em;
  // background: linear-gradient(
  //   90deg,
  //   rgba(0, 255, 237, 1) 0%,
  //   rgba(0, 84, 255, 1) 100%
  // );

  background-image: url("images/banner.jpeg");
  background-size: cover;
  background-position: center;

  z-index: 0;

  display: grid;
  place-items: center;
  padding: 0 1em;
`;

const PageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 1em;

  display: grid;
  place-items: center;

  z-index: 2;
`;

const InnerContainer = styled.div`
  font-family: "Montserrat", sans-serif;

  margin-top: 7.5em;
  width: 100%;
  max-width: 54em;
  display: flex;
  flex-direction: column;

  z-index: 3;
`;

const Title = styled.text`
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: white;
  margin-bottom: 1em;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1em;
`;

const Input = styled.input`
  padding-left: calc(2em + 30px);
  height: 3rem;
  width: 100%;
  border: none;
  border-radius: 0.4em;
  font-size: 1rem;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #fdfd96;
  }
`;

const Search = styled.input`
  width: fit-content;
  padding: 0.5em;
  font-size: 12px;
  font-weigh: 400;
  color: #777777;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 1em; /* Adjust the left position as needed */
  top: 50%;
  transform: translateY(-50%);
  background-image: url('images/plus.svg'); /* Replace with your icon path */
  background-repeat: no-repeat;
  background-size: 30px; /* Adjust the size of the icon */
  width: 30px; /* Adjust the width of the icon container */
  height: 30px; /* Adjust the height of the icon container */
}`;

const Add = styled.button`
  position: absolute;
  right: 1em; /* Adjust the left position as needed */
  top: 50%;
  transform: translateY(-50%);
  padding: 4px 16px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1em;
  letter-spacing: 1px;
  outline: none;
  border: 2px solid #9bddff;
  background: white;
  color: #9bddff;
  border-radius: 50px;
  cursor: pointer;

  transition-duration: 0.25s;

  &:hover {
    background: #9bddff;
    color: white;
  }
`;

const List = styled.div`
  z-index: 4;
  width: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 0.4em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  padding: 0 1rem;
  margin-bottom: 7.5em;
`;

const Filters = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 2px solid #eaeaed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5em 0 0.725em;

  @media all and (max-width: 768px) {
    height: 6rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 4rem;
  border-top: 2px solid #eaeaed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding: 0 1em;
`;

const Active = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const ActiveText = styled.text`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: #aaabb9;
`;

const Select = styled.select`
  width: fit-content;
  padding: 0.5em;
  font-size: 12px;
  font-weigh: 400;
  color: #777777;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  background-color: #fff;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  /* Additional styles for options if needed */
`;

const ListContainer = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Item = styled.div<{ status: Partial<ListItem> }>`
  width: 100%;
  height: 50px;
  padding: 1em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: any) =>
    props.status === 1 ? "#fafafa" : "#fff"};
  border-radius: 0.5em;

  box-shadow: ${(props: any) =>
    props.status === 1 ? "none" : "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"};

  @media all and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1em;
    height: fit-content;
    align-items: inherit;
  }
`;

const ItemsLeft = styled.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #aaabb9;
`;

const ItemInput = styled.text`
  position: relative;
`;

const ItemLogo = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-image: url('images/todo.png'); /* Replace with your icon path */
  background-repeat: no-repeat;
  background-size: 25px; /* Adjust the size of the icon */
  width: 25px; /* Adjust the width of the icon container */
  height: 25px; /* Adjust the height of the icon container */
}`;

const ItemText = styled.text`
  padding-left: calc(1em + 25px);
  font-size: 1em;
  color: #2d2d2d;
  font-weight: 500;
  letter-spacing: 1px;
`;

const ItemOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  width: fit-content;
`;

const Complete = styled.text<{ status: Partial<ListItem> }>`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: #aaabb9;
  border-bottom: 1px solid transparent;

  transition-duration: 0.25s;

  &:hover {
    border-bottom: 1px solid
      ${(props: any) => (props.status === 0 ? "#aaabb9;" : "transparent")};
  }
`;

const Remove = styled.text`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: #ff5733;

  border-bottom: 1px solid transparent;

  transition-duration: 0.25s;

  &:hover {
    border-bottom: 1px solid #ff5733;
  }
`;

export {
  Banner,
  PageContainer,
  InnerContainer,
  InputContainer,
  Input,
  Icon,
  Title,
  List,
  Filters,
  Add,
  Active,
  ActiveText,
  Bottom,
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
};
