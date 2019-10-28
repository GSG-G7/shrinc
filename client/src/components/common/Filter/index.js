import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Select, Form, Button, Switch } from 'antd';
import { citeies, types, ranges } from './staticData';

const { Option } = Select;

class Filter extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
              {citeies.map(type => (
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

        <Form.Item {...tailFormItemLayout}>
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
};
export default WrappedRegistrationForm;
