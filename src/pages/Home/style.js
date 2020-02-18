import { makeStyles } from '@material-ui/core'

const centeredStyleObj = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}

export default makeStyles({
    container:{
        height:'100vh',
        flexDirection:'column',
        ...centeredStyleObj
    },
    cardContainer:{
        ...centeredStyleObj,
        flexDirection:'column',
        width:500,
        height:200,
        padding: '2rem',
    },
    title:{
        fontSize:'4rem'
    },
    titleGridContainer:{
        ...centeredStyleObj,
    },
    textFieldSearch:{
        width: '90%'
    },
    searchButton:{
        marginLeft : '1rem'
    },
    buttonsContainer:{
        marginTop : '.5rem'
    },
    movieIcon:{
        marginLeft:'.5rem',
        fontSize:'3rem'
    }

})