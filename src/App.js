import React, { useContext, useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AppContext } from "./AppContext";

import UILayout from "./Components/UILayout";
import ThreeJSModule from "./Modules/ThreeJSModule";


function App() {
  const canvasContainerRef = useRef()

  const {
    appData,
    setThreeJSModule
  } = useContext(AppContext)


  useEffect(() => {
    const _threeJSModule = new ThreeJSModule({
      appData,
      canvasContainer: canvasContainerRef.current,
    })

    setThreeJSModule(_threeJSModule)

    return () => {
      if (_threeJSModule) {
        _threeJSModule.stop()
      }
    };


  }, [])

  return (
    <>
      <UILayout />
      <Box
        ref={canvasContainerRef}
        sx={{
          cursor: "grab",
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
          // backgroundColor: "#848484",
          position: "relative",

        }}
      >
      </Box>
    </>

  );
}

export default App;
