import React, { useState } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ selectedColor }) => selectedColor};
`;

const ColorBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 10px;
`;

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleButtonClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <AppWrapper selectedColor={selectedColor}>
      <ColorBox>
        <ButtonWrapper>
          <button onClick={handleButtonClick}>Select Color</button>
        </ButtonWrapper>
        {showColorPicker && (
          <ChromePicker color={selectedColor} onChange={handleColorChange} />
        )}
      </ColorBox>
    </AppWrapper>
  );
};

export default App;
