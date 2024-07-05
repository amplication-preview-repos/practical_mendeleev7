import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PartList } from "./part/PartList";
import { PartCreate } from "./part/PartCreate";
import { PartEdit } from "./part/PartEdit";
import { PartShow } from "./part/PartShow";
import { SkuList } from "./sku/SkuList";
import { SkuCreate } from "./sku/SkuCreate";
import { SkuEdit } from "./sku/SkuEdit";
import { SkuShow } from "./sku/SkuShow";
import { ManufactureList } from "./manufacture/ManufactureList";
import { ManufactureCreate } from "./manufacture/ManufactureCreate";
import { ManufactureEdit } from "./manufacture/ManufactureEdit";
import { ManufactureShow } from "./manufacture/ManufactureShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventoryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Part"
          list={PartList}
          edit={PartEdit}
          create={PartCreate}
          show={PartShow}
        />
        <Resource
          name="Sku"
          list={SkuList}
          edit={SkuEdit}
          create={SkuCreate}
          show={SkuShow}
        />
        <Resource
          name="Manufacture"
          list={ManufactureList}
          edit={ManufactureEdit}
          create={ManufactureCreate}
          show={ManufactureShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
