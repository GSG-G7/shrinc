import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  Select,
  Switch,
  Icon,
  Upload,
  Button,
  Checkbox,
  notification
} from "antd";
import axios from "axios";
import Helmet from "react-helmet";

import { Avalibility, Map, Loader } from "../../common";

import staticData from "./staticData";
import "./style.css";

class SignupForm extends Component {
  state = {
    remote: false,
    confirmDirty: false,
    available: [
      { day: "Mon", from: "", to: "" },
      { day: "Tue", from: "", to: "" },
      { day: "Wen", from: "", to: "" },
      { day: "Thu", from: "", to: "" },
      { day: "Fri", from: "", to: "" },
      { day: "Sat", from: "", to: "" },
      { day: "Sun", from: "", to: "" }
    ],
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFieldsAndScroll },
      history: { push }
    } = this.props;
    const { remote, available } = this.state;
    validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const formData = new FormData();
        const data = { ...values };
        data.remote = remote;
        const file = this.image.state.fileList[0].originFileObj;
        formData.append("data", JSON.stringify(data));
        formData.append("avalibility", JSON.stringify(available));
        formData.append("image", file);
        try {
          this.setState({ loading: true });
          const res = await axios.post("/api/v1/signup", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
          this.setState({ loading: false });
          this.successNotification(res.data.message);
          setTimeout(() => push("/"), 2000);
        } catch (error) {
          this.setState({ loading: false });
          if (error.response.status === 400)
            this.errorNotification(error.response.data.message);
          else this.errorNotification("Server Error");
        }
      }
    });
  };

  errorNotification = message => {
    notification.error({
      message: "Error",
      description: message,
      duration: 2
    });
  };

  successNotification = message => {
    notification.open({
      message: "Success",
      description: message,
      duration: 2
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("The passwords do not currently match");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
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

  insuranceValidation = (rule, value, callback) => {
    if (value && value.length === 1) {
      callback("you should select more than one");
    } else {
      callback();
    }
  };

  handleCity = city => {
    const {
      form: { setFieldsValue }
    } = this.props;
    setFieldsValue({
      city
    });
  };

  render() {
    const { Option } = Select;
    const { remote, loading } = this.state;
    const {
      form: { getFieldDecorator }
    } = this.props;
    const { languages, prices, insurance, types } = staticData;
    return (
      <div className="signup-page">
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        {loading ? <Loader className="signup_loader" /> : ""}
        <h2 className="signup-page__title">Therapist sign up</h2>
        <Form onSubmit={this.handleSubmit} className="signup-page__form">
          <Form.Item label="Full name:">
            {getFieldDecorator("fullName", {
              rules: [
                {
                  message: "The name is not valid"
                },
                {
                  required: true,
                  message: "Please input your full name"
                },
                {
                  min: 5,
                  message: "Name must be at least 5 characters"
                }
              ]
            })(<Input placeholder="Enter your full name" />)}
          </Form.Item>
          <Form.Item label="Email:">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not a valid E-mail"
                },
                {
                  required: true,
                  message: "Please input your E-mail"
                }
              ]
            })(<Input placeholder="Enter your email" />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password"
                },
                {
                  min: 8,
                  message: "Password must be at least least 8 characters"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password placeholder="Enter your password" />)}
          </Form.Item>
          <Form.Item label="Confirm password" hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input.Password
                placeholder="Confirm your password"
                onBlur={this.handleConfirmBlur}
              />
            )}
          </Form.Item>
          <Form.Item label="Click on the map to place your location (We only use the city that you are located in):">
            {getFieldDecorator("city", {
              initialValue: "",
              rules: [
                {
                  required: true,
                  message: "Please mark your location on the map"
                }
              ]
            })(<Map handleCity={this.handleCity} />)}
          </Form.Item>
          <Form.Item label="Post code:">
            {getFieldDecorator("postCode", {
              rules: [
                {
                  required: true,
                  message: "Please input your post code"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input placeholder="Enter post code" />)}
          </Form.Item>
          <Form.Item label="Type of therapy:">
            {getFieldDecorator("type", {
              rules: [
                {
                  required: true,
                  message: "Please select a type of therapy"
                }
              ]
            })(
              <Select placeholder="Select a type" onChange={this.handleType}>
                {types.map(({ abbreviation, therapy }) => (
                  <Option value={abbreviation}>{therapy}</Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Price range:">
            {getFieldDecorator("priceRange", {
              rules: [
                {
                  required: true,
                  message: "Please select a price range"
                }
              ]
            })(
              <Select placeholder="Select a range" onChange={this.handlePrice}>
                {prices.map(price => (
                  <Option value={price} key={price}>
                    {price}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Languages spoken:">
            {getFieldDecorator("language", {
              rules: [
                {
                  required: true,
                  message: "Please select the languages that you speak"
                }
              ]
            })(
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select your language(s)"
                optionLabelProp="label"
              >
                {languages.map(language => (
                  <Option value={language} label={language} key={language}>
                    {language}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Health insurance:">
            {getFieldDecorator("insurance", {
              rules: [
                {
                  required: true
                },
                {
                  validator: this.insuranceValidation
                }
              ]
            })(
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select insurance(s)"
                optionLabelProp="label"
              >
                {insurance.map(item => (
                  <Option value={item} label={item} key={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Please describe your approach:">
            {getFieldDecorator("approch", {
              rules: [
                {
                  message: "The approach is not valid"
                },
                {
                  required: true,
                  message: "Please input your approach"
                },
                {
                  max: 200,
                  message: "Maximum 200 characters"
                }
              ]
            })(<Input.TextArea placeholder="Enter your approach" />)}
          </Form.Item>
          <Form.Item label="Please define your availability:">
            <Avalibility onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="Add photo:">
            {getFieldDecorator("image", {
              rules: [
                {
                  required: true,
                  message: "Please upload your image"
                }
              ]
            })(
              <Upload
                accept="image/*"
                style={{ width: "100%" }}
                customRequest={() => {}}
                listType="picture"
                ref={this.uploadInput}
              >
                <Button size="large">
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>
          <Form.Item label="Do you offer remote consultations?">
            <Switch name="remote" onChange={this.handleRemote} />
          </Form.Item>
          {remote ? (
            <Form.Item label="Skype:">
              {getFieldDecorator("skype", {
                rules: [
                  {
                    required: true,
                    message: "Please input your skype"
                  }
                ]
              })(<Input name="skype" placeholder="Enter your skype" />)}
            </Form.Item>
          ) : (
            ""
          )}
          <Form.Item>
            {getFieldDecorator("terms", {
              rules: [
                {
                  required: true,
                  message: "Please accept the terms of services "
                }
              ]
            })(
              <Checkbox>
                I consent to share my information with Shrinc and for it to
                appear in search results on the app.
              </Checkbox>
            )}
          </Form.Item>
          <Button
            type="primary"
            className="signup-page__button"
            htmlType="submit"
            disabled={loading}
          >
            Sign up
          </Button>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  getFieldDecorator: PropTypes.func.isRequired,
  setFieldsValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

const Signup = Form.create({ name: "Signup" })(SignupForm);

export default Signup;
