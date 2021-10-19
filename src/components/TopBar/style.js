import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({

    root : {
        backgroundColor: "gray",
        //height: "80px",
        marginTop: "30px",
        marginBottom: "30px"
    },
    searchBar : {
        
    },

    title: {
        //alignSelf: "center",
        textAlign: "center",
        fontSize: "30px",
        marginTop: "10px"
    },

    leftColumn: {
        alignSelf: "center"
    },

    middleColumn: {
        alignSelf: "center"
    },

    rightColumn: {
        alignSelf: "center"
    },

    login: {
        textAlign: "center",
        fontSize: "20px"
    },

    register: {
        textAlign: "center",
        fontSize: "20px"
    }
});


export default useStyles;