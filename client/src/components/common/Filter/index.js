import React, { Component } from 'react';
import './style.css';
import { Select, Switch, Icon } from 'antd';

const { Option } = Select;

class Filter extends Component {
  state = {
    typeOfTherapy: '',
    location: '',
    PriceRange: '',
    isRemote: true,
  };

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

  handleChange = (key, asd) => {
    this.setState(
      () => ({ [asd.props.state]: key }),
      () => console.log(this.state)
    );
  };

  handleClick = e => this.setState(() => ({ isRemote: e }));

  render() {
    return (
      <div>
        <label htmlFor="business">
          <span>Type of therapy</span>
          <Select
            key="typeOfTherapy"
            defaultValue="selecte type"
            style={{ width: 200, color: 'red' }}
            onChange={this.handleChange}
          >
            {this.types.map(type => (
              <Option value={type} state="typeOfTherapy" key={type}>
                {type} Therapy
              </Option>
            ))}
          </Select>
        </label>
        <label>
          <span>Location</span>
          <Select
            key="location"
            defaultValue="selecte location"
            style={{ width: 200, color: 'red' }}
            onChange={this.handleChange}
          >
            {this.citeies.map(city => (
              <Option value={city} state="location" key={city}>
                {city}
              </Option>
            ))}
          </Select>
        </label>
        <label>
          <span>Price range</span>
          <Select
            key="price-range"
            defaultValue="selecte range"
            style={{ width: 200, color: 'red' }}
            onChange={this.handleChange}
          >
            {this.ranges.map(range => (
              <Option value={range} state="PriceRange" key={range}>
                {range}
              </Option>
            ))}
          </Select>
        </label>
        <div>
          <span>Remote therapy</span>
          <Switch
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="close" />}
            defaultChecked
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
