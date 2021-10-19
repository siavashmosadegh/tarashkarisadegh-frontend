import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    
    root: {
        textAlign: "center",
        margin: "40px",
        display: "flex",
        justifyContent: "center",
        border: "1px solid #ccc",
        //width: "100px",
        height: "50px"
    },

    label: {
        alignSelf: "center",
        marginRight: "10px",
        fontWeight: "bolder"
    },

    more: {
        marginLeft: "10px",
        marginRight: "10px",
        fontWeight: "bolder"
    },

    less: {
        marginLeft: "10px",
        fontWeight: "bolder"
    },

    truckPictureDiv: {
        display: "flex",
        justifyContent: "flexEnd"
    }
});


export default useStyles;