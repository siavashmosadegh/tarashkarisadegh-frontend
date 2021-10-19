import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({

    Modal : {
        position: "fixed",
        zIndex: "500",
        backgroundColor: "white",
        width: "70%",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        left: "15%",
        top: "30%",
        boxSizing: "border-box",
        transition: "all 0.3s ease-out"
    }
});

export default useStyles;