import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { Select, Form, Button, Switch } from 'antd';

const { Option } = Select;

// const { Option } = Select;
class Filter extends Component {
  citeies = [
    'London',
    ' Midlands',
    ' Manchester',
    'West-Yorkshire ',
    'Merseyside',
    'South-Yorkshire ',
    'Tyne-&-Wea',
  ];

  types = [
    'Interpersonal',
    'Family-focused',
    'Dialectical-behavior',
    'Cognitive-behavioral',
  ];

  ranges = ['1000-2000', '2000-3000', '3000-4000', '4000<'];

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
              {this.types.map(type => (
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
              {this.citeies.map(type => (
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
              {this.ranges.map(type => (
                <Option value={type} key={type}>
                  {type} Therapy
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <div className="asd">
          <Form.Item label="isRemote" className="label__swich-btn">
            {getFieldDecorator('isRomete')(
              <Switch defaultChecked className="" />
            )}
          </Form.Item>
        </div>

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
