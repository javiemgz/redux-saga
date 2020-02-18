import React, { useState } from 'react'
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import styles from './style'
import { MovieIcon } from '../../icons'


export default ({ history }) => {
	const [searchText, setSearchText] = useState('')

	const handleSearchTextChange = (event) => {
		setSearchText(event.target.value)
	}
	const handleCleanTextClick = (e) => {
		setSearchText("")
	}
	const handleSearchTextClick = (e) => {
		history.push(`/results?movieName=${searchText}`)
	}

	const classes = styles()

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>

					<Grid>
						<Typography className={classes.title}>AWILKOMEN!</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder="Buscar..."
					onChange={handleSearchTextChange}
					className={classes.textFieldSearch}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" className={classes.searchButton} color="secondary" onClick={handleCleanTextClick} >Limpiar</Button>
					<Button variant="contained" color="primary" onClick={handleSearchTextClick} >Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}