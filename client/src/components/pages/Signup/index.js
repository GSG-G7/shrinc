import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Select,
  Switch,
  Icon,
  Upload,
  Button,
  Checkbox,
} from 'antd';

import Avalibility from '../../common/availabilityTable';
import './style.css';

class Signup extends Component {
  state = { remote: false, confirmDirty: false, available: [] };

  handleSubmit = e => {
    e.preventDefault();
    // const {
    //   form: { validateFieldsAndScroll },
    // } = this.props;
    // validateFieldsAndScroll((err, values) => {
    //   console.log(values);
    // });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  uploadInput = file => {
    this.image = file;
  };

  handleRemote = checked => {
    this.setState({ remote: checked });
  };

  onChange = (time, timeString, key, point) => {
    this.setState(previous => {
      const newAvailable = [...previous.available];
      newAvailable[key] = { ...newAvailable[key], [point]: timeString };
      return { available: newAvailable };
    });
  };

  render() {
    const { Option } = Select;
    const { remote } = this.state;
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div>
        <h2>Therapist Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Full Name:">
            {getFieldDecorator('fullName', {
              rules: [
                {
                  message: 'The name is not valid!',
                },
                {
                  required: true,
                  message: 'Please input your full name!',
                },
                {
                  min: 7,
                  message: 'must be at least 7 character',
                },
              ],
            })(<Input placeholder="Enter your full name" />)}
          </Form.Item>
          <Form.Item label="Email:">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input placeholder="Enter your email" />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 8,
                  message: 'at least 8 character',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="City:">
            {getFieldDecorator('city', {
              rules: [
                {
                  required: true,
                  message: 'Please input your city!',
                },
              ],
            })(<Input placeholder="Enter your city" />)}
          </Form.Item>
          <Form.Item label="Type Of Therapy:">
            {getFieldDecorator('types', {
              rules: [
                {
                  required: true,
                  message: 'Please select type!',
                },
              ],
            })(
              <Select placeholder="Select a type" onChange={this.handleType}>
                <Option value="CBT">Cognitive behavioural therapy</Option>
                <Option value="PD">Psyhcodynamic therapy</Option>
                <Option value="Hu">Humanistic psychotherapy</Option>
                <Option value="In">Integrative psychotherapy</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Price Range:">
            {getFieldDecorator('priceRange', {
              rules: [
                {
                  required: true,
                  message: 'Please select price range!',
                },
              ],
            })(
              <Select placeholder="Select a range" onChange={this.handlePrice}>
                <Option value="20-30">20-30</Option>
                <Option value="30-40">30-40</Option>
                <Option value="40-50">40-50</Option>
                <Option value="50-60">50-60</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Post Code:">
            {getFieldDecorator('postCode', {
              rules: [
                {
                  required: true,
                  message: 'Please input post code!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input placeholder="Enter post code" />)}
          </Form.Item>
          <Form.Item>
            <Avalibility onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="Add Photo:">
            <Upload
              accept="image/*"
              style={{ width: '100%' }}
              customRequest={() => {}}
              listType="picture"
              ref={this.uploadInput}
            >
              <Button size="large">
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Remote Therapy:">
            <Switch name="remote" onChange={this.handleRemote} />
          </Form.Item>
          {remote ? (
            <Form.Item label="Skype:">
              {getFieldDecorator('skype', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your skype!',
                  },
                ],
              })(<Input name="skype" placeholder="Enter your skype" />)}
            </Form.Item>
          ) : (
            ''
          )}
          <Form.Item>
            {getFieldDecorator('terms', {
              rules: [
                {
                  required: true,
                  message: 'Please accept the terms of services ',
                },
              ],
            })(<Checkbox>I Accept the Terms of Services</Checkbox>)}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}

Signup.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  getFieldDecorator: PropTypes.func.isRequired,
};

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(
  Signup
);

export default WrappedTimeRelatedForm;
