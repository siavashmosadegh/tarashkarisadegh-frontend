import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({

    root: {
        height: "auto"
    },

    header: {
        textAlign: "center"
    },

    secondHeader: {
        textAlign: "center"
    },

    goToLoginButtonDiv: {
        display: "flex",
        justifyContent: "center"
    },

    goToLoginButton: {
        fontWeight: "bolder",
        width: "100%",
        height: "auto"
    },

    nameInputs: {
        width: "100%",
        height: "50px",
        textAlign: "center"
    },

    addressInput: {
        width: "100%",
        height: "100px",
        textAlign: "center"
    },

    registerButtonDiv: {
        display: "flex",
        justifyContent: "center"
    },

    registerButton: {
        textAlign: "center",
        fontWeight: "bolder",
        fontSize: "30px",
        width: "100px",
        height: "auto"
    }


});


export default useStyles;