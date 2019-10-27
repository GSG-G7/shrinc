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

import './style.css';

class Signup extends Component {
  state = {
    therapistInfo: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      city: '',
      therapyType: '',
      priceRange: '',
      postCode: '',
      remote: false,
      skype: '',
      termAccepted: false,
    },
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    validateFieldsAndScroll();
  };

  handleChange = ({ target: input }) => {
    const {
      therapistInfo: { ...therapistInfo },
    } = this.state;
    therapistInfo[input.name] = input.value;
    this.setState({ therapistInfo });
  };

  handleSelect = value => {
    const {
      therapistInfo: { ...therapistInfo },
    } = this.state;
    therapistInfo.therapyType = value;
    this.setState({ therapistInfo });
  };

  handlePrice = value => {
    const {
      therapistInfo: { ...therapistInfo },
    } = this.state;
    therapistInfo.priceRange = value;
    this.setState({ therapistInfo });
  };

  handleRemote = checked => {
    const {
      therapistInfo: { ...therapistInfo },
    } = this.state;
    therapistInfo.remote = checked;
    this.setState({ therapistInfo });
  };

  handleChecked = ({ target: { checked } }) => {
    const {
      therapistInfo: { ...therapistInfo },
    } = this.state;
    therapistInfo.termAccepted = checked;
    this.setState({ therapistInfo });
  };

  // handlePhoto = info => {
  //   console.log('handle', info);
  // };

  uploadInput = e => {
    this.image = e;
  };

  // beforeUpload = info => {
  //   console.log('before', info);
  // };

  render() {
    const { Option } = Select;
    const {
      therapistInfo: { remote },
    } = this.state;
    const {
      form: { getFieldDecorator },
    } = this.props;
    // console.log(this.props);
    return (
      <div>
        <h2>Therapist Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Full Name:">
            {getFieldDecorator('fullName', {
              rules: [
                {
                  message: 'The input is not valid!',
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
            })(
              <Input
                name="fullName"
                onChange={this.handleChange}
                placeholder="Enter your full name"
              />
            )}
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
            })(
              <Input
                onChange={this.handleChange}
                placeholder="Enter your email"
              />
            )}
          </Form.Item>
          <Form.Item label="Password:">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
            {/* <Input.Password
              name="password"
              onChange={this.handleChange}
              placeholder=""
            /> */}
          </Form.Item>
          <Form.Item label="Confirm Password:">
            <Input.Password
              name="confirmPassword"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item label="City:">
            <Input name="city" onChange={this.handleChange} placeholder="" />
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
            <Input
              name="postCode"
              onChange={this.handleChange}
              placeholder=""
            />
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
              <Input name="skype" onChange={this.handleChange} placeholder="" />
            </Form.Item>
          ) : (
            ''
          )}
          <Form.Item>
            <Checkbox onChange={this.handleChecked}>
              I Accept the Terms of Services
            </Checkbox>
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
