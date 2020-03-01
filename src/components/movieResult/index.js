import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'

const MovieResult = props =>{
    return(
        <Card>
            <Grid container>
                <Grid item>
                    <img src="" />
                </Grid>
                <Grid item>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Button color="primary" variant="contained">More info</Button>
                </Grid>
            </Grid>
        </Card>
    )
}