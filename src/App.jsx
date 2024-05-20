import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RouterConfig from "./Navigation/RouterConfig";
import { LoaderPageWithoutBG } from "./assets";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoaderPageWithoutBG />}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
 