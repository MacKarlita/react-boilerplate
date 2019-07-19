import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import DataGrid, { withRemoteDataSource } from "tubular-react";
import { ColumnModel } from 'tubular-common';


const columns = [
  new ColumnModel("OrderID"),
  new ColumnModel("CustomerName"),
  new ColumnModel("ShipperCity")
];



class TubularGrid extends React.Component {

    render() {
        return (
            <div>
                <DataGrid gridName="myplant"/>
            </div>
        )
    }
}

const Monitor = withRemoteDataSource(TubularGrid, columns, "https://tubular.azurewebsites.net/api/orders/paged");

export default Monitor