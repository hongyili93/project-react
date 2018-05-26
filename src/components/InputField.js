import React, { Component } from 'react';

class InputField extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { value: props.value || '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleKeyDown(e) {
        const {
            onKeyDown,
            onSubmitEditing
        } = this.props;
        const { value } = this.state;
        switch (e.keyCode) {
            case 13:
                if (value >= 0) {
                    onSubmitEditing && onSubmitEditing(value);
                }
                this.setState({ value: '' });
                break;
        }
        onKeyDown && onKeyDown(e);
    }

    render() {
        return (
            <input
                autoFocus
                onBlur={this.toggleEditMode}
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

export default InputField;