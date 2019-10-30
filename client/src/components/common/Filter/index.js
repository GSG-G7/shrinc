import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Select, Form, Button, Switch } from 'antd';
import { cities, types, ranges } from './staticData';
import './style.css';

const { Option } = Select;

class Filter extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      handleSubmit,
      form: { validateFieldsAndScroll },
    } = this.props;

    validateFieldsAndScroll((err, data) => {
      if (!err) {
        handleSubmit(data);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Type of therapy">
          {getFieldDecorator('TypeOfTherapy')(
            <Select>
              {types.map(type => (
                <Option value={type} key={type}>
                  {type} Therapy
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Location">
          {getFieldDecorator('location')(
            <Select>
              {cities.map(type => (
                <Option value={type} key={type}>
                  {type} Therapy
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Price">
          {getFieldDecorator('range')(
            <Select>
              {ranges.map(type => (
                <Option value={type} key={type}>
                  {type} Therapy
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="isRemote" className="label__swich-btn">
          {getFieldDecorator('isRomete')(<Switch defaultChecked />)}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="filter__submit-button"
          >
            Filter
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Filter);

Filter.propTypes = {
  form: PropTypes.shape({
    validateFieldsAndScroll: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default WrappedRegistrationForm;
