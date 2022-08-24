import { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import themes from "./themes";

import { useAppDispatch, useAppSelector } from "./redux/store";
import { setTheme } from "./redux/interface/interface.actions";
import { selectThemeMode } from "./redux/interface/interface.selector";

import { Routes, Route } from "react-router-dom";

// Pages
import HomepagePage from "./routes/homepage/homepage.component";
import NavigationPage from "./routes/navigation/navigation.component";
import CollectionsPage from "./routes/collections/collections.component";
import CollectionPage from "./routes/collection/collection.component";

// Components
import Footer from "./components/footer/footer.component";

function App() {
  const themeMode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  useEffect(() => {
    dispatch(setTheme(window.localStorage.getItem("theme") ?? "light"));
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      window.localStorage.setItem("theme", themeMode);
    }
  }, [themeMode]);

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ThemeProvider theme={themeMode === "light" ? themes.light : themes.dark}>
        <Routes>
          <Route path='/' element={<NavigationPage />}>
            <Route index element={<HomepagePage />} />
            <Route path='/collections' element={<CollectionsPage />} />
            <Route path='/collection/:id' element={<CollectionPage />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
