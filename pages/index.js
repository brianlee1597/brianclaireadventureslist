import useSWR, { mutate } from "swr";
import { useRef } from "react";
import axios from "axios"; 
import { useSetState } from "react-use";
import { Grid, Text, Box, Input, Stack, Flex, Heading, Button, Divider, InputGroup, InputRightAddon, Link } from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import CBALHeading from "../components/main/heading";

const getTodos = "api/get_todos";
const fetcher = (string) => fetch(string).then(r => r.json());

export default function Home() {
  const { data, error } = useSWR(getTodos, fetcher);

  const [state, setState] = useSetState({});

  const todoRef = useRef();

  const addTodo = async () => {
    if (!todoRef.current) return;

    if (todoRef.current.value.length === 0) {
      alert("can't add nothing");
      return;
    }

    try {
      await axios.post("/api/add_todo", {
        name: todoRef.current.value,
      });
    } catch (e) {
      alert("please check if the restaurant is a duplicate");
    }

    mutate(getTodos);
    todoRef.current.value = "";
  }

  const deleteTodo = async (name) => {
    try {
      await axios.post("/api/delete_todo", {
        name
      });
    } catch (e) {
      alert("please try again");
    }

    mutate(getTodos);
  }

  const getDetails = async (name) => {
    try {
      const { data } = await axios.post("/api/get_todo_details", {
        name,
      });

      alert(JSON.stringify(data, null, 2));
    } catch (e) {
      alert("please try again");
    }

    mutate(getTodos);
  }

  const addMapsUrl = async (name, url) => {
    if (!url || url.length == 0) {
      alert("can't add nothing");
      return;
    }

    try {
      await axios.post("/api/add_maps", {
        name, url
      }) 
    } catch (e) {
      alert("something went wrong, please try again");
    }

    mutate(getTodos);
   }

  const updateState = (url, i) => {
    setState({ [i]: url });
  }

  if (error || !data) return <></>;

  const ToDo = (a, i) => {
    return (
      <Stack 
      // onClick={() => getDetails(a.name)}
      cursor="pointer"
      position="relative"
      borderRadius="md"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
      direction='row' h='100px' minH="100px" p={4} bg="#ffffff">
        <Grid 
        placeItems="center"
        width="50px" height="auto">||</Grid>
        <Divider orientation='vertical' />
        <Flex direction="column" justifyContent="space-evenly">
          <Text paddingLeft="0.35em">{a.name}</Text>
          {a.url ? (
            <Link 
            paddingLeft="0.35em"
            fontSize="0.9em"
            color="gray.600"
            href={a.url} isExternal>
            {a.url} <ExternalLinkIcon ml="2px" mb="3px"/>
            </Link>
          ) :
          <InputGroup size="sm">
            <Input 
            onChange={(e) => updateState(e.target.value, i)}
            min-width="250px" max-width="300px" width="300px" 
            fontSize="smaller" placeholder="add google maps link"/>
            <InputRightAddon 
            onClick={() => addMapsUrl(a.name, state[i])}
            >Add</InputRightAddon>
          </InputGroup>}
        </Flex>
        <CloseIcon 
        onClick={() => deleteTodo(a.name)}            
        cursor="pointer"
        position="absolute" 
        right="3em" top="43px"/>
      </Stack>
    )
  }

  return (
    <Flex direction="column" width="100%">
      <CBALHeading/>
      <Grid templateColumns="3fr 2fr" columnGap="2em">
        <Flex 
          direction="column"
          gap="4em"
          backgroundColor="#f0f1f3"
          minHeight="40em"
          height="40em"
          padding="2em"
          borderRadius="0.72em"
          width="100%">
          <Grid templateColumns="4fr 2fr" columnGap="2em">
            <Input 
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
            placeholder="input restaurant name here..!"
            variant="filled"
            bg="#ffffff"
            _hover={{ bg: '#ffffff' }}
            ref={todoRef}/>
            <Button 
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
            backgroundColor="#ffb878" color="#3e3761" width="100%" 
            _hover={{ bg: '#ffb878' }}
            onClick={addTodo}>add</Button>
          </Grid>
          <Stack direction="column" gap="0.75em" height="30em" overflowY="scroll">
            {data.todos.map((a, i) => (
              <Stack 
              key={i}
              // onClick={() => getDetails(a.name)}
              cursor="pointer"
              position="relative"
              borderRadius="md"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
              direction='row' h='100px' minH="100px" p={4} bg="#ffffff">
                <Grid 
                placeItems="center"
                width="50px" height="auto">||</Grid>
                <Divider orientation='vertical' />
                <Flex paddingLeft="0.35em" direction="column" justifyContent="space-evenly">
                  <Text paddingLeft="0.35em">{a.name}</Text>
                  {a.url ? (
                    <Link 
                    paddingLeft="0.35em"
                    fontSize="0.9em"
                    color="gray.600"
                    href={a.url} isExternal>
                    {a.url} <ExternalLinkIcon ml="2px" mb="3px"/>
                    </Link>
                  ) :
                  <InputGroup size="sm">
                    <Input 
                    onChange={(e) => updateState(e.target.value, i)}
                    min-width="250px" max-width="300px" width="300px" 
                    fontSize="smaller" placeholder="add google maps link"/>
                    <InputRightAddon 
                    onClick={() => addMapsUrl(a.name, state[i])}
                    >Add</InputRightAddon>
                  </InputGroup>}
                </Flex>
                <CloseIcon 
                onClick={() => deleteTodo(a.name)}            
                cursor="pointer"
                position="absolute" 
                right="3em" top="43px"/>
              </Stack>
            ))}
          </Stack>
        </Flex>
        <Box          
          backgroundColor="#f0f1f3"
          minHeight="40em"
          height="40em"
          padding="2em"
          borderRadius="0.72em"
          width="100%">

        </Box>
      </Grid>
    </Flex>
  )
}
