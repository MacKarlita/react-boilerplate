import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import DataGrid, { withLocalDataSource, withRemoteDataSource } from "tubular-react";
import { ColumnDataType, ColumnModel } from 'tubular-common';
import agent from 'superagent';

import localData from '../../data/localData';

const columns = [
    new ColumnModel("created_at", {Label: 'Created At', DataType: ColumnDataType.DATE_TIME}),
    new ColumnModel("humidity", {Label: 'Humidity', DataType: ColumnDataType.NUMERIC}),
    new ColumnModel("ground_humidity", {Label: 'Ground Humidity', DataType: ColumnDataType.NUMERIC}),
    new ColumnModel("temperature", {Label: 'Temperature', DataType: ColumnDataType.NUMERIC}),
    new ColumnModel("lighting", {Label: 'Lighthing', DataType: ColumnDataType.NUMERIC}),
];
let gridName = `myplant-${Math.random().toString(36)}`;

const apiUrl = "http://localhost:8080/monitor";

async function getData() {
    let data;
    try{
        data = await agent.get(apiUrl);
    }
    catch(err){
        console.log(err)
    }
    return data.body.data
}

async function loadData() {
    const data = await getData();
}


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
// const Monitor = withRemoteDataSource(TubularGrid, columns, apiUrl);

export default Monitor