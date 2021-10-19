import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({

    root: {
        backgroundColor: "#21252b",
        display: "flex",
        justifyContent: "space-between"
    },

    rightColumn: {
        height: "auto",
        backgroundColor: "#21252b",
        padding: "150px"
    },
    
    rightColumnHeader: {
        color: "white",
        fontWeight: "bolder",
        fontSize: "70px",
        textAlign: "right"
    },

    hrSomething: {
        width: "200px",
        align: "right",
        backgroundColor: "gold",
        marginRight: "0px"
    },

    title: {
        textAlign: "right",
        color: "white"
    }
    
});


export default useStyles;