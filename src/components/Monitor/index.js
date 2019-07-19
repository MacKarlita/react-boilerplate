import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import DataGrid, { withLocalDataSource, withRemoteDataSource } from "tubular-react";
import { ColumnModel } from 'tubular-common';

import localData from '../../data/localData';
const columns = [
    new ColumnModel("created_at", {Label: 'Created At'}),
    new ColumnModel("humidity", {Label: 'Humidity'}),
    new ColumnModel("ground_humidity", {Label: 'Ground Humidity'}),
    new ColumnModel("temperature", {Label: 'Temperature'}),
    new ColumnModel("lighting", {Label: 'Lighthing'}),
];
let gridName = `myplant-${Math.random()}`


class TubularGrid extends React.Component {

    render() {
        return (
            <div>
                <DataGrid gridName={{gridName}}/>
            </div>
        )
    }
}

const Monitor = withLocalDataSource(TubularGrid, columns, localData);

export default Monitor