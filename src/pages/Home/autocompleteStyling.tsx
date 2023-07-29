import { makeStyles } from "@material-ui/styles";

const autocompleteStyling = makeStyles(() => ({
    root: {
        // "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
        //     // Default transform is "translate(14px, 20px) scale(1)""
        //     // This lines up the label with the initial cursor position in the input
        //     // after changing its padding-left.
        //     transform: "translate(34px, 20px) scale(1);"
        // },
        // "&.Mui-focused .MuiInputLabel-outlined": {
        //     color: "black",
        //     background: "#0089ED",
        // },
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