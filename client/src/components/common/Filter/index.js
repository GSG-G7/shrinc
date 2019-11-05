import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Select, Form, Button, Switch, notification } from 'antd';

import Loader from '../Loader';
import { types, ranges } from './staticData';
import './style.css';

const { Option } = Select;

class Filter extends Component {
  state = {
    cities: [],
  };

  componentDidMount = async () => {
    const result = await axios.get('/api/v1/cities');
    const availableCities = result.data.data;
    this.setState({ cities: availableCities });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      handleSubmit,
      form: { validateFieldsAndScroll },
    } = this.props;

    validateFieldsAndScroll((err, data) => {
      if (!err) {
        handleSubmit(data);
      } else {
        this.openNotificationWithIcon(err);
      }
    });
  };

  openNotificationWithIcon = e => {
    notification.error({
      message: "can't make filter new try agian later",
      description: e.message,
      duration: 2,
    });
  };

  render() {
    const { cities } = this.state;
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="filter__form">
        <Form.Item label="Type of therapy">
          {getFieldDecorator('type')(
            <Select>
              {types.map(type => (
                <Option value={type} key={type}>
                  {type}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Location">
          {getFieldDecorator('city')(
            <Select>
              {cities.length ? (
                cities.map(type => (
                  <Option value={type} key={type}>
                    {type}
                  </Option>
                ))
              ) : (
                <Option key="no-result" value="no-result">
                  <Loader />
                </Option>
              )}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Price">
          {getFieldDecorator('priceRange')(
            <Select>
              {ranges.map(type => (
                <Option value={type} key={type}>
                  {type}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="isRemote" className="label__swich-btn">
          {getFieldDecorator('remote')(<Switch defaultChecked />)}
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
