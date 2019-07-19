import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import DataGrid, { withLocalDataSource, withRemoteDataSource } from "tubular-react";
import { ColumnModel } from 'tubular-common';

import localData from '../../data/localData';
const columns = [
    new ColumnModel("name", {Label: 'Planta'}),
    new ColumnModel("ground_humidicy", {Label: 'Humedad Tierra'}),
    new ColumnModel("env_humidicy", {Label: 'Humedad Ambiente'}),
    new ColumnModel("temperature", {Label: 'Temperatura'}),
    new ColumnModel("luminosity", {Label: 'Luminosidad'}),
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

const Monitor = withLocalDataSource(TubularGrid, columns, localData);

export default Monitor