import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addField, FieldTitle } from 'ra-core';

import ResettableTextField from './ResettableTextField';
import sanitizeRestProps from './sanitizeRestProps';

import MaskedInput from 'react-text-mask';

const TextMaskPhone = (props) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            
        />
    );
}

TextMaskPhone.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export class TextInputPhone extends Component {

    state = {
        textmask: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleBlur = eventOrValue => {
        this.props.onBlur(eventOrValue);
        this.props.input.onBlur(eventOrValue);
    };

    handleFocus = event => {
        this.props.onFocus(event);
        this.props.input.onFocus(event);
    };

    render() {

        const {
            className,
            input,
            isRequired,
            label,
            meta,
            options,
            resource,
            source,
            type,
            ...rest
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error(
                "The TextInputPhone component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details."
            );
        }
        const { touched, error } = meta;

        return (
            <ResettableTextField
                id="maskExample"
                margin="normal"
                type={type}
                label={
                    label === false ? (
                        label
                    ) : (
                            <FieldTitle
                                label={label}
                                source={source}
                                resource={resource}
                                isRequired={isRequired}
                            />
                        )
                }
                error={!!(touched && error)}
                helperText={touched && error}

                className={className}
                {...options}
                {...sanitizeRestProps(rest)}
                {...input}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                InputProps={{
                    inputComponent: TextMaskPhone,
                    value: this.state.textmask,
                    onChange: this.handleChange('textmask'),
                }}
            />
        );
    }
}

TextInputPhone.propTypes = {
    className: PropTypes.string,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    meta: PropTypes.object,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    type: PropTypes.string,
};

TextInputPhone.defaultProps = {
    onBlur: () => { },
    onChange: () => { },
    onFocus: () => { },
    options: {},
    type: 'text',
};

export default addField(TextInputPhone);
