import styled from "styled-components";

const Banner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 16em;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 237, 1) 0%,
    rgba(0, 84, 255, 1) 100%
  );

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

  z-index: 1;
`;

const InnerContainer = styled.div`
  font-family: "Montserrat", sans-serif;

  margin-top: 7.5em;
  width: 100%;
  max-width: 54em;
  display: flex;
  flex-direction: column;

  z-index: 2;
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
    outline: 2px solid blue;
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
`;

const Option = styled.option`
  /* Additional styles for options if needed */
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
};
