import React, { Component } from 'react';
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
    photoLoading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
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
  //   console.log(info);
  // };

  // beforeUpload = info => {
  //   console.log(info);
  // };

  render() {
    const { photoLoading } = this.state;
    const { Option } = Select;
    const uploadPhoto = (
      <div>
        <Icon type={photoLoading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <h2>Therapist Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Full Name:">
            <Input
              name="fullName"
              onChange={this.handleChange}
              placeholder=""
            />
          </Form.Item>
          <Form.Item label="Email:">
            <Input name="email" onChange={this.handleChange} placeholder="" />
          </Form.Item>
          <Form.Item label="Password:">
            <Input.Password
              name="password"
              onChange={this.handleChange}
              placeholder=""
            />
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
            <Select placeholder="Select a type" onChange={this.handleType}>
              <Option value="CBT">Cognitive behavioural therapy</Option>
              <Option value="PD">Psyhcodynamic therapy</Option>
              <Option value="Hu">Humanistic psychotherapy</Option>
              <Option value="In">Integrative psychotherapy</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Price Range:">
            <Select placeholder="Select a range" onChange={this.handlePrice}>
              <Option value="20-30">20-30</Option>
              <Option value="30-40">30-40</Option>
              <Option value="40-50">40-50</Option>
              <Option value="50-60">50-60</Option>
            </Select>
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
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              onChange={this.handlePhoto}
            >
              <uploadPhoto />
            </Upload>
          </Form.Item>
          <Form.Item label="Remote Therapy:">
            <Switch name="remote" onChange={this.handleRemote} />
          </Form.Item>
          <Form.Item label="Skype:">
            <Input name="skype" onChange={this.handleChange} placeholder="" />
          </Form.Item>
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

export default Signup;
