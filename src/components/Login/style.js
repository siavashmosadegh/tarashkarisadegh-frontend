import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root : {
        //marginTop: "50px",
        //paddingTop: "50px",
        paddingBottom: "25px",
        height: "auto"
        //display: "flex",
        //justifyContent: "center"
    },

    firstHeader: {
        textAlign: "center"
    },

    secondHeader: {
        textAlign: "center"
    },

    goToRegisterButton: {
        fontWeight: "bolder",
        width: "100%",
        height: "auto"
    },

    goToRegisterButtonDiv: {
        display: "flex",
        justifyContent: "center"
    },

    input: {
        width: "100%",
        height: "50px",
        textAlign: "right"
    },

    loginButtonDiv: {
        display: "flex",
        justifyContent: "center"
    },

    loginButton: {
        textAlign: "center",
        fontWeight: "bolder",
        fontSize: "30px",
        width: "100px",
        height: "auto"
    }
});


export default useStyles;