import React from 'react';
import {
    withStyles, FormControl, InputLabel, Input, FormHelperText
} from 'material-ui';
import {
    Clear, Check
} from 'material-ui-icons';
import PropTypes from 'prop-types';

import { customInputStyle } from 'variables';

class CustomInput extends React.Component {
  render() {
      const {input,classes, formControlProps, labelText, id, labelProps,inputRef, inputProps,meta} = this.props;
      return (
        <FormControl {...formControlProps} className={classes.formControl}>
            {labelText !== undefined ? (<InputLabel
                classes={{
                    root: classes.labelRoot + ((meta && meta.touched && meta.error) ? " " + classes.labelRootError:((meta && meta.touched && meta.valid)) ? " " + classes.labelRootSuccess:""),
                }}
                htmlFor={id}
                {...labelProps}
            >
                {labelText}
            </InputLabel>):null}
            <Input
                classes={{
                    root: (labelText !== undefined ? "":classes.marginTop),
                    disabled: classes.disabled,
                    underline: classes.underline,
                    inkbar: ((meta && meta.touched && meta.error) ? classes.inkbarError:(meta && meta.touched && meta.valid) ? classes.inkbarSuccess:classes.inkbar),
                }}
                id={id}
                value={input?input.value:undefined}
                inputProps={input}
                inputRef={inputRef}
                {...inputProps}
            />
            {(meta && meta.touched && meta.error) ? <Clear className={classes.feedback + " " + classes.labelRootError}/>:(meta && meta.touched && meta.valid) ? <Check className={classes.feedback + " " + classes.labelRootSuccess}/>:null}
            <FormHelperText
                classes={{
                    root: classes.labelRoot + ((meta && meta.touched && meta.error) ? " " + classes.labelRootError:((meta && meta.touched && meta.valid)) ? " " + classes.labelRootSuccess:""),
                }}
                id= {id?id+"-error-text":""}>{(meta && meta.touched && meta.error)? meta.error: ""}</FormHelperText>
        </FormControl>
    );
  }
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    meta:PropTypes.object,
    error: PropTypes.bool,
    onChange:PropTypes.func,
    success: PropTypes.bool
}

export default withStyles(customInputStyle)(CustomInput);
