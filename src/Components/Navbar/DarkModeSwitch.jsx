import {
  useColorMode,
  IconButton,
  Tooltip,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeSwitch = ({ bgColor }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navColor = {
    light: "gray.200",
    dark: "gray.700",
  };

  const handleClick = () => {
    toggleColorMode();
  };

  const iconColor = {
    light: "black",
    dark: "white",
  };
  return (
    <>
      <Button
        leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        color={iconColor[colorMode]}
        bg={bgColor}
        onClick={handleClick}
        display={["none", "initial"]}
      >
        {useColorModeValue("Dark Mode", "Light Mode")}
      </Button>
      <IconButton
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={handleClick}
        color={iconColor[colorMode]}
        bg={bgColor}
        display={["initial", "none"]}
      />
    </>
  );
};

export default DarkModeSwitch;
