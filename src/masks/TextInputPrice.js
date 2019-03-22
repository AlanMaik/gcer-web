import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addField, FieldTitle } from 'ra-core'

import CurrencyInput from 'react-currency-input'
import ResettableTextField from './ResettableTextField'
import sanitizeRestProps from './sanitizeRestProps'

const TextMaskPrice = props => {
  const { inputRef, ...other } = props

  return (
    <CurrencyInput
      {...other}
      ref={inputRef}
      decimalSeparator=","
      thousandSeparator="."
      prefix="R$ "
      //value= {value}
    />
  )
}

TextMaskPrice.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

export class TextInputPrice extends Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleBlur = eventOrValue => {
    this.props.onBlur(eventOrValue)
    this.props.input.onBlur(eventOrValue)
  }

  handleFocus = event => {
    this.props.onFocus(event)
    this.props.input.onFocus(event)
  }

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
    } = this.props
    if (typeof meta === 'undefined') {
      throw new Error(
        "The TextInputPrice component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details.",
      )
    }
    const { touched, error } = meta

    return (
      <ResettableTextField
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
          inputComponent: TextMaskPrice,
        }}
      />
    )
  }
}

TextInputPrice.propTypes = {
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
}

TextInputPrice.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  options: {},
  type: 'text',
}

export default addField(TextInputPrice)
