/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect, Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Categories } from "./assets/ConfigRoutes";
import i18n from "./i18n";
import { colors } from "./theme/theme";

const FAQSettingsPage = lazy(() => import("./pages/FAQSettingsPage"));
const AboutSettingsPage = lazy(() => import("./pages/AboutSettingsPage"));
const Error404 = lazy(() => import("./pages/Error404"));

const PageFallback = () => (
  <Center h="50vh">
    <Spinner color={colors.primary} size="xl" />
  </Center>
);

function App() {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferred_language");
    if (!storedLanguage) {
      i18n.changeLanguage("el");
      localStorage.setItem("preferred_language", "el");
    } else {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const internalCategories = Categories.filter(
    ({ hide, isExternal }) => !hide && !isExternal
  );

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          {internalCategories.map((category) => {
            const PageComponent = category.pageComponent;
            return (
              <Route
                path={category.route}
                element={<PageComponent />}
                key={category.route}
              />
            );
          })}
          <Route path="/faq" element={<FAQSettingsPage />} />
          <Route path="/about" element={<AboutSettingsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
