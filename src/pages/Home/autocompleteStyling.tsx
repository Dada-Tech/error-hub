import { makeStyles } from "@material-ui/styles";

const autocompleteStyling = makeStyles(() => ({
    root: {
          "&.MuiAutocomplete-hasPopupIcon.css-1h51icj-MuiAutocomplete-root .MuiOutlinedInput-root": {
              borderRadius: "13px",
          }
    },
    inputRoot: {
        color: "black",
        background: "white",
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
            // Default left padding is 6px
            paddingLeft: 26
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black"
        }
    }
}));

export default autocompleteStyling;