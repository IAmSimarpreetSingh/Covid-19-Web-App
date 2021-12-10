import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';
import './MainStyle.css';
import TextField from '@mui/material/TextField';


const loaderCSS = css`

    display: flex;
    margin: 20% 40%;

`

const Main = () => {

    const [data, setdata] = useState();

    const [country, setCountry] = useState('');

    const getCovidData = async (term) => {
        console.log(term)
        const res = await fetch('https://corona.lmao.ninja/v2/countries/');
        const resData = await res.json();
        setdata(resData);
    };


    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <TextField
                className="searchField"
                label="Search Country"
                type="search"
                variant="filled"
                onChange={(event) => {
                    setCountry(event.target.value)
                }}
                sx={{ marginLeft: '3%' }}
            />
            <div style={{ marginTop: '5%', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <TableContainer className='reportTable' component={Paper} sx={{ width: '100%', padding: '0.2%' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='country' sx={{ color: '#fff' }}>Country</TableCell>
                                <TableCell className='tCases' align="right" sx={{ color: '#fff' }}>Total cases</TableCell>
                                <TableCell className='aCases' align="right" sx={{ color: '#fff' }}>Active Cases</TableCell>
                                <TableCell className='rCases' align="right" sx={{ color: '#fff' }}>Recovered Cases</TableCell>
                                <TableCell className='cCases' align="right" sx={{ color: '#fff' }}>Critical Cases</TableCell>
                                <TableCell className='deaths' align="right" sx={{ color: '#fff' }}>Total Deaths</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data ? data.filter((data) => {
                                if (country === "") {
                                    return data;
                                } else if (data.country.toLowerCase().includes(country.toLocaleLowerCase())) {
                                    return data;
                                }
                            }).map((data) => (
                                <TableRow
                                    key={data.country}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className='country' component="th" scope="row" sx={{ color: '#fff' }}>
                                        {data.country}
                                    </TableCell>
                                    <TableCell className='tCases' align="right" sx={{ color: '#fff' }}>{data.cases}</TableCell>
                                    <TableCell className='aCases' align="right" sx={{ color: '#fff' }}>{data.active}</TableCell>
                                    <TableCell className='rCases' align="right" sx={{ color: '#fff' }}>{data.recovered}</TableCell>
                                    <TableCell className='cCases' align="right" sx={{ color: '#fff' }}>{data.critical}</TableCell>
                                    <TableCell className='deaths' align="right" sx={{ color: '#fff' }}>{data.deaths}</TableCell>
                                </TableRow>
                            )) : <> <BeatLoader css={loaderCSS} size={50} color='purple' /> </>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        </>
    )
}

export default Main;
