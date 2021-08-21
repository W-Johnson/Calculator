import React from "react";
import {Button, Grid} from "@material-ui/core";
import './styles/ToolBar.css';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        justify: 'center',
        color: theme.palette.text.secondary,
        border: "big",
        borderColor: "black",
        width: 100
    },
}));

interface CurrentCalcul {
    calcul: string
    setCalcul: (str: string) => void

}


function ToolBar(calcul: CurrentCalcul) {

    const classes = useStyles();
    let one = (): void => {
        calcul.setCalcul(calcul.calcul + "1")
    }
    let two = (): void => {
        calcul.setCalcul(calcul.calcul + "2")
    }
    let three = (): void => {
        calcul.setCalcul(calcul.calcul + "3")
    }
    let four = (): void => {
        calcul.setCalcul(calcul.calcul + "4")
    }
    let five = (): void => {
        calcul.setCalcul(calcul.calcul + "5")
    }
    let six = (): void => {
        calcul.setCalcul(calcul.calcul + "6")
    }
    let seven = (): void => {
        calcul.setCalcul(calcul.calcul + "7")
    }
    let eight = (): void => {
        calcul.setCalcul(calcul.calcul + "8")
    }
    let nine = (): void => {
        calcul.setCalcul(calcul.calcul + "9")
    }
    let clear = (): void => {
        calcul.setCalcul("")
    }
    let plus = (): void => {
        calcul.setCalcul(calcul.calcul + " + ")
    }
    let minus = (): void => {
        calcul.setCalcul(calcul.calcul + " - ")
    }
    let div = (): void => {
        calcul.setCalcul(calcul.calcul + " / ")
    }
    let mod = (): void => {
        calcul.setCalcul(calcul.calcul + " % ")
    }
    let time = (): void => {
        calcul.setCalcul(calcul.calcul + " * ")
    }
    let zero = (): void => {
        calcul.setCalcul(calcul.calcul + "0")
    }
    let result = (): void => {
        const res : string = eval(calcul.calcul)
        calcul.setCalcul(res)
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item spacing={1}>
                    <Button className={classes.paper} onClick={clear}>C</Button>
                    <Button className={classes.paper} onClick={result}>=</Button>
                    <Button className={classes.paper} onClick={mod}>%</Button>
                    <Button className={classes.paper} onClick={plus}>+</Button>

                </Grid>
                <Grid container item spacing={1}>
                    <Button className={classes.paper} onClick={seven}>7</Button>
                    <Button className={classes.paper} onClick={eight}>8</Button>
                    <Button className={classes.paper} onClick={nine}>9</Button>
                    <Button className={classes.paper} onClick={minus}>-</Button>
                </Grid>
                <Grid container item spacing={1}>
                    <Button className={classes.paper} onClick={four}>4</Button>
                    <Button className={classes.paper} onClick={five}>5</Button>
                    <Button className={classes.paper} onClick={six}>6</Button>
                    <Button className={classes.paper} onClick={div}>/</Button>
                </Grid>
                <Grid container item spacing={1}>
                    <Button className={classes.paper} onClick={one}>1</Button>
                    <Button className={classes.paper} onClick={two}>2</Button>
                    <Button className={classes.paper} onClick={three}>3</Button>
                    <Button className={classes.paper} onClick={time}>*</Button>
                </Grid>
                <Grid container item spacing={1}>
                    <Button className={classes.paper} onClick={zero}>0</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ToolBar;