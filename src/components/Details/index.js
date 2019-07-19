import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import DataGrid, { withRemoteDataSource } from "tubular-react";
import { ColumnModel } from 'tubular-common';


const columns = [
  new ColumnModel("Plant"),
  new ColumnModel("GroundH"),
  new ColumnModel("Temperature")
];



class LocalDataGrid extends React.Component {

    render() {
        return (
            <div>
                <DataGrid gridName="myplant"/>
            </div>
        )
    }
}
const localData = [
  {
    Plant: "Sábila",
    GroundH: 100,
    Temperature: 60
  }
]


const url = "https://tubular.azurewebsites.net/api/orders/paged";
const detailsMock = "../../mocks/details.ts"
const Details = withRemoteDataSource(LocalDataGrid, columns, localData);

export default Details