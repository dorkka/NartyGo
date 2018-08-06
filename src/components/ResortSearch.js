import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import * as actions from '../store/resorts/actionCreators';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
  </div>
);

export class ResortSearch extends Component {
  state = {
    groupedOptions: [{}, {}]
  }
  componentDidMount() {
    this.props.getAllResorts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityOptions !== this.props.cityOptions) {
      this.setState({
        groupedOptions: [
          {
            label: 'Ośrodki Narciarskie',
            options: this.props.resortsOptions,
          },
          {
            label: 'Miasta',
            options: this.props.cityOptions,
          },
        ]
      })
    }
  }

  render() {
    return (
      <Select
        matchProp="value"
        placeholder="wprowadź ośrodek lub miasto"
        options={this.state.groupedOptions}
        formatGroupLabel={formatGroupLabel}
      />
    );
  }
}

ResortSearch.propTypes = {
  resortsOptions: PropTypes.array,
  cityOptions: PropTypes.array,
  getAllResorts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  resortsOptions: state.resorts.resortsOptions,
  cityOptions: state.resorts.cityOptions,
})
const mapDispatchToProps = {
  getAllResorts: actions.getAllResorts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResortSearch); 
